(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const o=document.querySelector("#app");if(!o)throw new Error("Application root not found.");o.innerHTML=`
    <div class="site">

        <header class="site-header">
            <div class="logo-area">
                <div class="logo">Neptune View<span>™</span></div>
                <div class="tagline">Videos. People. You.</div>
            </div>

            <div class="account-area">
                <a href="#">Sign In</a>
                |
                <a href="#">Create Account</a>
            </div>
        </header>

        <nav class="main-nav">
            <a href="#" class="active">Home</a>
            <a href="#">Videos</a>
            <a href="#">Channels</a>
            <a href="#">Categories</a>
            <a href="#">Community</a>
            <a href="#">Upload</a>
        </nav>

        <div class="search-bar">
            <form>
                <label for="search">Search Neptune View:</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search videos..."
                >
                <button type="submit">Search</button>
            </form>
        </div>

        <div class="content-layout">

            <main class="main-content">

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
                            <button>Browse Videos</button>
                            <button>Explore Channels</button>
                        </div>
                    </div>
                </section>

                <section class="video-section">

                    <div class="section-header">
                        Latest Videos
                        <a href="#">View All →</a>
                    </div>

                    <div class="video-grid">

                        <article class="video-card">
                            <div class="thumbnail">
                                <span>No Thumbnail</span>
                            </div>

                            <a href="#" class="video-title">
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

                            <a href="#" class="video-title">
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

                            <a href="#" class="video-title">
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

            </main>

            <aside class="sidebar">

                <section class="side-box">
                    <div class="box-title">
                        Browse
                    </div>

                    <div class="side-links">
                        <a href="#">Latest Videos</a>
                        <a href="#">Most Viewed</a>
                        <a href="#">Most Liked</a>
                        <a href="#">Most Commented</a>
                        <a href="#">Random Video</a>
                    </div>
                </section>

                <section class="side-box">
                    <div class="box-title">
                        Categories
                    </div>

                    <div class="side-links">
                        <a href="#">Gaming</a>
                        <a href="#">Music</a>
                        <a href="#">Animation</a>
                        <a href="#">Comedy</a>
                        <a href="#">Technology</a>
                        <a href="#">Education</a>
                        <a href="#">Vlogs</a>
                        <a href="#">Other</a>
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

                        <a href="#">Learn More →</a>
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
                © 2026 Neptune Corporation™. Neptune View™.
            </p>

            <p class="footer-note">
                No algorithm. Just the Internet.
            </p>
        </footer>

    </div>
`;
