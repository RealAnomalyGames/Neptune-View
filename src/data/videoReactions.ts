import type { VideoReaction } from "./VideoReaction";

const STORAGE_KEY =
    "neptune-view-video-reactions";

function loadReactions(): VideoReaction[] {
    const stored =
        localStorage.getItem(STORAGE_KEY);

    if (!stored) {
        return [];
    }

    try {
        return JSON.parse(stored) as VideoReaction[];
    } catch {
        return [];
    }
}

function saveReactions(
    reactions: VideoReaction[]
): void {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(reactions)
    );
}

function getReaction(
    userId: string,
    videoId: string
): VideoReaction {
    const reactions = loadReactions();

    const existing =
        reactions.find(
            (reaction) =>
                reaction.userId === userId &&
                reaction.videoId === videoId
        );

    if (existing) {
        return existing;
    }

    return {
        userId,
        videoId,
        liked: false,
        favorited: false
    };
}

function saveReaction(
    reaction: VideoReaction
): void {
    const reactions = loadReactions();

    const index =
        reactions.findIndex(
            (item) =>
                item.userId === reaction.userId &&
                item.videoId === reaction.videoId
        );

    if (index === -1) {
        reactions.push(reaction);
    } else {
        reactions[index] = reaction;
    }

    saveReactions(reactions);
}

export function isVideoLiked(
    userId: string,
    videoId: string
): boolean {
    return getReaction(
        userId,
        videoId
    ).liked;
}

export function isVideoFavorited(
    userId: string,
    videoId: string
): boolean {
    return getReaction(
        userId,
        videoId
    ).favorited;
}

export function toggleLike(
    userId: string,
    videoId: string
): void {
    const reaction =
        getReaction(
            userId,
            videoId
        );

    reaction.liked =
        !reaction.liked;

    saveReaction(reaction);
}

export function toggleFavorite(
    userId: string,
    videoId: string
): void {
    const reaction =
        getReaction(
            userId,
            videoId
        );

    reaction.favorited =
        !reaction.favorited;

    saveReaction(reaction);
}

export function getLikedVideoIds(
    userId: string
): string[] {
    return loadReactions()
        .filter(
            (reaction) =>
                reaction.userId === userId &&
                reaction.liked
        )
        .map(
            (reaction) =>
                reaction.videoId
        );
}

export function getFavoriteVideoIds(
    userId: string
): string[] {
    return loadReactions()
        .filter(
            (reaction) =>
                reaction.userId === userId &&
                reaction.favorited
        )
        .map(
            (reaction) =>
                reaction.videoId
        );
}