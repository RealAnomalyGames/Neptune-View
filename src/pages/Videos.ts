export function Videos(): string {
    return `
        <section class="welcome-box">
            <div class="box-title">
                Videos
            </div>

            <div class="box-content">
                <h1>Browse Videos</h1>

                <p>
                    Browse videos on Neptune View™ without
                    an algorithm deciding what you should see.
                </p>

                <p>
                    <a href="/videos?sort=latest" data-link>
                        Latest
                    </a>
                    |
                    <a href="/videos?sort=popular" data-link>
                        Most Viewed
                    </a>
                    |
                    <a href="/videos?sort=liked" data-link>
                        Most Liked
                    </a>
                    |
                    <a href="/videos?sort=commented" data-link>
                        Most Commented
                    </a>
                </p>
            </div>
        </section>
    `;
}