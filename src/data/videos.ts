import type { Video } from "./Video";
import { mediaUrl } from "../utils/media";

export const videos: Video[] = [
    {
        id: "my-first-video",

        title: "My First Video",

        description:
            "An example video uploaded to Neptune View™.",

        channelId: "example-channel",

        channelName: "Example Channel",

        videoUrl: mediaUrl(
            "media/videos/example.mp4"
        ),

        thumbnailUrl: mediaUrl(
            "media/thumbnails/example.jpg"
        ),

        duration: 157,

        category: "other",

        tags: [
            "first video",
            "example"
        ],

        language: "en",

        resolution: {
            width: 1920,
            height: 1080
        },

        statistics: {
            views: 0,
            likes: 0,
            comments: 0
        },

        uploadedAt: "2026-08-07T00:05:00Z",

        updatedAt: "2026-08-07T00:05:00Z",

        visibility: "public",

        rating: "all-ages",

        license: "neptune-standard"
    }
];