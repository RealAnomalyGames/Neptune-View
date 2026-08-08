(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();function h(){return`
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
    `}function u(){return`
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
    `}function p(){return`
        <section class="welcome-box">
            <div class="box-title">
                Channels
            </div>

            <div class="box-content">
                <h1>Browse Channels</h1>

                <p>
                    Discover creators and their videos.
                </p>

                <p>
                    No recommendations. Browse the channels
                    you actually want to see.
                </p>
            </div>
        </section>
    `}function v(){return`
        <section class="welcome-box">
            <div class="box-title">
                Categories
            </div>

            <div class="box-content">
                <h1>Browse by Category</h1>

                <p>
                    <a href="#">Gaming</a><br>
                    <a href="#">Music</a><br>
                    <a href="#">Animation</a><br>
                    <a href="#">Comedy</a><br>
                    <a href="#">Technology</a><br>
                    <a href="#">Education</a><br>
                    <a href="#">Vlogs</a><br>
                    <a href="#">Other</a>
                </p>
            </div>
        </section>
    `}function m(){return`
        <section class="welcome-box">
            <div class="box-title">
                Community
            </div>

            <div class="box-content">
                <h1>Neptune View Community</h1>

                <p>
                    Talk about videos, creators, and everything
                    happening around Neptune View™.
                </p>

                <p>
                    Community features are coming soon.
                </p>
            </div>
        </section>
    `}function f(){return`
        <section class="welcome-box">
            <div class="box-title">
                Upload
            </div>

            <div class="box-content">
                <h1>Upload a Video</h1>

                <p>
                    Uploading will be available once the
                    Neptune View account system is implemented.
                </p>
            </div>
        </section>
    `}function g(){const e=new URLSearchParams(window.location.search).get("q");return`
        <section class="welcome-box">
            <div class="box-title">
                Search
            </div>

            <div class="box-content">
                <h1>Search Neptune View™</h1>

                ${e?`<p>Searching for: <strong>${e}</strong></p>`:"<p>Enter a search term above.</p>"}

                <p>
                    Search functionality will be implemented
                    in a later step.
                </p>
            </div>
        </section>
    `}const w={"/":h,"/videos":u,"/channels":p,"/categories":v,"/community":m,"/upload":f,"/search":g};function b(){const a=document.querySelector("#page-content");if(!a)throw new Error("Application root not found.");const e=window.location.pathname,o=w[e]??y;a.innerHTML=o(),x()}function y(){return`
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
    `}function x(){const a=window.location.pathname;document.querySelectorAll(".main-nav a").forEach(e=>{const o=e.getAttribute("href");e.classList.toggle("active",o===a)})}const l=document.querySelector("#app");if(!l)throw new Error("Application root not found.");l.innerHTML=`
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
            <a href="/categories" data-link>Categories</a>
            <a href="/community" data-link>Community</a>
            <a href="/upload" data-link>Upload</a>
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

                        <a href="/categories/animation" data-link>
                            Animation
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
`;function c(){if(!document.querySelector("#page-content"))throw new Error("Page content container not found.");if(b(),!document.querySelector("#app"))throw new Error("Application root not found.")}function r(a){window.history.pushState({},"",a),c()}document.addEventListener("click",a=>{const o=a.target.closest("a[data-link]");if(!o)return;const n=o.getAttribute("href");!n||n.startsWith("#")||(a.preventDefault(),r(n))});window.addEventListener("popstate",()=>{c()});const d=document.querySelector("#search-form");d?.addEventListener("submit",a=>{a.preventDefault();const e=new FormData(d),o=String(e.get("q")??"").trim();if(!o){r("/search");return}r(`/search?q=${encodeURIComponent(o)}`)});c();
