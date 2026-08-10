import { videos } from "../data/videos";

import {
    formatDuration,
    formatViews
} from "../data/videoUtils";

export function RandomVideo(): string {
    if (videos.length === 0) {
        return `
            <section class="welcome-box">

                <div class="box-title">
                    Random Video
                </div>

                <div class="box-content">

                    <h1>
                        No Videos Available
                    </h1>

                    <p>
                        There are currently no videos
                        to choose from.
                    </p>

                </div>

            </section>
        `;
    }

    const randomIndex =
        Math.floor(
            Math.random() * videos.length
        );

    const video =
        videos[randomIndex];

    return `
        <section class="welcome-box">

            <div class="box-title">
                Random Video
            </div>

            <div class="box-content">

                <h1>
                    Random Video
                </h1>

                <p>
                    Neptune View picked a
                    completely random video.
                </p>

                <a
                    href="/watch/${video.id}"
                    data-link
                    class="random-video-button"
                >
                    Watch Random Video
                </a>

            </div>

        </section>

        <section class="video-section">

            <div class="section-header">
                Your Random Video
            </div>

            <div class="random-video-card">

                <a
                    href="/watch/${video.id}"
                    data-link
                    class="thumbnail random-video-thumbnail"
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

                <div class="random-video-information">

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

                    <p>
                        ${video.description}
                    </p>

                </div>

            </div>

        </section>
    `;
}