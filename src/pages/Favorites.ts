import {
    getFavoriteVideoIds
} from "../data/videoReactions";

import {
    CURRENT_USER_ID
} from "../data/currentUser";

import { videos } from "../data/videos";

import {
    formatDuration,
    formatViews
} from "../data/videoUtils";

export function Favorites(): string {
    const favoriteIds =
        getFavoriteVideoIds(
            CURRENT_USER_ID
        );

    const favoriteVideos =
        videos.filter(
            (video) =>
                favoriteIds.includes(
                    video.id
                )
        );

    const videoCards =
        favoriteVideos
            .map(
                (video) => `
                    <article class="video-card">

                        <a
                            href="/watch/${video.id}"
                            data-link
                            class="thumbnail"
                        >

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${formatDuration(
                                    video.duration
                                )}
                            </span>

                        </a>

                        <a
                            href="/watch/${video.id}"
                            data-link
                            class="video-title"
                        >
                            ${video.title}
                        </a>

                        <a
                            href="/channels/${video.channelId}"
                            data-link
                            class="video-channel"
                        >
                            ${video.channelName}
                        </a>

                        <div class="video-stats">
                            ${formatViews(
                                video.statistics.views
                            )}
                        </div>

                    </article>
                `
            )
            .join("");

    return `
        <section class="welcome-box">

            <div class="box-title">
                Favorites
            </div>

            <div class="box-content">

                <h1>
                    My Favorites
                </h1>

                <p>
                    Videos you've chosen to save
                    to your favorites.
                </p>

            </div>

        </section>

        <section class="video-section">

            <div class="section-header">
                Favorite Videos
            </div>

            ${
                favoriteVideos.length > 0
                    ? `
                        <div class="video-grid">
                            ${videoCards}
                        </div>
                    `
                    : `
                        <div class="empty-state">
                            You haven't favorited
                            any videos yet.
                        </div>
                    `
            }

        </section>
    `;
}