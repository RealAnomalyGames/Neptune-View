export function Home(): string {
    return `
        <section class="welcome-box">
            <div class="box-title">
                Welcome to Neptune View™
            </div>

            <div class="box-content">
                <h1>Welcome!</h1>

                <p>
                    Neptune View is a video-sharing website
                    where <strong>you decide what you watch.</strong>
                </p>

                <p>
                    No recommendation algorithm.
                    No endless feed.
                    Just videos, creators, and people.
                </p>

                <div class="button-row">
                    <a href="/videos" data-link>
                        <button>Browse Videos</button>
                    </a>

                    <a href="/channels" data-link>
                        <button>Explore Channels</button>
                    </a>
                </div>
            </div>
        </section>

        <section class="video-section">
            <div class="section-header">
                Latest Videos
                <a href="/videos" data-link>View All →</a>
            </div>

            <div class="video-grid">

                <article class="video-card">
                    <div class="thumbnail">
                        <span>No Thumbnail</span>
                    </div>

                    <a href="/watch/example" class="video-title">
                        Welcome to Neptune View
                    </a>

                    <div class="video-meta">
                        Neptune Corporation™
                    </div>

                    <div class="video-stats">
                        0 views · Just now
                    </div>
                </article>

                <article class="video-card">
                    <div class="thumbnail">
                        <span>No Thumbnail</span>
                    </div>

                    <a href="/watch/example-2" class="video-title">
                        My First Video
                    </a>

                    <div class="video-meta">
                        Example Channel
                    </div>

                    <div class="video-stats">
                        0 views · Just now
                    </div>
                </article>

                <article class="video-card">
                    <div class="thumbnail">
                        <span>No Thumbnail</span>
                    </div>

                    <a href="/watch/example-3" class="video-title">
                        Something Interesting
                    </a>

                    <div class="video-meta">
                        Example Channel
                    </div>

                    <div class="video-stats">
                        0 views · Just now
                    </div>
                </article>

            </div>
        </section>
    `;
}