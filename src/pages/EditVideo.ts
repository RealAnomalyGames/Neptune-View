import {
    getById,
    update
} from "../data/videoRepository";
import type {
    VideoCategory
} from "../data/Video";

export function EditVideo(
    videoId: string
): string {
    const video = getById(videoId);

    if (!video) {
        return `
            <section class="box">

                <div class="box-title">
                    Video Not Found
                </div>

                <div class="box-content">

                    <p>
                        The video you're trying
                        to edit doesn't exist.
                    </p>

                </div>

            </section>
        `;
    }

    return `
        <section class="box">

            <div class="box-title">
                Edit Video
            </div>

            <div class="box-content">

                <form id="edit-video-form">

                    <input
                        type="hidden"
                        id="edit-video-id"
                        value="${escapeHtml(video.id)}"
                    >

                    <p>
                        <label for="edit-video-title">
                            Title
                        </label>
                        <br>

                        <input
                            type="text"
                            id="edit-video-title"
                            value="${escapeHtml(video.title)}"
                            maxlength="100"
                            required
                        >
                    </p>

                    <p>
                        <label for="edit-video-description">
                            Description
                        </label>
                        <br>

                        <textarea
                            id="edit-video-description"
                            rows="8"
                            maxlength="5000"
                            required
                        >${escapeHtml(video.description)}</textarea>
                    </p>

                    <p>
                        <label for="edit-video-category">
                            Category
                        </label>
                        <br>

                        <input
                            type="text"
                            id="edit-video-category"
                            value="${escapeHtml(video.category)}"
                            required
                        >
                    </p>

                    <p>
                        <label for="edit-video-tags">
                            Tags
                        </label>
                        <br>

                        <input
                            type="text"
                            id="edit-video-tags"
                            value="${escapeHtml(
                                video.tags.join(", ")
                            )}"
                        >
                    </p>

                    <p>

                        <button
                            type="submit"
                        >
                            Save Changes
                        </button>

                    </p>

                </form>

                <div
                    id="edit-video-status"
                    aria-live="polite"
                ></div>

            </div>

        </section>
    `;
}

export function setupEditVideoEvents(): void {
    const form =
        document.querySelector<HTMLFormElement>(
            "#edit-video-form"
        );

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            const id =
                document.querySelector<HTMLInputElement>(
                    "#edit-video-id"
                )?.value;

            const title =
                document.querySelector<HTMLInputElement>(
                    "#edit-video-title"
                )?.value.trim();

            const description =
                document.querySelector<HTMLTextAreaElement>(
                    "#edit-video-description"
                )?.value.trim();

            const categoryValue =
                document.querySelector<HTMLInputElement>(
                    "#edit-video-category"
                )?.value.trim();

            const tags =
                document.querySelector<HTMLInputElement>(
                    "#edit-video-tags"
                )?.value
                    .split(",")
                    .map(
                        (tag) => tag.trim()
                    )
                    .filter(Boolean);

            const status =
                document.querySelector(
                    "#edit-video-status"
                );

            if (
                !id ||
                !title ||
                !description ||
                !categoryValue ||
                !tags ||
                !status
            ) {
                return;
            }

            const category =
                categoryValue as VideoCategory;

            const video =
                getById(id);

            if (!video) {
                status.textContent =
                    "Video not found.";

                return;
            }

            const success =
                update({
                    ...video,

                    title,
                    description,
                    category,
                    tags
                });

            if (!success) {
                status.textContent =
                    "Unable to update video.";

                return;
            }

            status.textContent =
                "Video updated successfully.";
        }
    );
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