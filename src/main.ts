import "./styles/main.css";
import { router } from "./router";

window.addEventListener(
    "neptune-subscription-changed",
    () => {
        router();
    }
);

window.addEventListener(
    "neptune-comment-changed",
    () => {
        router();
    }
);

window.addEventListener(
    "neptune-reaction-changed",
    () => {
        router();
    }
);

window.addEventListener(
    "neptune-navigation",
    () => {
        router();
    }
);

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
    throw new Error("Application root not found.");
}

app.innerHTML = `
    <div class="site">

        <header class="site-header">
            <div class="logo-area">
                <div class="logo">
                    Neptune View<span>™</span>
                </div>

                <div class="tagline">
                    Videos. People. You.
                </div>
            </div>

            <div class="account-area">
                <a href="#">Sign In</a>
                |
                <a href="#">Create Account</a>
            </div>
        </header>

        <nav class="main-nav">
            <a href="/" data-link>Home</a>
            <a href="/videos" data-link>Videos</a>
            <a href="/channels" data-link>Channels</a>
            <a href="/tags" data-link>Tags</a>
            <a href="/categories" data-link>Categories</a>
            <a href="/community" data-link>Community</a>
            <a href="/subscriptions"data-link>Subscriptions</a>
            <a href="/favorites"data-link>Favorites</a>
            <a href="/upload" data-link>Upload</a>
            <a href="/my-videos"data-link>My Videos</a>
        </nav>

        <div class="search-bar">
            <form id="search-form">
                <label for="search">
                    Search Neptune View:
                </label>

                <input
                    id="search"
                    name="q"
                    type="text"
                    placeholder="Search videos..."
                >

                <button type="submit">
                    Search
                </button>
            </form>
        </div>

        <div class="content-layout">

            <main class="main-content" id="page-content"></main>

            <aside class="sidebar">

                <section class="side-box">
                    <div class="box-title">
                        Browse
                    </div>

                    <div class="side-links">
                        <a href="/videos" data-link>
                            Latest Videos
                        </a>

                        <a href="/videos?sort=popular" data-link>
                            Most Viewed
                        </a>

                        <a href="/videos?sort=liked" data-link>
                            Most Liked
                        </a>

                        <a href="/videos?sort=commented" data-link>
                            Most Commented
                        </a>

                        <a href="/random" data-link>
                            Random Video
                        </a>
                    </div>
                </section>

                <section class="side-box">
                    <div class="box-title">
                        Categories
                    </div>

                    <div class="side-links">
                        <a href="/categories/gaming" data-link>
                            Gaming
                        </a>

                        <a href="/categories/music" data-link>
                            Music
                        </a>

                        <a href="/categories/comedy" data-link>
                            Comedy
                        </a>

                        <a href="/categories/technology" data-link>
                            Technology
                        </a>

                        <a href="/categories/education" data-link>
                            Education
                        </a>

                        <a href="/categories/vlogs" data-link>
                            Vlogs
                        </a>

                        <a href="/categories/other" data-link>
                            Other
                        </a>
                    </div>
                </section>

                <section class="side-box">
                    <div class="box-title">
                        Neptune View
                    </div>

                    <div class="side-text">
                        <p>
                            Discover videos without an algorithm
                            deciding what you should watch.
                        </p>

                        <a href="/">
                            Learn More →
                        </a>
                    </div>
                </section>

            </aside>

        </div>

        <footer class="site-footer">
            <div>
                <a href="#">About</a>
                |
                <a href="#">Help</a>
                |
                <a href="#">Terms</a>
                |
                <a href="#">Privacy</a>
                |
                <a href="#">Community Guidelines</a>
            </div>

            <p>
                © 2026 Neptune Corporation™.
                Neptune View™.
            </p>

            <p class="footer-note">
                No algorithm. Just the Internet.
            </p>
        </footer>

    </div>
`;

function renderPage(): void {
    const pageContent =
        document.querySelector<HTMLDivElement>("#page-content");

    if (!pageContent) {
        throw new Error("Page content container not found.");
    }

    router();

    const appContent =
        document.querySelector<HTMLDivElement>("#app");

    if (!appContent) {
        throw new Error("Application root not found.");
    }
}

function navigate(url: string): void {
    window.history.pushState({}, "", url);
    renderPage();
}

document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const link = target.closest<HTMLAnchorElement>("a[data-link]");

    if (!link) {
        return;
    }

    const href = link.getAttribute("href");

    if (!href || href.startsWith("#")) {
        return;
    }

    event.preventDefault();
    navigate(href);
});

window.addEventListener("popstate", () => {
    renderPage();
});

const searchForm =
    document.querySelector<HTMLFormElement>("#search-form");

searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(searchForm);
    const query = String(formData.get("q") ?? "").trim();

    if (!query) {
        navigate("/search");
        return;
    }

    navigate(`/search?q=${encodeURIComponent(query)}`);
});

function setupHeaderSearch(): void {
    const form =
        document.querySelector<HTMLFormElement>(
            "#header-search-form"
        );

    const input =
        document.querySelector<HTMLInputElement>(
            "#header-search-input"
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

            if (!query) {
                return;
            }

            window.history.pushState(
                {},
                "",
                `/search?q=${encodeURIComponent(
                    query
                )}`
            );

            window.dispatchEvent(
                new Event("neptune-navigation")
            );
        }
    );
}

renderPage();

setupHeaderSearch();