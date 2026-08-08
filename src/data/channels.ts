import type { Channel } from "./Channel";
import { getSubscriptions } from "./subscriptions";

export const channels: Channel[] = [
    {
        id: "neptune-corporation",

        userId: "neptune-corporation",

        name: "Neptune Corporation™",

        description:
            "Official videos, announcements, development updates, and other content from Neptune Corporation™.",

        avatarUrl:
            "/images/avatars/neptune.png",

        bannerUrl:
            "/images/banners/neptune.png",

        createdAt:
            "2026-08-01T00:00:00Z",

        subscribers: 0
    },

    {
        id: "example-channel",

        userId: "example-user",

        name: "Example Channel",

        description:
            "An example Neptune View™ channel.",

        avatarUrl:
            "/images/avatars/example.png",

        bannerUrl:
            "/images/banners/example.png",

        createdAt:
            "2026-08-05T00:00:00Z",

        subscribers: 0
    }
];

export function getChannelById(
    id: string
): Channel | undefined {
    return channels.find(
        (channel: Channel) => channel.id === id
    );
}

export function getSubscriberCount(
    channelId: string
): number {
    const channel = getChannelById(channelId);

    if (!channel) {
        return 0;
    }

    const subscriptions =
        getSubscriptions().filter(
            (subscription) =>
                subscription.channelId === channelId
        );

    return channel.subscribers + subscriptions.length;
}