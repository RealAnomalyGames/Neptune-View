import { channels } from "../data/channels";

import {
    getSubscribedChannelIds
} from "../data/subscriptions";

import {
    CURRENT_USER_ID
} from "../data/currentUser";

import { videos } from "../data/videos";

import {
    formatDuration,
    formatViews,
    getLatestVideos
} from "../data/videoUtils";

const BASE_PATH = "/Neptune-View";

export function Subscriptions(): string {
    const subscribedChannelIds =
        getSubscribedChannelIds(
            CURRENT_USER_ID
        );

    const subscribedChannels =
        channels.filter(
            (channel) =>
                subscribedChannelIds.includes(
                    channel.id
                )
        );

    const subscribedVideos =
        getLatestVideos(
            videos.filter(
                (video) =>
                    subscribedChannelIds.includes(
                        video.channelId
                    )
            )
        );

    const videoCards =
        subscribedVideos
            .map(
                (video) => `
                    <article class="video-card">

                        <a
                            href="${BASE_PATH}/watch/${video.id}"
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
                            href="${BASE_PATH}/watch/${video.id}"
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

    const channelLinks =
        subscribedChannels
            .map(
                (channel) => `
                    <a
                        href="/channels/${channel.id}"
                        data-link
                        class="subscription-channel"
                    >
                        ${channel.name}
                    </a>
                `
            )
            .join("");

    return `
        <section class="welcome-box">

            <div class="box-title">
                Subscriptions
            </div>

            <div class="box-content">

                <h1>
                    Your Subscriptions
                </h1>

                <p>
                    Videos from channels you
                    have chosen to subscribe to.
                </p>

            </div>

        </section>

        <section class="subscription-list">

            <div class="section-header">
                Subscribed Channels
            </div>

            ${
                subscribedChannels.length > 0
                    ? channelLinks
                    : `
                        <div class="empty-state">
                            You aren't subscribed
                            to any channels yet.
                        </div>
                    `
            }

        </section>

        <section class="video-section">

            <div class="section-header">
                Latest Videos
            </div>

            ${
                subscribedVideos.length > 0
                    ? `
                        <div class="video-grid">
                            ${videoCards}
                        </div>
                    `
                    : `
                        <div class="empty-state">

                            ${
                                subscribedChannels.length >
                                0
                                    ? `
                                        Your subscribed
                                        channels haven't
                                        uploaded any videos.
                                    `
                                    : `
                                        Subscribe to a
                                        channel to see its
                                        videos here.
                                    `
                            }

                        </div>
                    `
            }

        </section>
    `;
}