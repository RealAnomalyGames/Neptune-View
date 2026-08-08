import { Home } from "./pages/Home";
import { Videos } from "./pages/Videos";
import { Channels } from "./pages/Channels";
import { Categories } from "./pages/Categories";
import { Community } from "./pages/Community";
import { Upload } from "./pages/Upload";
import { Search } from "./pages/Search";

type Page = () => string;

const routes: Record<string, Page> = {
    "/": Home,
    "/videos": Videos,
    "/channels": Channels,
    "/categories": Categories,
    "/community": Community,
    "/upload": Upload,
    "/search": Search
};

export function router(): void {
    const app = document.querySelector<HTMLDivElement>("#page-content");

    if (!app) {
        throw new Error("Application root not found.");
    }

    const path = window.location.pathname;

    const page = routes[path] ?? NotFound;

    app.innerHTML = page();

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
                    <a href="/" data-link>
                        Return to Neptune View™
                    </a>
                </p>
            </div>
        </section>
    `;
}

function updateActiveNavigation(): void {
    const currentPath = window.location.pathname;

    document
        .querySelectorAll<HTMLAnchorElement>(".main-nav a")
        .forEach((link) => {
            const href = link.getAttribute("href");

            link.classList.toggle(
                "active",
                href === currentPath
            );
        });
}