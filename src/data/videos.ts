import type { Video } from "./Video";

export const videos: Video[] = [
    {
        id: "welcome-to-neptune-view",

        title: "Welcome to Neptune View",

        description:
            "Welcome to Neptune View™, a video-sharing website where you decide what you watch.",

        channelId: "neptune-corporation",

        channelName: "Neptune Corporation™",

        videoUrl: "/videos/welcome.mp4",

        thumbnailUrl: "/images/thumbnails/welcome.jpg",

        duration: 92,

        category: "technology",

        tags: [
            "neptune",
            "neptune view",
            "announcement",
            "technology"
        ],

        language: "en",

        resolution: {
            width: 1280,
            height: 720
        },

        statistics: {
            views: 142,
            likes: 23,
            comments: 7
        },

        uploadedAt: "2026-08-07T00:00:00Z",

        updatedAt: "2026-08-07T00:00:00Z",

        visibility: "public",

        rating: "all-ages",

        license: "neptune-standard"
    },

    {
        id: "my-first-video",

        title: "My First Video",

        description:
            "An example video uploaded to Neptune View™.",

        channelId: "example-channel",

        channelName: "Example Channel",

        videoUrl: "/videos/example.mp4",

        thumbnailUrl: "/images/thumbnails/example.jpg",

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
            views: 83,
            likes: 31,
            comments: 12
        },

        uploadedAt: "2026-08-07T00:05:00Z",

        updatedAt: "2026-08-07T00:05:00Z",

        visibility: "public",

        rating: "all-ages",

        license: "neptune-standard"
    },

    {
        id: "something-interesting",

        title: "Something Interesting",

        description:
            "Just a random example video for Neptune View™.",

        channelId: "example-channel",

        channelName: "Example Channel",

        videoUrl: "/videos/interesting.mp4",

        thumbnailUrl: "/images/thumbnails/interesting.jpg",

        duration: 245,

        category: "other",

        tags: [
            "random",
            "interesting"
        ],

        language: "en",

        resolution: {
            width: 1280,
            height: 720
        },

        statistics: {
            views: 219,
            likes: 18,
            comments: 4
        },

        uploadedAt: "2026-08-07T00:10:00Z",

        updatedAt: "2026-08-07T00:10:00Z",

        visibility: "public",

        rating: "all-ages",

        license: "neptune-standard"
    }
];