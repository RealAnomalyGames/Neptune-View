import {
    getAll,
    update,
    remove
} from "../data/videoRepository";

export function MyVideos(): string {
    const videos = getAll();

    return `
        <section class="box">

            <div class="box-title">
                My Videos
            </div>

            <div class="box-content">

                ${
                    videos.length === 0
                        ? `
                            <p>
                                You haven't uploaded
                                any videos yet.
                            </p>
                        `
                        : videos
                            .map(
                                (video) => `
                                    <article
                                        class="video-management-item"
                                        data-video-id="${video.id}"
                                    >

                                        <h2>
                                            ${escapeHtml(
                                                video.title
                                            )}
                                        </h2>

                                        <p>
                                            ${escapeHtml(
                                                video.description
                                            )}
                                        </p>

                                        <p>
                                            <strong>
                                                Category:
                                            </strong>
                                            ${escapeHtml(
                                                video.category
                                            )}
                                        </p>

                                        <p>
                                            <strong>
                                                Tags:
                                            </strong>
                                            ${video.tags
                                                .map(
                                                    (tag) =>
                                                        escapeHtml(tag)
                                                )
                                                .join(", ")}
                                        </p>

                                        <button
                                            type="button"
                                            class="edit-video-button"
                                            data-video-id="${video.id}"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            type="button"
                                            class="delete-video-button"
                                            data-video-id="${video.id}"
                                        >
                                            Delete
                                        </button>

                                    </article>
                                `
                            )
                            .join("")
                }

            </div>

        </section>
    `;
}

export function setupMyVideosEvents(): void {
    document
        .querySelectorAll<HTMLButtonElement>(
            ".edit-video-button"
        )
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const videoId =
                        button.dataset.videoId;

                    if (!videoId) {
                        return;
                    }

                    window.history.pushState(
                        {},
                        "",
                        `/Neptune-View/edit-video/${videoId}`
                    );

                    window.dispatchEvent(
                        new PopStateEvent(
                            "popstate"
                        )
                    );
                }
            );
        });

    document
        .querySelectorAll<HTMLButtonElement>(
            ".delete-video-button"
        )
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const videoId =
                        button.dataset.videoId;

                    if (!videoId) {
                        return;
                    }

                    const confirmed =
                        window.confirm(
                            "Are you sure you want to delete this video?"
                        );

                    if (!confirmed) {
                        return;
                    }

                    const success =
                        remove(videoId);

                    if (!success) {
                        return;
                    }

                    window.location.reload();
                }
            );
        });
}

function escapeHtml(
    value: string
): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}