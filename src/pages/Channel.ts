import {
    getChannelById,
    getSubscriberCount
} from "../data/channels";

import {
    isSubscribed,
    subscribe,
    unsubscribe
} from "../data/subscriptions";

import {
    CURRENT_USER_ID
} from "../data/currentUser";

import { videos } from "../data/videos";

import {
    formatDuration,
    formatViews
} from "../data/videoUtils";

function formatDate(date: string): string {
    return new Date(date).toLocaleDateString(
        "en-US",
        {
            month: "long",
            day: "numeric",
            year: "numeric"
        }
    );
}

export function Channel(
    channelId: string
): string {

    const channel = getChannelById(channelId);

    if (channel === undefined) {
        return `
            <section class="welcome-box">

                <div class="box-title">
                    Channel Not Found
                </div>

                <div class="box-content">

                    <h1>404</h1>

                    <p>
                        This channel does not exist.
                    </p>

                    <p>
                        <a
                            href="/channels"
                            data-link
                        >
                            Browse Channels
                        </a>
                    </p>

                </div>

            </section>
        `;
    }

    const subscribed =
        isSubscribed(
            CURRENT_USER_ID,
            channel.id
        );

    const subscriberCount =
        getSubscriberCount(channel.id);

    const channelVideos = videos.filter(
        (video) =>
            video.channelId === channel.id
    );

    const totalViews =
        channelVideos.reduce(
            (total, video) =>
                total + video.statistics.views,
            0
        );

    const videoCards = channelVideos
        .map(
            (video) => `
                <article class="channel-video-card">

                    <a
                        href="/watch/${video.id}"
                        data-link
                        class="channel-video-thumbnail"
                    >

                        <div class="thumbnail">

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${formatDuration(
                                    video.duration
                                )}
                            </span>

                        </div>

                    </a>

                    <a
                        href="/watch/${video.id}"
                        data-link
                        class="video-title"
                    >
                        ${video.title}
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
        <section class="channel-page">

            <div class="channel-banner">

                <img
                    src="${channel.bannerUrl}"
                    alt=""
                >

            </div>

            <div class="channel-header">

                <img
                    class="profile-avatar"
                    src="${channel.avatarUrl}"
                    alt="${channel.name}"
                >

                <div class="profile-information">

                    <h1>
                        ${channel.name}
                    </h1>

                    <div class="subscriber-count">
                        ${subscriberCount.toLocaleString()}
                        subscribers
                    </div>

                </div>

                <div class="channel-actions">

                    <button
                        type="button"
                        class="subscribe-button"
                        data-subscribe="${channel.id}"
                    >
                        ${subscribed ? "Subscribed" : "Subscribe"}
                    </button>

                </div>

            </div>

            <nav class="channel-navigation">

                <a
                    href="/channels/${channel.id}"
                    data-link
                    class="active"
                >
                    Videos
                </a>

                <a
                    href="/channels/${channel.id}/about"
                    data-link
                >
                    About
                </a>

            </nav>

        </section>

        <section class="channel-content">

            <div class="channel-main">

                <section class="video-section">

                    <div class="section-header">
                        Videos
                    </div>

                    ${
                        channelVideos.length > 0
                            ? `
                                <div class="video-grid">
                                    ${videoCards}
                                </div>
                            `
                            : `
                                <div class="empty-state">

                                    <strong>
                                        No videos yet.
                                    </strong>

                                    <p>
                                        This channel hasn't
                                        uploaded any videos.
                                    </p>

                                </div>
                            `
                    }

                </section>

            </div>

            <aside class="channel-sidebar">

                <section class="channel-info-box">

                    <div class="box-title">
                        Channel Information
                    </div>

                    <div class="box-content">

                        <div class="channel-stat">
                            <strong>
                                Videos:
                            </strong>

                            ${channelVideos.length}
                        </div>

                        <div class="channel-stat">
                            <strong>
                                Views:
                            </strong>

                            ${totalViews.toLocaleString()}
                        </div>

                        <div class="channel-stat">
                            <strong>
                                Subscribers:
                            </strong>

                            ${channel.subscribers.toLocaleString()}
                        </div>

                        <div class="channel-stat">
                            <strong>
                                Joined:
                            </strong>

                            ${formatDate(
                                channel.createdAt
                            )}
                        </div>

                    </div>

                </section>

                <section class="channel-info-box">

                    <div class="box-title">
                        About
                    </div>

                    <div class="box-content">

                        <p>
                            ${channel.description}
                        </p>

                    </div>

                </section>

            </aside>

        </section>
    `;
}

export function setupChannelEvents(): void {
    const subscribeButton =
        document.querySelector<HTMLButtonElement>(
            "[data-subscribe]"
        );

    if (!subscribeButton) {
        return;
    }

    subscribeButton.addEventListener(
        "click",
        () => {

            const channelId =
                subscribeButton.dataset.subscribe;

            if (!channelId) {
                return;
            }

            const currentlySubscribed =
                isSubscribed(
                    CURRENT_USER_ID,
                    channelId
                );

            if (currentlySubscribed) {
                unsubscribe(
                    CURRENT_USER_ID,
                    channelId
                );
            } else {
                subscribe(
                    CURRENT_USER_ID,
                    channelId
                );
            }

            window.dispatchEvent(
                new Event(
                    "neptune-subscription-changed"
                )
            );
        }
    );
}