import "./styles/main.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
    throw new Error("Application root not found.");
}

app.innerHTML = `
    <header>
        <h1>Neptune View™</h1>
        <p>Videos. People. You.</p>
    </header>

    <main>
        <section>
            <h2>Welcome to Neptune View™</h2>

            <p>
                A video-sharing website without an algorithm.
            </p>

            <p>
                Browse videos, discover creators, and decide
                what you want to watch.
            </p>
        </section>

        <section>
            <h2>Latest Videos</h2>

            <p>No videos have been uploaded yet.</p>
        </section>
    </main>

    <footer>
        <p>
            Neptune View™ is a Neptune Corporation™ project.
        </p>
    </footer>
`;