import {videos} from "./videos";
import {type Video} from "./Video";

export function getAll(): Video[] {
    return videos;
}

export function getById(
    id: string
): Video | undefined {
    return videos.find(
        (video) => video.id === id
    );
}

export function getByChannel(
    channelId: string
): Video[] {
    return videos.filter(
        (video) =>
            video.channelId === channelId
    );
}

export function getByCategory(
    category: Video["category"]
): Video[] {
    return videos.filter(
        (video) =>
            video.category === category
    );
}

export function getByTag(
    tag: string
): Video[] {
    return videos.filter(
        (video) =>
            video.tags.includes(tag)
    );
}

export function search(
    query: string
): Video[] {
    const normalizedQuery =
        query.trim().toLowerCase();

    if (!normalizedQuery) {
        return [];
    }

    return videos.filter((video) => {
        const title =
            video.title.toLowerCase();

        const description =
            video.description.toLowerCase();

        const tags =
            video.tags
                .join(" ")
                .toLowerCase();

        return (
            title.includes(normalizedQuery) ||
            description.includes(normalizedQuery) ||
            tags.includes(normalizedQuery)
        );
    });
}

export function add(
    video: Video
): void {
    videos.push(video);
}

export function update(
    updatedVideo: Video
): boolean {
    const index =
        videos.findIndex(
            (video) =>
                video.id === updatedVideo.id
        );

    if (index === -1) {
        return false;
    }

    videos[index] = updatedVideo;

    return true;
}

export function remove(
    id: string
): boolean {
    const index =
        videos.findIndex(
            (video) =>
                video.id === id
        );

    if (index === -1) {
        return false;
    }

    videos.splice(index, 1);

    return true;
}