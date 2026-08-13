import { videos } from "../data/videos";

import {
    formatDuration,
    formatViews
} from "../data/videoUtils";

const BASE_PATH = "/Neptune-View";

export function Search(
    query: string = ""
): string {
    const searchQuery =
        query.trim().toLowerCase();

    const results =
        searchQuery.length > 0
            ? videos.filter(
                (video) => {

                    const title =
                        video.title.toLowerCase();

                    const description =
                        video.description.toLowerCase();

                    const channel =
                        video.channelName.toLowerCase();

                    const categories =
                        video.category.toLowerCase();

                    const tags =
                        video.tags
                            .join(" ")
                            .toLowerCase();

                    return (
                        title.includes(searchQuery) ||
                        description.includes(searchQuery) ||
                        channel.includes(searchQuery) ||
                        categories.includes(searchQuery) ||
                        tags.includes(searchQuery)
                    );
                }
            )
            : [];

    const videoCards =
        results
            .map(
                (video) => `
                    <article class="video-card">

                        <a
                            href="${BASE_PATH}/watch/${video.id}"
                            data-link
                            class="thumbnail"
                        >

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${formatDuration(
                                    video.duration
                                )}
                            </span>

                        </a>

                        <a
                            href="${BASE_PATH}/watch/${video.id}"
                            data-link
                            class="video-title"
                        >
                            ${video.title}
                        </a>

                        <a
                            href="/channels/${video.channelId}"
                            data-link
                            class="video-channel"
                        >
                            ${video.channelName}
                        </a>

                        <div class="video-stats">
                            ${formatViews(
                                video.statistics.views
                            )}
                        </div>

                    </article>
                `
            )
            .join("");

    return `
        <section class="welcome-box">

            <div class="box-title">
                Search Neptune View
            </div>

            <div class="box-content">

                <form
                    class="search-page-form"
                    id="search-page-form"
                >

                    <input
                        type="text"
                        id="search-page-input"
                        value="${searchQuery}"
                        placeholder="Search videos..."
                        autocomplete="off"
                    />

                    <button
                        type="submit"
                    >
                        Search
                    </button>

                </form>

            </div>

        </section>

        ${
            searchQuery.length > 0
                ? `
                    <section class="video-section">

                        <div class="section-header">
                            Search Results
                        </div>

                        <div class="search-result-info">
                            ${results.length}
                            result${
                                results.length === 1
                                    ? ""
                                    : "s"
                            }
                            for
                            "<strong>${searchQuery}</strong>"
                        </div>

                        ${
                            results.length > 0
                                ? `
                                    <div class="video-grid">
                                        ${videoCards}
                                    </div>
                                `
                                : `
                                    <div class="empty-state">
                                        No videos matched
                                        your search.
                                    </div>
                                `
                        }

                    </section>
                `
                : `
                    <section class="video-section">

                        <div class="section-header">
                            Search
                        </div>

                        <div class="empty-state">
                            Enter a search term
                            above to find videos.
                        </div>

                    </section>
                `
        }
    `;
}

export function setupSearchEvents(): void {
    const form =
        document.querySelector<HTMLFormElement>(
            "#search-page-form"
        );

    const input =
        document.querySelector<HTMLInputElement>(
            "#search-page-input"
        );

    if (!form || !input) {
        return;
    }

    form.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            const query =
                input.value.trim();

            const encodedQuery =
                encodeURIComponent(query);

            window.history.pushState(
                {},
                "",
                `/search?q=${encodedQuery}`
            );

            window.dispatchEvent(
                new Event("neptune-navigation")
            );
        }
    );
}