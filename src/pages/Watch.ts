import { videos } from "../data/videos";
import {
    formatDuration,
    formatViews,
    formatDate,
    getVideoById
} from "../data/videoUtils";
import type { Video } from "../data/Video";

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
                        href="/watch/${related.id}"
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

                <div class="watch-actions">

                    <button type="button">
                        Like
                    </button>

                    <button type="button">
                        Share
                    </button>

                    <button type="button">
                        Add to Favorites
                    </button>

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

            <section class="comments-box">

                <div class="box-title">
                    Comments
                </div>

                <div class="box-content">

                    <p>
                        Comments will be available in
                        a future version of Neptune View™.
                    </p>

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