const MAX_VIDEO_SIZE =
    500 * 1024 * 1024;

const MAX_THUMBNAIL_SIZE =
    10 * 1024 * 1024;

export function Upload(): string {
    return `
        <section class="box">

            <div class="box-title">
                Upload Video
            </div>

            <div class="box-content">

                <form id="upload-form">

                    <p>
                        <label for="video-title">
                            Video Title
                        </label>
                        <br>

                        <input
                            type="text"
                            id="video-title"
                            name="title"
                            maxlength="100"
                            required
                        >
                    </p>

                    <p>
                        <label for="video-description">
                            Description
                        </label>
                        <br>

                        <textarea
                            id="video-description"
                            name="description"
                            maxlength="5000"
                            rows="8"
                            required
                        ></textarea>
                    </p>

                    <p>
                        <label for="video-file">
                            Video File
                        </label>
                        <br>

                        <input
                            type="file"
                            id="video-file"
                            name="video"
                            accept="video/*"
                            required
                        >
                    </p>

                    <p>
                        <label for="thumbnail-file">
                            Thumbnail
                        </label>
                        <br>

                        <input
                            type="file"
                            id="thumbnail-file"
                            name="thumbnail"
                            accept="image/*"
                            required
                        >
                    </p>

                    <p>
                        <label for="video-category">
                            Category
                        </label>
                        <br>

                        <select
                            id="video-category"
                            name="category"
                            required
                        >
                            <option value="">
                                Select a category
                            </option>

                            <option value="music">
                                Music
                            </option>

                            <option value="gaming">
                                Gaming
                            </option>

                            <option value="entertainment">
                                Entertainment
                            </option>

                            <option value="news">
                                News
                            </option>
                        </select>
                    </p>

                    <p>
                        <label for="video-tags">
                            Tags
                        </label>
                        <br>

                        <input
                            type="text"
                            id="video-tags"
                            name="tags"
                            placeholder="music, electronic, remix"
                        >
                    </p>

                    <p>
                        <button
                            type="submit"
                            id="upload-button"
                        >
                            Upload Video
                        </button>
                    </p>

                </form>

                <div
                    id="upload-status"
                    aria-live="polite"
                ></div>

            </div>

        </section>
    `;
}

export function setupUploadEvents(): void {
    const form =
        document.querySelector<HTMLFormElement>(
            "#upload-form"
        );

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        handleUploadSubmit
    );
}

async function handleUploadSubmit(
    event: SubmitEvent
): Promise<void> {
    event.preventDefault();

    const form =
        event.currentTarget as HTMLFormElement;

    const formData =
        new FormData(form);

    const title =
        String(
            formData.get("title") ?? ""
        ).trim();

    const description =
        String(
            formData.get("description") ?? ""
        ).trim();

    const videoFile =
        formData.get("video");

    const thumbnailFile =
        formData.get("thumbnail");

    const category =
        String(
            formData.get("category") ?? ""
        ).trim();

    const tags =
        String(
            formData.get("tags") ?? ""
        )
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean);

    const status =
        document.querySelector(
            "#upload-status"
        );

    if (!status) {
        return;
    }

    if (title.length < 1) {
        status.textContent =
            "Please enter a video title.";

        return;
    }

    if (title.length > 100) {
        status.textContent =
            "Video titles must be 100 characters or less.";

        return;
    }

    if (!(videoFile instanceof File)) {
        status.textContent =
            "Please select a video file.";

        return;
    }

    if (!(thumbnailFile instanceof File)) {
        status.textContent =
            "Please select a thumbnail.";

        return;
    }

    if (!videoFile.type.startsWith("video/")) {
        status.textContent =
            "The selected file is not a video.";

        return;
    }

    if (!thumbnailFile.type.startsWith("image/")) {
        status.textContent =
            "The selected thumbnail is not an image.";

        return;
    }

    if (videoFile.size > MAX_VIDEO_SIZE) {
        status.textContent =
            "Video files must be 500 MB or smaller.";

        return;
    }

    if (thumbnailFile.size > MAX_THUMBNAIL_SIZE) {
        status.textContent =
            "Thumbnail files must be 10 MB or smaller.";

        return;
    }

    let duration: number;

    try {
        duration =
            await getVideoDuration(
                videoFile
            );
    } catch {
        status.textContent =
            "Unable to read the video duration.";

        return;
    }

    status.textContent =
        "Upload information is valid. Ready for server upload.";
}

function getVideoDuration(
    file: File
): Promise<number> {
    return new Promise(
        (resolve, reject) => {

            const video =
                document.createElement(
                    "video"
                );

            const url =
                URL.createObjectURL(file);

            video.preload = "metadata";

            video.onloadedmetadata = () => {
                URL.revokeObjectURL(url);

                resolve(
                    Math.round(
                        video.duration
                    )
                );
            };

            video.onerror = () => {
                URL.revokeObjectURL(url);

                reject(
                    new Error(
                        "Unable to read video metadata."
                    )
                );
            };

            video.src = url;
        }
    );
}