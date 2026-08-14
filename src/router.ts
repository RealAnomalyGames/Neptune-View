import { videos } from "./data/videos";
import { Home } from "./pages/Home";
import { Videos } from "./pages/Videos";
import { Channels } from "./pages/Channels";
import { Categories } from "./pages/Categories";
import { Community } from "./pages/Community";
import {
    Upload,
    setupUploadEvents
} from "./pages/Upload";
import {
    Search,
    setupSearchEvents
} from "./pages/Search";
import {
    Watch,
    setupCommentEvents,
    setupVideoReactionEvents
} from "./pages/Watch";
import { Category } from "./pages/Category";
import { Tags } from "./pages/Tags";
import {
    Channel,
    setupChannelEvents
} from "./pages/Channel";
import { ChannelAbout } from "./pages/ChannelAbout";
import { Subscriptions } from "./pages/Subscriptions";
import { Favorites } from "./pages/Favorites";
import { RandomVideo } from "./pages/RandomVideo";
import {
    MyVideos,
    setupMyVideosEvents
} from "./pages/MyVideos";
import {
    EditVideo,
    setupEditVideoEvents
} from "./pages/EditVideo";

type Page = () => string;

const BASE_PATH = "/Neptune-View";

const routes: Record<string, Page> = {
    "/": Home,
    "/videos": Videos,
    "/channels": Channels,
    "/categories": Categories,
    "/tags": Tags,
    "/subscriptions": Subscriptions,
    "/favorites": Favorites,
    "/community": Community,
    "/upload": Upload
};

export function router(): void {
    const app =
        document.querySelector(
            "#page-content"
        );

    if (!app) {
        throw new Error(
            "Page content container not found."
        );
    }

    const rawPath =
        window.location.pathname;

    const path =
        rawPath.startsWith(BASE_PATH)
            ? rawPath.substring(
                BASE_PATH.length
            ) || "/"
            : rawPath;

    /*
     * Random Video
     */

    if (path === "/random") {
        if (videos.length === 0) {
            app.innerHTML = RandomVideo();

            updateActiveNavigation();

            return;
        }

        const randomIndex =
            Math.floor(
                Math.random() * videos.length
            );

        const randomVideo =
            videos[randomIndex];

        window.history.pushState(
            {},
            "",
            `${BASE_PATH}/watch/${randomVideo.id}`
        );

        router();

        return;
    }

    if (path === "/upload") {
        app.innerHTML = Upload();

        setupUploadEvents();

        updateActiveNavigation();

        return;
    }

    /*
     * Search
     */

    if (path === "/search") {
        const params =
            new URLSearchParams(
                window.location.search
            );

        const query =
            params.get("q") ?? "";

        app.innerHTML =
            Search(query);

        setupSearchEvents();

        updateActiveNavigation();

        return;
    }

    /*
     * Watch
     */

    if (path.startsWith("/watch/")) {
        const videoId =
            decodeURIComponent(
                path.substring(
                    "/watch/".length
                )
            );

        app.innerHTML =
            Watch(videoId);

        setupCommentEvents();

        setupVideoReactionEvents();

        updateActiveNavigation();

        return;
    }

    /*
     * Category
     */

    if (path.startsWith("/categories/")) {
        const categoryId =
            decodeURIComponent(
                path.substring(
                    "/categories/".length
                )
            );

        app.innerHTML =
            Category(categoryId);

        updateActiveNavigation();

        return;
    }

    /*
     * Channel About
     */

    if (
        path.startsWith("/channels/") &&
        path.endsWith("/about")
    ) {
        const channelId =
            decodeURIComponent(
                path
                    .substring(
                        "/channels/".length
                    )
                    .replace(
                        /\/about$/,
                        ""
                    )
            );

        app.innerHTML =
            ChannelAbout(channelId);

        updateActiveNavigation();

        return;
    }

    /*
     * Channel
     */

    if (path.startsWith("/channels/")) {
        const channelId =
            decodeURIComponent(
                path.substring(
                    "/channels/".length
                )
            );

        app.innerHTML =
            Channel(channelId);

        setupChannelEvents();

        updateActiveNavigation();

        return;
    }

    /*
     * Standard pages
     */
    if (path.startsWith("/edit-video/")) {
        const videoId =
            decodeURIComponent(
                path.substring(
                    "/edit-video/".length
                )
            );

        app.innerHTML =
            EditVideo(videoId);

        setupEditVideoEvents();

        updateActiveNavigation();

        return;
    }

    if (path === "/my-videos") {
        app.innerHTML =
            MyVideos();

        setupMyVideosEvents();

        updateActiveNavigation();

        return;
    }

    const page =
        routes[path] ?? NotFound;

    app.innerHTML =
        page();

    updateActiveNavigation();
}

function NotFound(): string {
    return `
        <section class="welcome-box">

            <div class="box-title">
                Page Not Found
            </div>

            <div class="box-content">

                <h1>404</h1>

                <p>
                    Sorry, the page you requested
                    could not be found.
                </p>

                <p>
                    <a
                        href="${BASE_PATH}/"
                        data-link
                    >
                        Return to Neptune View™
                    </a>
                </p>

            </div>

        </section>
    `;
}

function updateActiveNavigation(): void {
    const currentPath =
        window.location.pathname;

    document
        .querySelectorAll<HTMLAnchorElement>(
            ".main-nav a"
        )
        .forEach((link) => {

            const href =
                link.getAttribute("href");

            link.classList.toggle(
                "active",
                href === currentPath
            );
        });
}