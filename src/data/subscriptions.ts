import type { Subscription } from "./Subscription";

const STORAGE_KEY =
    "neptune-view-subscriptions";

function loadSubscriptions(): Subscription[] {
    const stored =
        localStorage.getItem(STORAGE_KEY);

    if (!stored) {
        return [];
    }

    try {
        return JSON.parse(stored);
    } catch {
        return [];
    }
}

function saveSubscriptions(
    subscriptions: Subscription[]
): void {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(subscriptions)
    );
}

export function getSubscriptions(): Subscription[] {
    return loadSubscriptions();
}

export function isSubscribed(
    userId: string,
    channelId: string
): boolean {
    return loadSubscriptions().some(
        (subscription) =>
            subscription.userId === userId &&
            subscription.channelId === channelId
    );
}

export function subscribe(
    userId: string,
    channelId: string
): void {
    const subscriptions =
        loadSubscriptions();

    const alreadySubscribed =
        subscriptions.some(
            (subscription) =>
                subscription.userId === userId &&
                subscription.channelId === channelId
        );

    if (alreadySubscribed) {
        return;
    }

    subscriptions.push({
        userId,
        channelId,
        subscribedAt:
            new Date().toISOString()
    });

    saveSubscriptions(subscriptions);
}

export function unsubscribe(
    userId: string,
    channelId: string
): void {
    const subscriptions =
        loadSubscriptions();

    const updated =
        subscriptions.filter(
            (subscription) =>
                !(
                    subscription.userId === userId &&
                    subscription.channelId === channelId
                )
        );

    saveSubscriptions(updated);
}

export function getSubscribedChannelIds(
    userId: string
): string[] {
    return loadSubscriptions()
        .filter(
            (subscription) =>
                subscription.userId === userId
        )
        .map(
            (subscription) =>
                subscription.channelId
        );
}