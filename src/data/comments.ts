import type { Comment } from "./Comment";

const STORAGE_KEY =
    "neptune-view-comments";

function loadComments(): Comment[] {
    const stored =
        localStorage.getItem(STORAGE_KEY);

    if (!stored) {
        return [];
    }

    try {
        return JSON.parse(stored) as Comment[];
    } catch {
        return [];
    }
}

function saveComments(
    comments: Comment[]
): void {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(comments)
    );
}

export function getComments(): Comment[] {
    return loadComments();
}

export function getCommentsForVideo(
    videoId: string
): Comment[] {
    return loadComments().filter(
        (comment) =>
            comment.videoId === videoId
    );
}

export function addComment(
    videoId: string,
    userId: string,
    username: string,
    content: string
): void {
    const comments =
        loadComments();

    const comment: Comment = {
        id:
            crypto.randomUUID(),

        videoId,

        userId,

        username,

        content,

        createdAt:
            new Date().toISOString()
    };

    comments.push(comment);

    saveComments(comments);
}

export function deleteComment(
    commentId: string,
    userId: string
): void {
    const comments =
        loadComments();

    const updatedComments =
        comments.filter(
            (comment) =>
                !(
                    comment.id === commentId &&
                    comment.userId === userId
                )
        );

    saveComments(updatedComments);
}