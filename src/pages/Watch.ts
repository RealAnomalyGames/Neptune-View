import { videos } from "../data/videos";
import {
    formatDuration,
    formatViews,
    formatDate,
    getVideoById
} from "../data/videoUtils";
import type { Video } from "../data/Video";
import {
    getCommentsForVideo,
    addComment,
    deleteComment
} from "../data/comments";

import {
    CURRENT_USER_ID
} from "../data/currentUser";
import {
    isVideoLiked,
    isVideoFavorited,
    toggleLike,
    toggleFavorite
} from "../data/videoReactions";

const BASE_PATH = "/Neptune-View";

function formatUploadDate(date: string): string {
    return new Date(date).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );
}

function getRelatedVideos(video: Video): Video[] {
    return videos
        .filter(
            (candidate) =>
                candidate.id !== video.id &&
                candidate.channelId === video.channelId
        )
        .slice(0, 3);
}

export function Watch(videoId: string): string {
    const video = getVideoById(videos, videoId);

    if (!video) {
        return `
            <section class="welcome-box">

                <div class="box-title">
                    Video Not Found
                </div>

                <div class="box-content">
                    <h1>404</h1>

                    <p>
                        Sorry, the video you requested
                        could not be found.
                    </p>

                    <p>
                        <a href="/videos" data-link>
                            Browse Videos
                        </a>
                    </p>
                </div>

            </section>
        `;
    }

    const comments =
        getCommentsForVideo(video.id);

    const liked =
        isVideoLiked(
            CURRENT_USER_ID,
            video.id
        );

    const favorited =
        isVideoFavorited(
            CURRENT_USER_ID,
            video.id
        );

    const commentList =
        comments
            .slice()
            .reverse()
            .map(
                (comment) => `
                    <article
                        class="comment"
                        data-comment-id="${comment.id}"
                    >

                        <div class="comment-header">

                            <strong>
                                ${comment.username}
                            </strong>

                            <span>
                                ${new Date(
                                    comment.createdAt
                                ).toLocaleString()}
                            </span>

                        </div>

                        <div class="comment-content">
                            ${comment.content}
                        </div>

                        ${
                            comment.userId ===
                            CURRENT_USER_ID
                                ? `
                                    <button
                                        type="button"
                                        class="comment-delete"
                                        data-delete-comment="${comment.id}"
                                    >
                                        Delete
                                    </button>
                                `
                                : ""
                        }

                    </article>
                `
            )
            .join("");

    const relatedVideos = getRelatedVideos(video);

    const relatedCards = relatedVideos
        .map(
            (related) => `
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${formatDuration(related.duration)}
                        </span>

                    </div>

                    <a
                        href="${BASE_PATH}/watch/${related.id}"
                        class="video-title"
                        data-link
                    >
                        ${related.title}
                    </a>

                    <div class="video-meta">
                        ${related.channelName}
                    </div>

                    <div class="video-stats">
                        ${formatViews(related.statistics.views)}
                    </div>

                </article>
            `
        )
        .join("");

    return `
        <section class="watch-page">

            <div class="video-player">

                <video
                    controls
                    preload="metadata"
                    poster="${video.thumbnailUrl}"
                >
                    <source
                        src="${video.videoUrl}"
                        type="video/mp4"
                    >

                    Your browser does not support
                    HTML5 video.
                </video>

            </div>

            <section class="video-information">

                <h1 class="watch-title">
                    ${video.title}
                </h1>

                <div class="watch-stats">
                    ${formatViews(video.statistics.views)}
                    ·
                    ${video.statistics.likes} likes
                    ·
                    ${video.statistics.comments} comments
                    ·
                    Uploaded ${formatDate(video.uploadedAt)}
                </div>

            </section>

            <section class="channel-panel">

                <div class="channel-avatar">
                    ${video.channelName.charAt(0)}
                </div>

                <div class="channel-info">

                    <a
                        href="/channels/${video.channelId}"
                        data-link
                        class="channel-name"
                    >
                        ${video.channelName}
                    </a>

                    <div class="channel-label">
                        Channel
                    </div>

                </div>

            </section>

            <div class="video-actions">

                <button
                    type="button"
                    class="video-action-button ${liked ? "active" : ""}"
                    data-like-video="${video.id}"
                >
                    ${liked ? "Liked" : "Like"}
                </button>

                <button
                    type="button"
                    class="video-action-button ${favorited ? "active" : ""}"
                    data-favorite-video="${video.id}"
                >
                    ${favorited ? "Favorited" : "Favorite"}
                </button>

            </div>

            <section class="description-box">

                <div class="box-title">
                    Description
                </div>

                <div class="box-content">

                    <p>
                        ${video.description}
                    </p>

                    <p>
                        <strong>Category:</strong>
                        ${video.category}
                    </p>

                    <p>
                        <strong>Duration:</strong>
                        ${formatDuration(video.duration)}
                    </p>

                    <p>
                        <strong>Resolution:</strong>
                        ${video.resolution.width} ×
                        ${video.resolution.height}
                    </p>

                    <p>
                        <strong>Language:</strong>
                        ${video.language.toUpperCase()}
                    </p>

                    <p>
                        <strong>Rating:</strong>
                        ${video.rating}
                    </p>

                    <p>
                        <strong>License:</strong>
                        ${video.license}
                    </p>

                    <div class="video-tags">

                        <strong>Tags:</strong>

                        ${video.tags
                            .map(
                                (tag) => `
                                    <a
                                        href="/search?tag=${encodeURIComponent(tag)}"
                                        data-link
                                    >
                                        ${tag}
                                    </a>
                                `
                            )
                            .join(" · ")}

                    </div>

                </div>

            </section>

            <section class="comments-section">

                <div class="section-header">
                    Comments
                    <span>
                        ${comments.length}
                    </span>
                </div>

                <form
                    class="comment-form"
                        id="comment-form"
                        data-video-id="${video.id}"
                    >

                    <textarea
                        id="comment-input"
                        placeholder="Write a comment..."
                        maxlength="1000"
                        required
                    ></textarea>

                    <div class="comment-form-footer">

                        <span>
                            1000 characters maximum
                        </span>

                        <button
                            type="submit"
                            class="comment-submit"
                        >
                            Post Comment
                        </button>

                    </div>

                </form>

                <div class="comment-list">

                    ${
                        comments.length > 0
                            ? commentList
                            : `
                                <div class="empty-state">
                                    No comments yet.
                                    Be the first to comment!
                                </div>
                            `
                    }

                </div>

            </section>

            ${
                relatedVideos.length > 0
                    ? `
                        <section class="video-section">

                            <div class="section-header">
                                More from
                                ${video.channelName}
                            </div>

                            <div class="video-grid">
                                ${relatedCards}
                            </div>

                        </section>
                    `
                    : ""
            }

        </section>
    `;
}

export function setupCommentEvents(): void {
    const form =
        document.querySelector<HTMLFormElement>(
            "#comment-form"
        );

    const input =
        document.querySelector<HTMLTextAreaElement>(
            "#comment-input"
        );

    if (form && input) {
        form.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();

                const content =
                    input.value.trim();

                const videoId =
                    form.dataset.videoId;

                if (!content || !videoId) {
                    return;
                }

                addComment(
                    videoId,
                    CURRENT_USER_ID,
                    "Example User",
                    content
                );

                window.dispatchEvent(
                    new Event(
                        "neptune-comment-changed"
                    )
                );
            }
        );
    }

    const deleteButtons =
        document.querySelectorAll<HTMLButtonElement>(
            "[data-delete-comment]"
        );

    deleteButtons.forEach(
        (button) => {
            button.addEventListener(
                "click",
                () => {
                    const commentId =
                        button.dataset.deleteComment;

                    if (!commentId) {
                        return;
                    }

                    deleteComment(
                        commentId,
                        CURRENT_USER_ID
                    );

                    window.dispatchEvent(
                        new Event(
                            "neptune-comment-changed"
                        )
                    );
                }
            );
        }
    );
}

export function setupVideoReactionEvents(): void {
    const likeButton =
        document.querySelector<HTMLButtonElement>(
            "[data-like-video]"
        );

    const favoriteButton =
        document.querySelector<HTMLButtonElement>(
            "[data-favorite-video]"
        );

    if (likeButton) {
        likeButton.addEventListener(
            "click",
            () => {
                const videoId =
                    likeButton.dataset.likeVideo;

                if (!videoId) {
                    return;
                }

                toggleLike(
                    CURRENT_USER_ID,
                    videoId
                );

                window.dispatchEvent(
                    new Event(
                        "neptune-reaction-changed"
                    )
                );
            }
        );
    }

    if (favoriteButton) {
        favoriteButton.addEventListener(
            "click",
            () => {
                const videoId =
                    favoriteButton.dataset.favoriteVideo;

                if (!videoId) {
                    return;
                }

                toggleFavorite(
                    CURRENT_USER_ID,
                    videoId
                );

                window.dispatchEvent(
                    new Event(
                        "neptune-reaction-changed"
                    )
                );
            }
        );
    }
}