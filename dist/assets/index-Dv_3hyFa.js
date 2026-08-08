(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const o=[{id:"welcome-to-neptune-view",title:"Welcome to Neptune View",description:"Welcome to Neptune View™, a video-sharing website where you decide what you watch.",channelId:"neptune-corporation",channelName:"Neptune Corporation™",videoUrl:"/videos/welcome.mp4",thumbnailUrl:"/images/thumbnails/welcome.jpg",duration:92,category:"technology",tags:["neptune","neptune view","announcement","technology"],language:"en",resolution:{width:1280,height:720},statistics:{views:142,likes:23,comments:7},uploadedAt:"2026-08-07T00:00:00Z",updatedAt:"2026-08-07T00:00:00Z",visibility:"public",rating:"all-ages",license:"neptune-standard"},{id:"my-first-video",title:"My First Video",description:"An example video uploaded to Neptune View™.",channelId:"example-channel",channelName:"Example Channel",videoUrl:"/videos/example.mp4",thumbnailUrl:"/images/thumbnails/example.jpg",duration:157,category:"other",tags:["first video","example"],language:"en",resolution:{width:1920,height:1080},statistics:{views:83,likes:31,comments:12},uploadedAt:"2026-08-07T00:05:00Z",updatedAt:"2026-08-07T00:05:00Z",visibility:"public",rating:"all-ages",license:"neptune-standard"},{id:"something-interesting",title:"Something Interesting",description:"Just a random example video for Neptune View™.",channelId:"example-channel",channelName:"Example Channel",videoUrl:"/videos/interesting.mp4",thumbnailUrl:"/images/thumbnails/interesting.jpg",duration:245,category:"other",tags:["random","interesting"],language:"en",resolution:{width:1280,height:720},statistics:{views:219,likes:18,comments:4},uploadedAt:"2026-08-07T00:10:00Z",updatedAt:"2026-08-07T00:10:00Z",visibility:"public",rating:"all-ages",license:"neptune-standard"}];function r(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),s=(t%60).toString().padStart(2,"0");return e>0?`${e}:${n.toString().padStart(2,"0")}:${s}`:`${n}:${s}`}function d(t){return`${t.toLocaleString()} views`}function V(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function p(t){return[...t].sort((e,n)=>new Date(n.uploadedAt).getTime()-new Date(e.uploadedAt).getTime())}function L(t){return[...t].sort((e,n)=>n.statistics.views-e.statistics.views)}function I(t){return[...t].sort((e,n)=>n.statistics.likes-e.statistics.likes)}function T(t){return[...t].sort((e,n)=>n.statistics.comments-e.statistics.comments)}function U(t,e){return t.find(n=>n.id===e)}function A(t,e){return t.filter(n=>n.category===e)}function E(t){const e=new Set;for(const n of t)for(const i of n.tags)e.add(i);return Array.from(e).sort((n,i)=>n.localeCompare(i))}function M(){return`
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
                ${p(o).slice(0,3).map(n=>`
                <article class="video-card">

                    <div class="thumbnail">
                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${r(n.duration)}
                        </span>
                    </div>

                    <a
                        href="/watch/${n.id}"
                        class="video-title"
                    >
                        ${n.title}
                    </a>

                    <div class="video-meta">
                        <a
                            href="/channels/${n.channelId}"
                            data-link
                            class="video-channel"
                        >
                            ${n.channelName}
                        </a>
                    </div>

                    <div class="video-stats">
                        ${d(n.statistics.views)}
                    </div>

                </article>
            `).join("")}
            </div>

        </section>
    `}function D(t){switch(t){case"popular":return L(o);case"liked":return I(o);case"commented":return T(o);default:return p(o)}}function R(t){switch(t){case"popular":return"Most Viewed";case"liked":return"Most Liked";case"commented":return"Most Commented";default:return"Latest Videos"}}function q(){const e=new URLSearchParams(window.location.search).get("sort"),n=D(e),i=R(e),s=n.map(a=>`
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

                    <div class="video-meta">
                        ${a.category}
                    </div>

                    <div class="video-stats">
                        ${d(a.statistics.views)}
                        · ${a.statistics.likes} likes
                        · ${a.statistics.comments} comments
                    </div>

                </article>
            `).join("");return`
        <section class="welcome-box">

            <div class="box-title">
                Browse Videos
            </div>

            <div class="box-content">

                <h1>${i}</h1>

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

                ${i}

                <span>
                    ${n.length} videos
                </span>

            </div>

            ${n.length>0?`
                        <div class="video-grid">
                            ${s}
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
    `}const w="neptune-view-subscriptions";function v(){const t=localStorage.getItem(w);if(!t)return[];try{return JSON.parse(t)}catch{return[]}}function $(t){localStorage.setItem(w,JSON.stringify(t))}function B(){return v()}function y(t,e){return v().some(n=>n.userId===t&&n.channelId===e)}function P(t,e){const n=v();n.some(s=>s.userId===t&&s.channelId===e)||(n.push({userId:t,channelId:e,subscribedAt:new Date().toISOString()}),$(n))}function j(t,e){const i=v().filter(s=>!(s.userId===t&&s.channelId===e));$(i)}function O(t){return v().filter(e=>e.userId===t).map(e=>e.channelId)}const m=[{id:"neptune-corporation",userId:"neptune-corporation",name:"Neptune Corporation™",description:"Official videos, announcements, development updates, and other content from Neptune Corporation™.",avatarUrl:"/images/avatars/neptune.png",bannerUrl:"/images/banners/neptune.png",createdAt:"2026-08-01T00:00:00Z",subscribers:0},{id:"example-channel",userId:"example-user",name:"Example Channel",description:"An example Neptune View™ channel.",avatarUrl:"/images/avatars/example.png",bannerUrl:"/images/banners/example.png",createdAt:"2026-08-05T00:00:00Z",subscribers:0}];function x(t){return m.find(e=>e.id===t)}function F(t){const e=x(t);if(!e)return 0;const n=B().filter(i=>i.channelId===t);return e.subscribers+n.length}function W(){return`
        <section class="welcome-box">

            <div class="box-title">
                Channels
            </div>

            <div class="box-content">

                <h1>Browse Channels</h1>

                <p>
                    Find creators and channels
                    on Neptune View™.
                </p>

            </div>

        </section>

        <section class="channel-directory">

            ${m.map(e=>`
                <a
                    href="/channels/${e.id}"
                    data-link
                    class="channel-card"
                >

                    <img
                        class="channel-card-avatar"
                        src="${e.avatarUrl}"
                        alt="${e.name}"
                    >

                    <div class="channel-card-info">

                        <div class="channel-card-name">
                            ${e.name}
                        </div>

                        <div class="channel-card-subs">
                            ${e.subscribers}
                            subscribers
                        </div>

                    </div>

                </a>
            `).join("")}

        </section>
    `}const C=[{id:"music",name:"Music",description:"Music videos, performances, remixes, and audio."},{id:"gaming",name:"Gaming",description:"Gameplay, game development, reviews, and gaming content."},{id:"technology",name:"Technology",description:"Computers, software, programming, hardware, and technology."},{id:"entertainment",name:"Entertainment",description:"Shows, comedy, animation, and other entertainment."},{id:"education",name:"Education",description:"Tutorials, lessons, explanations, and educational content."},{id:"news",name:"News",description:"News reports, announcements, and current events."},{id:"sports",name:"Sports",description:"Sports videos, highlights, and commentary."},{id:"people",name:"People & Blogs",description:"Personal videos, vlogs, and everyday life."},{id:"other",name:"Other",description:"Videos that don't fit another category."}];function H(t){return C.find(e=>e.id===t)}function Z(){return`
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
            ${C.map(e=>`
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
    `}function J(){return`
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
    `}function Y(){return`
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
    `}function G(){const e=new URLSearchParams(window.location.search).get("q");return`
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
    `}function _(t){return o.filter(e=>e.id!==t.id&&e.channelId===t.channelId).slice(0,3)}function z(t){const e=U(o,t);if(!e)return`
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
        `;const n=_(e),i=n.map(s=>`
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

                    <div class="video-stats">
                        ${d(s.statistics.views)}
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
                    ${d(e.statistics.views)}
                    ·
                    ${e.statistics.likes} likes
                    ·
                    ${e.statistics.comments} comments
                    ·
                    Uploaded ${V(e.uploadedAt)}
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
                        href="/channels/${e.channelId}"
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

                        ${e.tags.map(s=>`
                                    <a
                                        href="/search?tag=${encodeURIComponent(s)}"
                                        data-link
                                    >
                                        ${s}
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

            ${n.length>0?`
                        <section class="video-section">

                            <div class="section-header">
                                More from
                                ${e.channelName}
                            </div>

                            <div class="video-grid">
                                ${i}
                            </div>

                        </section>
                    `:""}

        </section>
    `}function K(t){const e=H(t);if(!e)return`
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
        `;const n=p(A(o,t)),i=n.map(s=>`
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
                        data-link
                        class="video-title"
                    >
                        ${s.title}
                    </a>

                    <div class="video-meta">
                        ${s.channelName}
                    </div>

                    <div class="video-stats">
                        ${d(s.statistics.views)}
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
                    ${n.length}
                    videos in this category.
                </p>

            </div>

        </section>

        <section class="video-section">

            <div class="section-header">
                Latest in ${e.name}
            </div>

            ${n.length>0?`
                        <div class="video-grid">
                            ${i}
                        </div>
                    `:`
                        <div class="empty-state">
                            No videos have been
                            uploaded to this category yet.
                        </div>
                    `}

        </section>
    `}function Q(){return`
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
            ${E(o).map(n=>`
                <a
                    href="/search?tag=${encodeURIComponent(n)}"
                    data-link
                    class="tag-link"
                >
                    ${n}
                </a>
            `).join("")}
        </section>
    `}const h="example-user";function X(t){return new Date(t).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}function ee(t){const e=x(t);if(e===void 0)return`
            <section class="welcome-box">

                <div class="box-title">
                    Channel Not Found
                </div>

                <div class="box-content">

                    <h1>404</h1>

                    <p>
                        This channel does not exist.
                    </p>

                    <p>
                        <a
                            href="/channels"
                            data-link
                        >
                            Browse Channels
                        </a>
                    </p>

                </div>

            </section>
        `;const n=y(h,e.id),i=F(e.id),s=o.filter(c=>c.channelId===e.id),a=s.reduce((c,N)=>c+N.statistics.views,0),l=s.map(c=>`
                <article class="channel-video-card">

                    <a
                        href="/watch/${c.id}"
                        data-link
                        class="channel-video-thumbnail"
                    >

                        <div class="thumbnail">

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${r(c.duration)}
                            </span>

                        </div>

                    </a>

                    <a
                        href="/watch/${c.id}"
                        data-link
                        class="video-title"
                    >
                        ${c.title}
                    </a>

                    <div class="video-stats">
                        ${d(c.statistics.views)}
                    </div>

                </article>
            `).join("");return`
        <section class="channel-page">

            <div class="channel-banner">

                <img
                    src="${e.bannerUrl}"
                    alt=""
                >

            </div>

            <div class="channel-header">

                <img
                    class="profile-avatar"
                    src="${e.avatarUrl}"
                    alt="${e.name}"
                >

                <div class="profile-information">

                    <h1>
                        ${e.name}
                    </h1>

                    <div class="subscriber-count">
                        ${i.toLocaleString()}
                        subscribers
                    </div>

                </div>

                <div class="channel-actions">

                    <button
                        type="button"
                        class="subscribe-button"
                        data-subscribe="${e.id}"
                    >
                        ${n?"Subscribed":"Subscribe"}
                    </button>

                </div>

            </div>

            <nav class="channel-navigation">

                <a
                    href="/channels/${e.id}"
                    data-link
                    class="active"
                >
                    Videos
                </a>

                <a
                    href="/channels/${e.id}/about"
                    data-link
                >
                    About
                </a>

            </nav>

        </section>

        <section class="channel-content">

            <div class="channel-main">

                <section class="video-section">

                    <div class="section-header">
                        Videos
                    </div>

                    ${s.length>0?`
                                <div class="video-grid">
                                    ${l}
                                </div>
                            `:`
                                <div class="empty-state">

                                    <strong>
                                        No videos yet.
                                    </strong>

                                    <p>
                                        This channel hasn't
                                        uploaded any videos.
                                    </p>

                                </div>
                            `}

                </section>

            </div>

            <aside class="channel-sidebar">

                <section class="channel-info-box">

                    <div class="box-title">
                        Channel Information
                    </div>

                    <div class="box-content">

                        <div class="channel-stat">
                            <strong>
                                Videos:
                            </strong>

                            ${s.length}
                        </div>

                        <div class="channel-stat">
                            <strong>
                                Views:
                            </strong>

                            ${a.toLocaleString()}
                        </div>

                        <div class="channel-stat">
                            <strong>
                                Subscribers:
                            </strong>

                            ${e.subscribers.toLocaleString()}
                        </div>

                        <div class="channel-stat">
                            <strong>
                                Joined:
                            </strong>

                            ${X(e.createdAt)}
                        </div>

                    </div>

                </section>

                <section class="channel-info-box">

                    <div class="box-title">
                        About
                    </div>

                    <div class="box-content">

                        <p>
                            ${e.description}
                        </p>

                    </div>

                </section>

            </aside>

        </section>
    `}function te(){const t=document.querySelector("[data-subscribe]");t&&t.addEventListener("click",()=>{const e=t.dataset.subscribe;if(!e)return;y(h,e)?j(h,e):P(h,e),window.dispatchEvent(new Event("neptune-subscription-changed"))})}function ne(t){return new Date(t).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}function se(t){const e=m.find(n=>n.id===t);return e?`
        <section class="channel-page">

            <div class="channel-banner">

                <img
                    src="${e.bannerUrl}"
                    alt=""
                >

            </div>

            <div class="channel-header">

                <img
                    class="profile-avatar"
                    src="${e.avatarUrl}"
                    alt="${e.name}"
                >

                <div class="profile-information">

                    <h1>
                        ${e.name}
                    </h1>

                    <div class="subscriber-count">
                        ${e.subscribers.toLocaleString()}
                        subscribers
                    </div>

                </div>

            </div>

            <nav class="channel-navigation">

                <a
                    href="/channels/${e.id}"
                    data-link
                >
                    Videos
                </a>

                <a
                    href="/channels/${e.id}/about"
                    data-link
                    class="active"
                >
                    About
                </a>

            </nav>

        </section>

        <section class="channel-about">

            <div class="box-title">
                About ${e.name}
            </div>

            <div class="box-content">

                <p>
                    ${e.description}
                </p>

                <div class="metadata-list">

                    <div class="metadata-row">

                        <div class="metadata-label">
                            Channel
                        </div>

                        <div class="metadata-value">
                            ${e.name}
                        </div>

                    </div>

                    <div class="metadata-row">

                        <div class="metadata-label">
                            Subscribers
                        </div>

                        <div class="metadata-value">
                            ${e.subscribers.toLocaleString()}
                        </div>

                    </div>

                    <div class="metadata-row">

                        <div class="metadata-label">
                            Joined
                        </div>

                        <div class="metadata-value">
                            ${ne(e.createdAt)}
                        </div>

                    </div>

                </div>

            </div>

        </section>
    `:`
            <section class="welcome-box">

                <div class="box-title">
                    Channel Not Found
                </div>

                <div class="box-content">

                    <h1>404</h1>

                    <p>
                        This channel does not exist.
                    </p>

                </div>

            </section>
        `}function ae(){const t=O(h),e=m.filter(a=>t.includes(a.id)),n=p(o.filter(a=>t.includes(a.channelId))),i=n.map(a=>`
                    <article class="video-card">

                        <a
                            href="/watch/${a.id}"
                            data-link
                            class="thumbnail"
                        >

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${r(a.duration)}
                            </span>

                        </a>

                        <a
                            href="/watch/${a.id}"
                            data-link
                            class="video-title"
                        >
                            ${a.title}
                        </a>

                        <a
                            href="/channels/${a.channelId}"
                            data-link
                            class="video-channel"
                        >
                            ${a.channelName}
                        </a>

                        <div class="video-stats">
                            ${d(a.statistics.views)}
                        </div>

                    </article>
                `).join(""),s=e.map(a=>`
                    <a
                        href="/channels/${a.id}"
                        data-link
                        class="subscription-channel"
                    >
                        ${a.name}
                    </a>
                `).join("");return`
        <section class="welcome-box">

            <div class="box-title">
                Subscriptions
            </div>

            <div class="box-content">

                <h1>
                    Your Subscriptions
                </h1>

                <p>
                    Videos from channels you
                    have chosen to subscribe to.
                </p>

            </div>

        </section>

        <section class="subscription-list">

            <div class="section-header">
                Subscribed Channels
            </div>

            ${e.length>0?s:`
                        <div class="empty-state">
                            You aren't subscribed
                            to any channels yet.
                        </div>
                    `}

        </section>

        <section class="video-section">

            <div class="section-header">
                Latest Videos
            </div>

            ${n.length>0?`
                        <div class="video-grid">
                            ${i}
                        </div>
                    `:`
                        <div class="empty-state">

                            ${e.length>0?`
                                        Your subscribed
                                        channels haven't
                                        uploaded any videos.
                                    `:`
                                        Subscribe to a
                                        channel to see its
                                        videos here.
                                    `}

                        </div>
                    `}

        </section>
    `}const ie={"/":M,"/videos":q,"/channels":W,"/categories":Z,"/tags":Q,"/subscriptions":ae,"/community":J,"/upload":Y,"/search":G};function S(){const t=document.querySelector("#page-content");if(!t)throw new Error("Page content container not found.");const e=window.location.pathname;if(e.startsWith("/watch/")){const i=decodeURIComponent(e.substring(7));t.innerHTML=z(i),u();return}if(e.startsWith("/categories/")){const i=decodeURIComponent(e.substring(12));t.innerHTML=K(i),u();return}if(e.startsWith("/channels/")&&e.endsWith("/about")){const i=decodeURIComponent(e.substring(10).replace(/\/about$/,""));t.innerHTML=se(i),u();return}if(e.startsWith("/channels/")){const i=decodeURIComponent(e.substring(10));t.innerHTML=ee(i),te(),u();return}const n=ie[e]??oe;t.innerHTML=n(),u()}function oe(){return`
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
    `}function u(){const t=window.location.pathname;document.querySelectorAll(".main-nav a").forEach(e=>{const n=e.getAttribute("href");e.classList.toggle("active",n===t)})}window.addEventListener("neptune-subscription-changed",()=>{S()});const k=document.querySelector("#app");if(!k)throw new Error("Application root not found.");k.innerHTML=`
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
`;function b(){if(!document.querySelector("#page-content"))throw new Error("Page content container not found.");if(S(),!document.querySelector("#app"))throw new Error("Application root not found.")}function g(t){window.history.pushState({},"",t),b()}document.addEventListener("click",t=>{const n=t.target.closest("a[data-link]");if(!n)return;const i=n.getAttribute("href");!i||i.startsWith("#")||(t.preventDefault(),g(i))});window.addEventListener("popstate",()=>{b()});const f=document.querySelector("#search-form");f?.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(f),n=String(e.get("q")??"").trim();if(!n){g("/search");return}g(`/search?q=${encodeURIComponent(n)}`)});b();
