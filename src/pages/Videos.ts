import { videos } from "../data/videos";
import {
    formatDuration,
    formatViews,
    getLatestVideos,
    getPopularVideos,
    getMostLikedVideos,
    getMostCommentedVideos
} from "../data/videoUtils";
import type { Video } from "../data/Video";

const BASE_PATH = "/Neptune-View";

function getSortedVideos(sort: string | null): Video[] {
    switch (sort) {
        case "popular":
            return getPopularVideos(videos);

        case "liked":
            return getMostLikedVideos(videos);

        case "commented":
            return getMostCommentedVideos(videos);

        case "latest":
        default:
            return getLatestVideos(videos);
    }
}

function getSortName(sort: string | null): string {
    switch (sort) {
        case "popular":
            return "Most Viewed";

        case "liked":
            return "Most Liked";

        case "commented":
            return "Most Commented";

        case "latest":
        default:
            return "Latest Videos";
    }
}

export function Videos(): string {
    const params = new URLSearchParams(
        window.location.search
    );

    const sort = params.get("sort");
    const sortedVideos = getSortedVideos(sort);
    const sortName = getSortName(sort);

    const videoCards = sortedVideos
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
                        href="${BASE_PATH}/watch/${video.id}"
                        class="video-title"
                        data-link
                    >
                        ${video.title}
                    </a>

                    <div class="video-meta">
                        ${video.channelName}
                    </div>

                    <div class="video-meta">
                        ${video.category}
                    </div>

                    <div class="video-stats">
                        ${formatViews(video.statistics.views)}
                        · ${video.statistics.likes} likes
                        · ${video.statistics.comments} comments
                    </div>

                </article>
            `
        )
        .join("");

    return `
        <section class="welcome-box">

            <div class="box-title">
                Browse Videos
            </div>

            <div class="box-content">

                <h1>${sortName}</h1>

                <p>
                    Browse Neptune View™ videos in the order
                    you choose. There are no personalized
                    recommendations here.
                </p>

                <div class="video-sort-links">

                    <strong>Sort by:</strong>

                    <a
                        href="/videos?sort=latest"
                        data-link
                    >
                        Latest
                    </a>

                    |

                    <a
                        href="/videos?sort=popular"
                        data-link
                    >
                        Most Viewed
                    </a>

                    |

                    <a
                        href="/videos?sort=liked"
                        data-link
                    >
                        Most Liked
                    </a>

                    |

                    <a
                        href="/videos?sort=commented"
                        data-link
                    >
                        Most Commented
                    </a>

                </div>

            </div>

        </section>

        <section class="video-section">

            <div class="section-header">

                ${sortName}

                <span>
                    ${sortedVideos.length} videos
                </span>

            </div>

            ${
                sortedVideos.length > 0
                    ? `
                        <div class="video-grid">
                            ${videoCards}
                        </div>
                    `
                    : `
                        <div class="empty-state">
                            <strong>
                                No videos found.
                            </strong>

                            <p>
                                There aren't any videos in
                                this section yet.
                            </p>
                        </div>
                    `
            }

        </section>
    `;
}