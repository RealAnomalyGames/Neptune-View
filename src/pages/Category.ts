import { videos } from "../data/videos";
import {
    getCategoryById
} from "../data/categories";
import {
    getVideosByCategory,
    formatDuration,
    formatViews,
    getLatestVideos
} from "../data/videoUtils";
import type { VideoCategory } from "../data/Video";

export function Category(
    categoryId: string
): string {

    const category =
        getCategoryById(categoryId);

    if (!category) {
        return `
            <section class="welcome-box">

                <div class="box-title">
                    Category Not Found
                </div>

                <div class="box-content">

                    <h1>404</h1>

                    <p>
                        This category does not exist.
                    </p>

                    <p>
                        <a
                            href="/categories"
                            data-link
                        >
                            Browse Categories
                        </a>
                    </p>

                </div>

            </section>
        `;
    }

    const categoryVideos =
        getLatestVideos(
            getVideosByCategory(
                videos,
                categoryId as VideoCategory
            )
        );

    const videoCards = categoryVideos
        .map(
            (video) => `
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${formatDuration(video.duration)}
                        </span>

                    </div>

                    <a
                        href="/watch/${video.id}"
                        data-link
                        class="video-title"
                    >
                        ${video.title}
                    </a>

                    <div class="video-meta">
                        ${video.channelName}
                    </div>

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
                ${category.name}
            </div>

            <div class="box-content">

                <h1>${category.name}</h1>

                <p>
                    ${category.description}
                </p>

                <p>
                    ${categoryVideos.length}
                    videos in this category.
                </p>

            </div>

        </section>

        <section class="video-section">

            <div class="section-header">
                Latest in ${category.name}
            </div>

            ${
                categoryVideos.length > 0
                    ? `
                        <div class="video-grid">
                            ${videoCards}
                        </div>
                    `
                    : `
                        <div class="empty-state">
                            No videos have been
                            uploaded to this category yet.
                        </div>
                    `
            }

        </section>
    `;
}