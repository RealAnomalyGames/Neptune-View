import { channels } from "../data/channels";

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

export function ChannelAbout(
    channelId: string
): string {

    const channel = channels.find(
        (item) => item.id === channelId
    );

    if (!channel) {
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

                </div>

            </section>
        `;
    }

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
                        ${channel.subscribers.toLocaleString()}
                        subscribers
                    </div>

                </div>

            </div>

            <nav class="channel-navigation">

                <a
                    href="/channels/${channel.id}"
                    data-link
                >
                    Videos
                </a>

                <a
                    href="/channels/${channel.id}/about"
                    data-link
                    class="active"
                >
                    About
                </a>

            </nav>

        </section>

        <section class="channel-about">

            <div class="box-title">
                About ${channel.name}
            </div>

            <div class="box-content">

                <p>
                    ${channel.description}
                </p>

                <div class="metadata-list">

                    <div class="metadata-row">

                        <div class="metadata-label">
                            Channel
                        </div>

                        <div class="metadata-value">
                            ${channel.name}
                        </div>

                    </div>

                    <div class="metadata-row">

                        <div class="metadata-label">
                            Subscribers
                        </div>

                        <div class="metadata-value">
                            ${channel.subscribers.toLocaleString()}
                        </div>

                    </div>

                    <div class="metadata-row">

                        <div class="metadata-label">
                            Joined
                        </div>

                        <div class="metadata-value">
                            ${formatDate(
                                channel.createdAt
                            )}
                        </div>

                    </div>

                </div>

            </div>

        </section>
    `;
}