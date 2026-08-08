(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const n=[{id:"welcome-to-neptune-view",title:"Welcome to Neptune View",description:"Welcome to Neptune View™, a video-sharing website where you decide what you watch.",channelId:"neptune-corporation",channelName:"Neptune Corporation™",videoUrl:"/videos/welcome.mp4",thumbnailUrl:"/images/thumbnails/welcome.jpg",duration:92,category:"technology",tags:["neptune","neptune view","announcement","technology"],language:"en",resolution:{width:1280,height:720},statistics:{views:142,likes:23,comments:7},uploadedAt:"2026-08-07T00:00:00Z",updatedAt:"2026-08-07T00:00:00Z",visibility:"public",rating:"all-ages",license:"neptune-standard"},{id:"my-first-video",title:"My First Video",description:"An example video uploaded to Neptune View™.",channelId:"example-channel",channelName:"Example Channel",videoUrl:"/videos/example.mp4",thumbnailUrl:"/images/thumbnails/example.jpg",duration:157,category:"other",tags:["first video","example"],language:"en",resolution:{width:1920,height:1080},statistics:{views:83,likes:31,comments:12},uploadedAt:"2026-08-07T00:05:00Z",updatedAt:"2026-08-07T00:05:00Z",visibility:"public",rating:"all-ages",license:"neptune-standard"},{id:"something-interesting",title:"Something Interesting",description:"Just a random example video for Neptune View™.",channelId:"example-channel",channelName:"Example Channel",videoUrl:"/videos/interesting.mp4",thumbnailUrl:"/images/thumbnails/interesting.jpg",duration:245,category:"other",tags:["random","interesting"],language:"en",resolution:{width:1280,height:720},statistics:{views:219,likes:18,comments:4},uploadedAt:"2026-08-07T00:10:00Z",updatedAt:"2026-08-07T00:10:00Z",visibility:"public",rating:"all-ages",license:"neptune-standard"}];function r(t){const e=Math.floor(t/3600),i=Math.floor(t%3600/60),a=(t%60).toString().padStart(2,"0");return e>0?`${e}:${i.toString().padStart(2,"0")}:${a}`:`${i}:${a}`}function c(t){return`${t.toLocaleString()} views`}function f(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function p(t){return[...t].sort((e,i)=>new Date(i.uploadedAt).getTime()-new Date(e.uploadedAt).getTime())}function w(t){return[...t].sort((e,i)=>i.statistics.views-e.statistics.views)}function b(t){return[...t].sort((e,i)=>i.statistics.likes-e.statistics.likes)}function y(t){return[...t].sort((e,i)=>i.statistics.comments-e.statistics.comments)}function $(t,e){return t.find(i=>i.id===e)}function x(t,e){return t.filter(i=>i.category===e)}function k(t){const e=new Set;for(const i of t)for(const o of i.tags)e.add(o);return Array.from(e).sort((i,o)=>i.localeCompare(o))}function C(){return`
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
                        <button>
                            Browse Videos
                        </button>
                    </a>

                    <a href="/channels" data-link>
                        <button>
                            Explore Channels
                        </button>
                    </a>

                </div>

            </div>

        </section>

        <section class="video-section">

            <div class="section-header">

                Latest Videos

                <a
                    href="/videos"
                    data-link
                >
                    View All →
                </a>

            </div>

            <div class="video-grid">
                ${p(n).slice(0,3).map(i=>`
                <article class="video-card">

                    <div class="thumbnail">
                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${r(i.duration)}
                        </span>
                    </div>

                    <a
                        href="/watch/${i.id}"
                        class="video-title"
                    >
                        ${i.title}
                    </a>

                    <div class="video-meta">
                        ${i.channelName}
                    </div>

                    <div class="video-stats">
                        ${c(i.statistics.views)}
                    </div>

                </article>
            `).join("")}
            </div>

        </section>
    `}function N(t){switch(t){case"popular":return w(n);case"liked":return b(n);case"commented":return y(n);default:return p(n)}}function V(t){switch(t){case"popular":return"Most Viewed";case"liked":return"Most Liked";case"commented":return"Most Commented";default:return"Latest Videos"}}function S(){const e=new URLSearchParams(window.location.search).get("sort"),i=N(e),o=V(e),a=i.map(s=>`
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${r(s.duration)}
                        </span>

                    </div>

                    <a
                        href="/watch/${s.id}"
                        class="video-title"
                        data-link
                    >
                        ${s.title}
                    </a>

                    <div class="video-meta">
                        ${s.channelName}
                    </div>

                    <div class="video-meta">
                        ${s.category}
                    </div>

                    <div class="video-stats">
                        ${c(s.statistics.views)}
                        · ${s.statistics.likes} likes
                        · ${s.statistics.comments} comments
                    </div>

                </article>
            `).join("");return`
        <section class="welcome-box">

            <div class="box-title">
                Browse Videos
            </div>

            <div class="box-content">

                <h1>${o}</h1>

                <p>
                    Browse Neptune View™ videos in the order
                    you choose. There are no personalized
                    recommendations here.
                </p>

                <div class="video-sort-links">

                    <strong>Sort by:</strong>

                    <a
                        href="/videos?sort=latest"
                        data-link
                    >
                        Latest
                    </a>

                    |

                    <a
                        href="/videos?sort=popular"
                        data-link
                    >
                        Most Viewed
                    </a>

                    |

                    <a
                        href="/videos?sort=liked"
                        data-link
                    >
                        Most Liked
                    </a>

                    |

                    <a
                        href="/videos?sort=commented"
                        data-link
                    >
                        Most Commented
                    </a>

                </div>

            </div>

        </section>

        <section class="video-section">

            <div class="section-header">

                ${o}

                <span>
                    ${i.length} videos
                </span>

            </div>

            ${i.length>0?`
                        <div class="video-grid">
                            ${a}
                        </div>
                    `:`
                        <div class="empty-state">
                            <strong>
                                No videos found.
                            </strong>

                            <p>
                                There aren't any videos in
                                this section yet.
                            </p>
                        </div>
                    `}

        </section>
    `}function L(){return`
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
    `}const m=[{id:"music",name:"Music",description:"Music videos, performances, remixes, and audio."},{id:"gaming",name:"Gaming",description:"Gameplay, game development, reviews, and gaming content."},{id:"technology",name:"Technology",description:"Computers, software, programming, hardware, and technology."},{id:"entertainment",name:"Entertainment",description:"Shows, comedy, animation, and other entertainment."},{id:"education",name:"Education",description:"Tutorials, lessons, explanations, and educational content."},{id:"news",name:"News",description:"News reports, announcements, and current events."},{id:"sports",name:"Sports",description:"Sports videos, highlights, and commentary."},{id:"people",name:"People & Blogs",description:"Personal videos, vlogs, and everyday life."},{id:"other",name:"Other",description:"Videos that don't fit another category."}];function T(t){return m.find(e=>e.id===t)}function A(){return`
        <section class="welcome-box">

            <div class="box-title">
                Categories
            </div>

            <div class="box-content">

                <h1>Browse Categories</h1>

                <p>
                    Explore videos by subject.
                    Choose a category to see its videos.
                </p>

            </div>

        </section>

        <section class="category-grid">
            ${m.map(e=>`
                <a
                    href="/categories/${e.id}"
                    data-link
                    class="category-card"
                >

                    <div class="category-name">
                        ${e.name}
                    </div>

                    <div class="category-description">
                        ${e.description}
                    </div>

                </a>
            `).join("")}
        </section>
    `}function M(){return`
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
    `}function U(){return`
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
    `}function I(){const e=new URLSearchParams(window.location.search).get("q");return`
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
    `}function E(t){return n.filter(e=>e.id!==t.id&&e.channelId===t.channelId).slice(0,3)}function P(t){const e=$(n,t);if(!e)return`
            <section class="welcome-box">

                <div class="box-title">
                    Video Not Found
                </div>

                <div class="box-content">
                    <h1>404</h1>

                    <p>
                        Sorry, the video you requested
                        could not be found.
                    </p>

                    <p>
                        <a href="/videos" data-link>
                            Browse Videos
                        </a>
                    </p>
                </div>

            </section>
        `;const i=E(e),o=i.map(a=>`
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${r(a.duration)}
                        </span>

                    </div>

                    <a
                        href="/watch/${a.id}"
                        class="video-title"
                        data-link
                    >
                        ${a.title}
                    </a>

                    <div class="video-meta">
                        ${a.channelName}
                    </div>

                    <div class="video-stats">
                        ${c(a.statistics.views)}
                    </div>

                </article>
            `).join("");return`
        <section class="watch-page">

            <div class="video-player">

                <video
                    controls
                    preload="metadata"
                    poster="${e.thumbnailUrl}"
                >
                    <source
                        src="${e.videoUrl}"
                        type="video/mp4"
                    >

                    Your browser does not support
                    HTML5 video.
                </video>

            </div>

            <section class="video-information">

                <h1 class="watch-title">
                    ${e.title}
                </h1>

                <div class="watch-stats">
                    ${c(e.statistics.views)}
                    ·
                    ${e.statistics.likes} likes
                    ·
                    ${e.statistics.comments} comments
                    ·
                    Uploaded ${f(e.uploadedAt)}
                </div>

                <div class="watch-actions">

                    <button type="button">
                        Like
                    </button>

                    <button type="button">
                        Share
                    </button>

                    <button type="button">
                        Add to Favorites
                    </button>

                </div>

            </section>

            <section class="channel-panel">

                <div class="channel-avatar">
                    ${e.channelName.charAt(0)}
                </div>

                <div class="channel-info">

                    <a
                        href="/channel/${e.channelId}"
                        data-link
                        class="channel-name"
                    >
                        ${e.channelName}
                    </a>

                    <div class="channel-label">
                        Channel
                    </div>

                </div>

            </section>

            <section class="description-box">

                <div class="box-title">
                    Description
                </div>

                <div class="box-content">

                    <p>
                        ${e.description}
                    </p>

                    <p>
    <strong>Category:</strong>
    ${e.category}
</p>

                    <p>
                        <strong>Duration:</strong>
                        ${r(e.duration)}
                    </p>

                    <p>
                        <strong>Resolution:</strong>
                        ${e.resolution.width} ×
                        ${e.resolution.height}
                    </p>

                    <p>
                        <strong>Language:</strong>
                        ${e.language.toUpperCase()}
                    </p>

                    <p>
                        <strong>Rating:</strong>
                        ${e.rating}
                    </p>

                    <p>
                        <strong>License:</strong>
                        ${e.license}
                    </p>

                    <div class="video-tags">

                        <strong>Tags:</strong>

                        ${e.tags.map(a=>`
                                    <a
                                        href="/search?tag=${encodeURIComponent(a)}"
                                        data-link
                                    >
                                        ${a}
                                    </a>
                                `).join(" · ")}

                    </div>

                </div>

            </section>

            <section class="comments-box">

                <div class="box-title">
                    Comments
                </div>

                <div class="box-content">

                    <p>
                        Comments will be available in
                        a future version of Neptune View™.
                    </p>

                </div>

            </section>

            ${i.length>0?`
                        <section class="video-section">

                            <div class="section-header">
                                More from
                                ${e.channelName}
                            </div>

                            <div class="video-grid">
                                ${o}
                            </div>

                        </section>
                    `:""}

        </section>
    `}function q(t){const e=T(t);if(!e)return`
            <section class="welcome-box">

                <div class="box-title">
                    Category Not Found
                </div>

                <div class="box-content">

                    <h1>404</h1>

                    <p>
                        This category does not exist.
                    </p>

                    <p>
                        <a
                            href="/categories"
                            data-link
                        >
                            Browse Categories
                        </a>
                    </p>

                </div>

            </section>
        `;const i=p(x(n,t)),o=i.map(a=>`
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${r(a.duration)}
                        </span>

                    </div>

                    <a
                        href="/watch/${a.id}"
                        data-link
                        class="video-title"
                    >
                        ${a.title}
                    </a>

                    <div class="video-meta">
                        ${a.channelName}
                    </div>

                    <div class="video-stats">
                        ${c(a.statistics.views)}
                    </div>

                </article>
            `).join("");return`
        <section class="welcome-box">

            <div class="box-title">
                ${e.name}
            </div>

            <div class="box-content">

                <h1>${e.name}</h1>

                <p>
                    ${e.description}
                </p>

                <p>
                    ${i.length}
                    videos in this category.
                </p>

            </div>

        </section>

        <section class="video-section">

            <div class="section-header">
                Latest in ${e.name}
            </div>

            ${i.length>0?`
                        <div class="video-grid">
                            ${o}
                        </div>
                    `:`
                        <div class="empty-state">
                            No videos have been
                            uploaded to this category yet.
                        </div>
                    `}

        </section>
    `}function B(){return`
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
            ${k(n).map(i=>`
                <a
                    href="/search?tag=${encodeURIComponent(i)}"
                    data-link
                    class="tag-link"
                >
                    ${i}
                </a>
            `).join("")}
        </section>
    `}const D={"/":C,"/videos":S,"/channels":L,"/categories":A,"/tags":B,"/community":M,"/upload":U,"/search":I};function R(){const t=document.querySelector("#page-content");if(!t)throw new Error("Page content container not found.");const e=window.location.pathname;if(e.startsWith("/watch/")){const o=decodeURIComponent(e.substring(7));t.innerHTML=P(o),l();return}if(e.startsWith("/categories/")){const o=decodeURIComponent(e.substring(12));t.innerHTML=q(o),l();return}const i=D[e]??j;t.innerHTML=i(),l()}function j(){return`
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
    `}function l(){const t=window.location.pathname;document.querySelectorAll(".main-nav a").forEach(e=>{const i=e.getAttribute("href");e.classList.toggle("active",i===t)})}const g=document.querySelector("#app");if(!g)throw new Error("Application root not found.");g.innerHTML=`
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
`;function h(){if(!document.querySelector("#page-content"))throw new Error("Page content container not found.");if(R(),!document.querySelector("#app"))throw new Error("Application root not found.")}function u(t){window.history.pushState({},"",t),h()}document.addEventListener("click",t=>{const i=t.target.closest("a[data-link]");if(!i)return;const o=i.getAttribute("href");!o||o.startsWith("#")||(t.preventDefault(),u(o))});window.addEventListener("popstate",()=>{h()});const v=document.querySelector("#search-form");v?.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(v),i=String(e.get("q")??"").trim();if(!i){u("/search");return}u(`/search?q=${encodeURIComponent(i)}`)});h();
