import { videos } from "../data/videos";
import {
    formatDuration,
    formatViews,
    getLatestVideos
} from "../data/videoUtils";

export function Home(): string {
    const latestVideos = getLatestVideos(videos).slice(0, 3);

    const videoCards = latestVideos
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
                        class="video-title"
                    >
                        ${video.title}
                    </a>

                    <div class="video-meta">
                        <a
                            href="/channels/${video.channelId}"
                            data-link
                            class="video-channel"
                        >
                            ${video.channelName}
                        </a>
                    </div>

                    <div class="video-stats">
                        ${formatViews(video.statistics.views)}
                    </div>

                </article>
            `
        )
        .join("");

    return `
        <section class="welcome-box">

            <div class="box-title">
                Welcome to Neptune View™
            </div>

            <div class="box-content">

                <h1>Welcome!</h1>

                <p>
                    Neptune View is a video-sharing website
                    where <strong>you decide what you watch.</strong>
                </p>

                <p>
                    No recommendation algorithm.
                    No endless feed.
                    Just videos, creators, and people.
                </p>

                <div class="button-row">

                    <a href="/videos" data-link>
                        <button>
                            Browse Videos
                        </button>
                    </a>

                    <a href="/channels" data-link>
                        <button>
                            Explore Channels
                        </button>
                    </a>

                </div>

            </div>

        </section>

        <div class="random-video-box">

            <div class="random-video-title">
                Feeling Indecisive?
            </div>

            <div class="random-video-content">

                <p>
                    Don't know what to watch?
                    Let Neptune View pick something
                    completely at random.
                </p>

                <a
                    href="/random"
                    data-link
                    class="random-video-button"
                >
                    🎲 Random Video
                </a>

            </div>

        </div>

        <section class="video-section">

            <div class="section-header">

                Latest Videos

                <a
                    href="/videos"
                    data-link
                >
                    View All →
                </a>

            </div>

            <div class="video-grid">
                ${videoCards}
            </div>

        </section>
    `;
}