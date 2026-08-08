import { videos } from "../data/videos";
import { getAllTags } from "../data/videoUtils";

export function Tags(): string {
    const tags = getAllTags(videos);

    const tagLinks = tags
        .map(
            (tag) => `
                <a
                    href="/search?tag=${encodeURIComponent(tag)}"
                    data-link
                    class="tag-link"
                >
                    ${tag}
                </a>
            `
        )
        .join("");

    return `
        <section class="welcome-box">

            <div class="box-title">
                Tags
            </div>

            <div class="box-content">

                <h1>Browse Tags</h1>

                <p>
                    Tags are attached to individual
                    videos and help organize related
                    content.
                </p>

            </div>

        </section>

        <section class="tags-box">
            ${tagLinks}
        </section>
    `;
}