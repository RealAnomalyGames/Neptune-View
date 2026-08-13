(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function C(t){return`/Neptune-View/${t.replace(/^\/+/,"")}`}const c=[{id:"my-first-video",title:"My First Video",description:"An example video uploaded to Neptune View™.",channelId:"example-channel",channelName:"Example Channel",videoUrl:C("media/videos/example.mp4"),thumbnailUrl:C("media/thumbnails/example.jpg"),duration:157,category:"other",tags:["first video","example"],language:"en",resolution:{width:1920,height:1080},statistics:{views:0,likes:0,comments:0},uploadedAt:"2026-08-07T00:05:00Z",updatedAt:"2026-08-07T00:05:00Z",visibility:"public",rating:"all-ages",license:"neptune-standard"}];function u(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),s=(t%60).toString().padStart(2,"0");return e>0?`${e}:${n.toString().padStart(2,"0")}:${s}`:`${n}:${s}`}function v(t){return`${t.toLocaleString()} views`}function O(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function g(t){return[...t].sort((e,n)=>new Date(n.uploadedAt).getTime()-new Date(e.uploadedAt).getTime())}function j(t){return[...t].sort((e,n)=>n.statistics.views-e.statistics.views)}function _(t){return[...t].sort((e,n)=>n.statistics.likes-e.statistics.likes)}function W(t){return[...t].sort((e,n)=>n.statistics.comments-e.statistics.comments)}function J(t,e){return t.find(n=>n.id===e)}function Y(t,e){return t.filter(n=>n.category===e)}function G(t){const e=new Set;for(const n of t)for(const a of n.tags)e.add(a);return Array.from(e).sort((n,a)=>n.localeCompare(a))}const K="/Neptune-View";function Z(){return`
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

        <div class="random-video-box">

            <div class="random-video-title">
                Feeling Indecisive?
            </div>

            <div class="random-video-content">

                <p>
                    Don't know what to watch?
                    Let Neptune View pick something
                    completely at random.
                </p>

                <a
                    href="/random"
                    data-link
                    class="random-video-button"
                >
                    🎲 Random Video
                </a>

            </div>

        </div>

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
                ${g(c).slice(0,3).map(n=>`
                <article class="video-card">

                    <div class="thumbnail">
                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${u(n.duration)}
                        </span>
                    </div>

                    <a
                        href="${K}/watch/${n.id}"
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
                        ${v(n.statistics.views)}
                    </div>

                </article>
            `).join("")}
            </div>

        </section>
    `}const z="/Neptune-View";function Q(t){switch(t){case"popular":return j(c);case"liked":return _(c);case"commented":return W(c);default:return g(c)}}function X(t){switch(t){case"popular":return"Most Viewed";case"liked":return"Most Liked";case"commented":return"Most Commented";default:return"Latest Videos"}}function ee(){const e=new URLSearchParams(window.location.search).get("sort"),n=Q(e),a=X(e),s=n.map(i=>`
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${u(i.duration)}
                        </span>

                    </div>

                    <a
                        href="${z}/watch/${i.id}"
                        class="video-title"
                        data-link
                    >
                        ${i.title}
                    </a>

                    <div class="video-meta">
                        ${i.channelName}
                    </div>

                    <div class="video-meta">
                        ${i.category}
                    </div>

                    <div class="video-stats">
                        ${v(i.statistics.views)}
                        · ${i.statistics.likes} likes
                        · ${i.statistics.comments} comments
                    </div>

                </article>
            `).join("");return`
        <section class="welcome-box">

            <div class="box-title">
                Browse Videos
            </div>

            <div class="box-content">

                <h1>${a}</h1>

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

                ${a}

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
    `}const A="neptune-view-subscriptions";function p(){const t=localStorage.getItem(A);if(!t)return[];try{return JSON.parse(t)}catch{return[]}}function T(t){localStorage.setItem(A,JSON.stringify(t))}function te(){return p()}function U(t,e){return p().some(n=>n.userId===t&&n.channelId===e)}function ne(t,e){const n=p();n.some(s=>s.userId===t&&s.channelId===e)||(n.push({userId:t,channelId:e,subscribedAt:new Date().toISOString()}),T(n))}function se(t,e){const a=p().filter(s=>!(s.userId===t&&s.channelId===e));T(a)}function ae(t){return p().filter(e=>e.userId===t).map(e=>e.channelId)}const b=[{id:"neptune-corporation",userId:"neptune-corporation",name:"Neptune Corporation™",description:"Official videos, announcements, development updates, and other content from Neptune Corporation™.",avatarUrl:"/images/avatars/neptune.png",bannerUrl:"/images/banners/neptune.png",createdAt:"2026-08-01T00:00:00Z",subscribers:0},{id:"example-channel",userId:"example-user",name:"Example Channel",description:"An example Neptune View™ channel.",avatarUrl:"/images/avatars/example.png",bannerUrl:"/images/banners/example.png",createdAt:"2026-08-05T00:00:00Z",subscribers:0}];function R(t){return b.find(e=>e.id===t)}function ie(t){const e=R(t);if(!e)return 0;const n=te().filter(a=>a.channelId===t);return e.subscribers+n.length}function oe(){return`
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

            ${b.map(e=>`
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
    `}const M=[{id:"music",name:"Music",description:"Music videos, performances, remixes, and audio."},{id:"gaming",name:"Gaming",description:"Gameplay, game development, reviews, and gaming content."},{id:"technology",name:"Technology",description:"Computers, software, programming, hardware, and technology."},{id:"entertainment",name:"Entertainment",description:"Shows, comedy, animation, and other entertainment."},{id:"education",name:"Education",description:"Tutorials, lessons, explanations, and educational content."},{id:"news",name:"News",description:"News reports, announcements, and current events."},{id:"sports",name:"Sports",description:"Sports videos, highlights, and commentary."},{id:"people",name:"People & Blogs",description:"Personal videos, vlogs, and everyday life."},{id:"other",name:"Other",description:"Videos that don't fit another category."}];function ce(t){return M.find(e=>e.id===t)}function re(){return`
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
            ${M.map(e=>`
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
    `}function de(){return`
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
    `}function le(){return`
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
    `}const V="/Neptune-View";function ue(t=""){const e=t.trim().toLowerCase(),n=e.length>0?c.filter(s=>{const i=s.title.toLowerCase(),l=s.description.toLowerCase(),r=s.channelName.toLowerCase(),o=s.category.toLowerCase(),H=s.tags.join(" ").toLowerCase();return i.includes(e)||l.includes(e)||r.includes(e)||o.includes(e)||H.includes(e)}):[],a=n.map(s=>`
                    <article class="video-card">

                        <a
                            href="${V}/watch/${s.id}"
                            data-link
                            class="thumbnail"
                        >

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${u(s.duration)}
                            </span>

                        </a>

                        <a
                            href="${V}/watch/${s.id}"
                            data-link
                            class="video-title"
                        >
                            ${s.title}
                        </a>

                        <a
                            href="/channels/${s.channelId}"
                            data-link
                            class="video-channel"
                        >
                            ${s.channelName}
                        </a>

                        <div class="video-stats">
                            ${v(s.statistics.views)}
                        </div>

                    </article>
                `).join("");return`
        <section class="welcome-box">

            <div class="box-title">
                Search Neptune View
            </div>

            <div class="box-content">

                <form
                    class="search-page-form"
                    id="search-page-form"
                >

                    <input
                        type="text"
                        id="search-page-input"
                        value="${e}"
                        placeholder="Search videos..."
                        autocomplete="off"
                    />

                    <button
                        type="submit"
                    >
                        Search
                    </button>

                </form>

            </div>

        </section>

        ${e.length>0?`
                    <section class="video-section">

                        <div class="section-header">
                            Search Results
                        </div>

                        <div class="search-result-info">
                            ${n.length}
                            result${n.length===1?"":"s"}
                            for
                            "<strong>${e}</strong>"
                        </div>

                        ${n.length>0?`
                                    <div class="video-grid">
                                        ${a}
                                    </div>
                                `:`
                                    <div class="empty-state">
                                        No videos matched
                                        your search.
                                    </div>
                                `}

                    </section>
                `:`
                    <section class="video-section">

                        <div class="section-header">
                            Search
                        </div>

                        <div class="empty-state">
                            Enter a search term
                            above to find videos.
                        </div>

                    </section>
                `}
    `}function ve(){const t=document.querySelector("#search-page-form"),e=document.querySelector("#search-page-input");!t||!e||t.addEventListener("submit",n=>{n.preventDefault();const a=e.value.trim(),s=encodeURIComponent(a);window.history.pushState({},"",`/search?q=${s}`),window.dispatchEvent(new Event("neptune-navigation"))})}const B="neptune-view-comments";function S(){const t=localStorage.getItem(B);if(!t)return[];try{return JSON.parse(t)}catch{return[]}}function q(t){localStorage.setItem(B,JSON.stringify(t))}function he(t){return S().filter(e=>e.videoId===t)}function me(t,e,n,a){const s=S(),i={id:crypto.randomUUID(),videoId:t,userId:e,username:n,content:a,createdAt:new Date().toISOString()};s.push(i),q(s)}function pe(t,e){const a=S().filter(s=>!(s.id===t&&s.userId===e));q(a)}const d="example-user",D="neptune-view-video-reactions";function x(){const t=localStorage.getItem(D);if(!t)return[];try{return JSON.parse(t)}catch{return[]}}function fe(t){localStorage.setItem(D,JSON.stringify(t))}function $(t,e){const a=x().find(s=>s.userId===t&&s.videoId===e);return a||{userId:t,videoId:e,liked:!1,favorited:!1}}function P(t){const e=x(),n=e.findIndex(a=>a.userId===t.userId&&a.videoId===t.videoId);n===-1?e.push(t):e[n]=t,fe(e)}function ge(t,e){return $(t,e).liked}function be(t,e){return $(t,e).favorited}function $e(t,e){const n=$(t,e);n.liked=!n.liked,P(n)}function we(t,e){const n=$(t,e);n.favorited=!n.favorited,P(n)}function ye(t){return x().filter(e=>e.userId===t&&e.favorited).map(e=>e.videoId)}const Se="/Neptune-View";function xe(t){return c.filter(e=>e.id!==t.id&&e.channelId===t.channelId).slice(0,3)}function ke(t){const e=J(c,t);if(!e)return`
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
        `;const n=he(e.id),a=ge(d,e.id),s=be(d,e.id),i=n.slice().reverse().map(o=>`
                    <article
                        class="comment"
                        data-comment-id="${o.id}"
                    >

                        <div class="comment-header">

                            <strong>
                                ${o.username}
                            </strong>

                            <span>
                                ${new Date(o.createdAt).toLocaleString()}
                            </span>

                        </div>

                        <div class="comment-content">
                            ${o.content}
                        </div>

                        ${o.userId===d?`
                                    <button
                                        type="button"
                                        class="comment-delete"
                                        data-delete-comment="${o.id}"
                                    >
                                        Delete
                                    </button>
                                `:""}

                    </article>
                `).join(""),l=xe(e),r=l.map(o=>`
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${u(o.duration)}
                        </span>

                    </div>

                    <a
                        href="${Se}/watch/${o.id}"
                        class="video-title"
                        data-link
                    >
                        ${o.title}
                    </a>

                    <div class="video-meta">
                        ${o.channelName}
                    </div>

                    <div class="video-stats">
                        ${v(o.statistics.views)}
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
                    ${v(e.statistics.views)}
                    ·
                    ${e.statistics.likes} likes
                    ·
                    ${e.statistics.comments} comments
                    ·
                    Uploaded ${O(e.uploadedAt)}
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

            <div class="video-actions">

                <button
                    type="button"
                    class="video-action-button ${a?"active":""}"
                    data-like-video="${e.id}"
                >
                    ${a?"Liked":"Like"}
                </button>

                <button
                    type="button"
                    class="video-action-button ${s?"active":""}"
                    data-favorite-video="${e.id}"
                >
                    ${s?"Favorited":"Favorite"}
                </button>

            </div>

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
                        ${u(e.duration)}
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

                        ${e.tags.map(o=>`
                                    <a
                                        href="/search?tag=${encodeURIComponent(o)}"
                                        data-link
                                    >
                                        ${o}
                                    </a>
                                `).join(" · ")}

                    </div>

                </div>

            </section>

            <section class="comments-section">

                <div class="section-header">
                    Comments
                    <span>
                        ${n.length}
                    </span>
                </div>

                <form
                    class="comment-form"
                        id="comment-form"
                        data-video-id="${e.id}"
                    >

                    <textarea
                        id="comment-input"
                        placeholder="Write a comment..."
                        maxlength="1000"
                        required
                    ></textarea>

                    <div class="comment-form-footer">

                        <span>
                            1000 characters maximum
                        </span>

                        <button
                            type="submit"
                            class="comment-submit"
                        >
                            Post Comment
                        </button>

                    </div>

                </form>

                <div class="comment-list">

                    ${n.length>0?i:`
                                <div class="empty-state">
                                    No comments yet.
                                    Be the first to comment!
                                </div>
                            `}

                </div>

            </section>

            ${l.length>0?`
                        <section class="video-section">

                            <div class="section-header">
                                More from
                                ${e.channelName}
                            </div>

                            <div class="video-grid">
                                ${r}
                            </div>

                        </section>
                    `:""}

        </section>
    `}function Ce(){const t=document.querySelector("#comment-form"),e=document.querySelector("#comment-input");t&&e&&t.addEventListener("submit",a=>{a.preventDefault();const s=e.value.trim(),i=t.dataset.videoId;!s||!i||(me(i,d,"Example User",s),window.dispatchEvent(new Event("neptune-comment-changed")))}),document.querySelectorAll("[data-delete-comment]").forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.deleteComment;s&&(pe(s,d),window.dispatchEvent(new Event("neptune-comment-changed")))})})}function Ve(){const t=document.querySelector("[data-like-video]"),e=document.querySelector("[data-favorite-video]");t&&t.addEventListener("click",()=>{const n=t.dataset.likeVideo;n&&($e(d,n),window.dispatchEvent(new Event("neptune-reaction-changed")))}),e&&e.addEventListener("click",()=>{const n=e.dataset.favoriteVideo;n&&(we(d,n),window.dispatchEvent(new Event("neptune-reaction-changed")))})}const Ne="/Neptune-View";function Ie(t){const e=ce(t);if(!e)return`
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
        `;const n=g(Y(c,t)),a=n.map(s=>`
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${u(s.duration)}
                        </span>

                    </div>

                    <a
                        href="${Ne}/watch/${s.id}"
                        data-link
                        class="video-title"
                    >
                        ${s.title}
                    </a>

                    <div class="video-meta">
                        ${s.channelName}
                    </div>

                    <div class="video-stats">
                        ${v(s.statistics.views)}
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
                            ${a}
                        </div>
                    `:`
                        <div class="empty-state">
                            No videos have been
                            uploaded to this category yet.
                        </div>
                    `}

        </section>
    `}function Le(){return`
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
            ${G(c).map(n=>`
                <a
                    href="/search?tag=${encodeURIComponent(n)}"
                    data-link
                    class="tag-link"
                >
                    ${n}
                </a>
            `).join("")}
        </section>
    `}const N="/Neptune-View";function Ee(t){return new Date(t).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}function Ae(t){const e=R(t);if(e===void 0)return`
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
        `;const n=U(d,e.id),a=ie(e.id),s=c.filter(r=>r.channelId===e.id),i=s.reduce((r,o)=>r+o.statistics.views,0),l=s.map(r=>`
                <article class="channel-video-card">

                    <a
                        href="${N}/watch/${r.id}"
                        data-link
                        class="channel-video-thumbnail"
                    >

                        <div class="thumbnail">

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${u(r.duration)}
                            </span>

                        </div>

                    </a>

                    <a
                        href="${N}/watch/${r.id}"
                        data-link
                        class="video-title"
                    >
                        ${r.title}
                    </a>

                    <div class="video-stats">
                        ${v(r.statistics.views)}
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
                        ${a.toLocaleString()}
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

                            ${i.toLocaleString()}
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

                            ${Ee(e.createdAt)}
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
    `}function Te(){const t=document.querySelector("[data-subscribe]");t&&t.addEventListener("click",()=>{const e=t.dataset.subscribe;if(!e)return;U(d,e)?se(d,e):ne(d,e),window.dispatchEvent(new Event("neptune-subscription-changed"))})}function Ue(t){return new Date(t).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}function Re(t){const e=b.find(n=>n.id===t);return e?`
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
                            ${Ue(e.createdAt)}
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
        `}const I="/Neptune-View";function Me(){const t=ae(d),e=b.filter(i=>t.includes(i.id)),n=g(c.filter(i=>t.includes(i.channelId))),a=n.map(i=>`
                    <article class="video-card">

                        <a
                            href="${I}/watch/${i.id}"
                            data-link
                            class="thumbnail"
                        >

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${u(i.duration)}
                            </span>

                        </a>

                        <a
                            href="${I}/watch/${i.id}"
                            data-link
                            class="video-title"
                        >
                            ${i.title}
                        </a>

                        <a
                            href="/channels/${i.channelId}"
                            data-link
                            class="video-channel"
                        >
                            ${i.channelName}
                        </a>

                        <div class="video-stats">
                            ${v(i.statistics.views)}
                        </div>

                    </article>
                `).join(""),s=e.map(i=>`
                    <a
                        href="/channels/${i.id}"
                        data-link
                        class="subscription-channel"
                    >
                        ${i.name}
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
                            ${a}
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
    `}const L="/Neptune-View";function Be(){const t=ye(d),e=c.filter(a=>t.includes(a.id)),n=e.map(a=>`
                    <article class="video-card">

                        <a
                            href="${L}/watch/${a.id}"
                            data-link
                            class="thumbnail"
                        >

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${u(a.duration)}
                            </span>

                        </a>

                        <a
                            href="${L}/watch/${a.id}"
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
                            ${v(a.statistics.views)}
                        </div>

                    </article>
                `).join("");return`
        <section class="welcome-box">

            <div class="box-title">
                Favorites
            </div>

            <div class="box-content">

                <h1>
                    My Favorites
                </h1>

                <p>
                    Videos you've chosen to save
                    to your favorites.
                </p>

            </div>

        </section>

        <section class="video-section">

            <div class="section-header">
                Favorite Videos
            </div>

            ${e.length>0?`
                        <div class="video-grid">
                            ${n}
                        </div>
                    `:`
                        <div class="empty-state">
                            You haven't favorited
                            any videos yet.
                        </div>
                    `}

        </section>
    `}const w="/Neptune-View";function qe(){if(c.length===0)return`
            <section class="welcome-box">

                <div class="box-title">
                    Random Video
                </div>

                <div class="box-content">

                    <h1>
                        No Videos Available
                    </h1>

                    <p>
                        There are currently no videos
                        to choose from.
                    </p>

                </div>

            </section>
        `;const t=Math.floor(Math.random()*c.length),e=c[t];return`
        <section class="welcome-box">

            <div class="box-title">
                Random Video
            </div>

            <div class="box-content">

                <h1>
                    Random Video
                </h1>

                <p>
                    Neptune View picked a
                    completely random video.
                </p>

                <a
                    href="${w}/watch/${e.id}"
                    data-link
                    class="random-video-button"
                >
                    Watch Random Video
                </a>

            </div>

        </section>

        <section class="video-section">

            <div class="section-header">
                Your Random Video
            </div>

            <div class="random-video-card">

                <a
                    href="${w}/watch/${e.id}"
                    data-link
                    class="thumbnail random-video-thumbnail"
                >

                    <span>
                        No Thumbnail
                    </span>

                    <span class="duration">
                        ${u(e.duration)}
                    </span>

                </a>

                <div class="random-video-information">

                    <a
                        href="${w}/watch/${e.id}"
                        data-link
                        class="video-title"
                    >
                        ${e.title}
                    </a>

                    <a
                        href="/channels/${e.channelId}"
                        data-link
                        class="video-channel"
                    >
                        ${e.channelName}
                    </a>

                    <div class="video-stats">
                        ${v(e.statistics.views)}
                    </div>

                    <p>
                        ${e.description}
                    </p>

                </div>

            </div>

        </section>
    `}const f="/Neptune-View",De={"/":Z,"/videos":ee,"/channels":oe,"/categories":re,"/tags":Le,"/subscriptions":Me,"/favorites":Be,"/community":de,"/upload":le};function m(){const t=document.querySelector("#page-content");if(!t)throw new Error("Page content container not found.");const e=window.location.pathname,n=e.startsWith(f)?e.substring(f.length)||"/":e;if(n==="/Neptune-View/random"){if(c.length===0){t.innerHTML=qe(),h();return}const s=Math.floor(Math.random()*c.length),i=c[s];window.history.pushState({},"",`${f}/watch/${i.id}`),m();return}if(n==="/Neptune-View/search"){const i=new URLSearchParams(window.location.search).get("q")??"";t.innerHTML=ue(i),ve(),h();return}if(n.startsWith("/watch/")){const s=decodeURIComponent(n.substring(7));t.innerHTML=ke(s),Ce(),Ve(),h();return}if(n.startsWith("/categories/")){const s=decodeURIComponent(n.substring(12));t.innerHTML=Ie(s),h();return}if(n.startsWith("/channels/")&&n.endsWith("/about")){const s=decodeURIComponent(n.substring(10).replace(/\/about$/,""));t.innerHTML=Re(s),h();return}if(n.startsWith("/channels/")){const s=decodeURIComponent(n.substring(10));t.innerHTML=Ae(s),Te(),h();return}const a=De[n]??Pe;t.innerHTML=a(),h()}function Pe(){return`
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
                        href="${f}/"
                        data-link
                    >
                        Return to Neptune View™
                    </a>
                </p>

            </div>

        </section>
    `}function h(){const t=window.location.pathname;document.querySelectorAll(".main-nav a").forEach(e=>{const n=e.getAttribute("href");e.classList.toggle("active",n===t)})}window.addEventListener("neptune-subscription-changed",()=>{m()});window.addEventListener("neptune-comment-changed",()=>{m()});window.addEventListener("neptune-reaction-changed",()=>{m()});window.addEventListener("neptune-navigation",()=>{m()});const F=document.querySelector("#app");if(!F)throw new Error("Application root not found.");F.innerHTML=`
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
`;function k(){if(!document.querySelector("#page-content"))throw new Error("Page content container not found.");if(m(),!document.querySelector("#app"))throw new Error("Application root not found.")}function y(t){window.history.pushState({},"",t),k()}document.addEventListener("click",t=>{const n=t.target.closest("a[data-link]");if(!n)return;const a=n.getAttribute("href");!a||a.startsWith("#")||(t.preventDefault(),y(a))});window.addEventListener("popstate",()=>{k()});const E=document.querySelector("#search-form");E?.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(E),n=String(e.get("q")??"").trim();if(!n){y("/search");return}y(`/search?q=${encodeURIComponent(n)}`)});function Fe(){const t=document.querySelector("#header-search-form"),e=document.querySelector("#header-search-input");!t||!e||t.addEventListener("submit",n=>{n.preventDefault();const a=e.value.trim();a&&(window.history.pushState({},"",`/search?q=${encodeURIComponent(a)}`),window.dispatchEvent(new Event("neptune-navigation")))})}k();Fe();
