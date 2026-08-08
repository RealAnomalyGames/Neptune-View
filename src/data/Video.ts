export type VideoVisibility =
    | "public"
    | "unlisted"
    | "private";

export type VideoLicense =
    | "neptune-standard"
    | "cc-by"
    | "cc-by-sa"
    | "cc0";

export type VideoRating =
    | "all-ages"
    | "teen"
    | "mature";

export interface VideoResolution {
    width: number;
    height: number;
}

export interface VideoStatistics {
    views: number;
    likes: number;
    comments: number;
}

export type VideoCategory =
    | "music"
    | "gaming"
    | "technology"
    | "entertainment"
    | "education"
    | "news"
    | "sports"
    | "people"
    | "other";

export interface Video {
    id: string;

    title: string;
    description: string;

    channelId: string;
    channelName: string;

    videoUrl: string;
    thumbnailUrl: string;

    duration: number;

    category: VideoCategory;
    tags: string[];

    language: string;

    resolution: VideoResolution;

    statistics: VideoStatistics;

    uploadedAt: string;
    updatedAt: string;

    visibility: VideoVisibility;

    rating: VideoRating;

    license: VideoLicense;
}