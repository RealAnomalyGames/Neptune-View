import type { Category } from "./Category";

export const categories: Category[] = [
    {
        id: "music",
        name: "Music",
        description:
            "Music videos, performances, remixes, and audio."
    },

    {
        id: "gaming",
        name: "Gaming",
        description:
            "Gameplay, game development, reviews, and gaming content."
    },

    {
        id: "technology",
        name: "Technology",
        description:
            "Computers, software, programming, hardware, and technology."
    },

    {
        id: "entertainment",
        name: "Entertainment",
        description:
            "Shows, comedy, animation, and other entertainment."
    },

    {
        id: "education",
        name: "Education",
        description:
            "Tutorials, lessons, explanations, and educational content."
    },

    {
        id: "news",
        name: "News",
        description:
            "News reports, announcements, and current events."
    },

    {
        id: "sports",
        name: "Sports",
        description:
            "Sports videos, highlights, and commentary."
    },

    {
        id: "people",
        name: "People & Blogs",
        description:
            "Personal videos, vlogs, and everyday life."
    },

    {
        id: "other",
        name: "Other",
        description:
            "Videos that don't fit another category."
    }
];

export function getCategoryById(
    id: string
): Category | undefined {
    return categories.find(
        (category) => category.id === id
    );
}

export function getCategoryName(
    id: string
): string {
    return (
        getCategoryById(id)?.name ??
        "Unknown Category"
    );
}