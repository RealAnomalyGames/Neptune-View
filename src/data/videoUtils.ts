import type { Video, VideoCategory } from "./Video";

export function formatDuration(
    seconds: number
): string {
    const hours = Math.floor(seconds / 3600);

    const minutes = Math.floor(
        (seconds % 3600) / 60
    );

    const remainingSeconds =
        seconds % 60;

    const formattedSeconds =
        remainingSeconds
            .toString()
            .padStart(2, "0");

    if (hours > 0) {
        return `${hours}:${minutes
            .toString()
            .padStart(2, "0")}:${formattedSeconds}`;
    }

    return `${minutes}:${formattedSeconds}`;
}

export function formatViews(
    views: number
): string {
    return `${views.toLocaleString()} views`;
}

export function formatDate(
    date: string
): string {
    return new Date(date).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );
}

export function getLatestVideos(
    videoList: Video[]
): Video[] {
    return [...videoList].sort(
        (a, b) =>
            new Date(b.uploadedAt).getTime() -
            new Date(a.uploadedAt).getTime()
    );
}

export function getPopularVideos(
    videoList: Video[]
): Video[] {
    return [...videoList].sort(
        (a, b) =>
            b.statistics.views -
            a.statistics.views
    );
}

export function getMostLikedVideos(
    videoList: Video[]
): Video[] {
    return [...videoList].sort(
        (a, b) =>
            b.statistics.likes -
            a.statistics.likes
    );
}

export function getMostCommentedVideos(
    videoList: Video[]
): Video[] {
    return [...videoList].sort(
        (a, b) =>
            b.statistics.comments -
            a.statistics.comments
    );
}

export function getVideoById(
    videoList: Video[],
    id: string
): Video | undefined {
    return videoList.find(
        (video) => video.id === id
    );
}

export function formatResolution(
    width: number,
    height: number
): string {
    return `${width} × ${height}`;
}

export function formatRating(
    rating: Video["rating"]
): string {
    switch (rating) {
        case "all-ages":
            return "All Ages";

        case "teen":
            return "Teen";

        case "mature":
            return "Mature";

        default:
            return rating;
    }
}

export function formatLicense(
    license: Video["license"]
): string {
    switch (license) {
        case "neptune-standard":
            return "Neptune Standard";

        case "cc-by":
            return "Creative Commons BY";

        case "cc-by-sa":
            return "Creative Commons BY-SA";

        case "cc0":
            return "CC0";

        default:
            return license;
    }
}

export function getVideosByCategory(
    videoList: Video[],
    category: VideoCategory
): Video[] {
    return videoList.filter(
        (video) => video.category === category
    );
}

export function getVideosByTag(
    videoList: Video[],
    tag: string
): Video[] {
    const normalizedTag =
        tag.trim().toLowerCase();

    return videoList.filter(
        (video) =>
            video.tags.some(
                (videoTag) =>
                    videoTag.toLowerCase() ===
                    normalizedTag
            )
    );
}

export function getAllTags(
    videoList: Video[]
): string[] {
    const tags = new Set<string>();

    for (const video of videoList) {
        for (const tag of video.tags) {
            tags.add(tag);
        }
    }

    return Array.from(tags).sort(
        (a, b) => a.localeCompare(b)
    );
}