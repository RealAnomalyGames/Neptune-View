import { channels } from "../data/channels";

export function Channels(): string {
    const channelCards = channels
        .map(
            (channel) => `
                <a
                    href="/channels/${channel.id}"
                    data-link
                    class="channel-card"
                >

                    <img
                        class="channel-card-avatar"
                        src="${channel.avatarUrl}"
                        alt="${channel.name}"
                    >

                    <div class="channel-card-info">

                        <div class="channel-card-name">
                            ${channel.name}
                        </div>

                        <div class="channel-card-subs">
                            ${channel.subscribers}
                            subscribers
                        </div>

                    </div>

                </a>
            `
        )
        .join("");

    return `
        <section class="welcome-box">

            <div class="box-title">
                Channels
            </div>

            <div class="box-content">

                <h1>Browse Channels</h1>

                <p>
                    Find creators and channels
                    on Neptune View™.
                </p>

            </div>

        </section>

        <section class="channel-directory">

            ${channelCards}

        </section>
    `;
}