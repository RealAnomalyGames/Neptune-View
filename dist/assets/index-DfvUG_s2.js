(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const c=[{id:"welcome-to-neptune-view",title:"Welcome to Neptune View",description:"Welcome to Neptune View™, a video-sharing website where you decide what you watch.",channelId:"neptune-corporation",channelName:"Neptune Corporation™",videoUrl:"/videos/welcome.mp4",thumbnailUrl:"/images/thumbnails/welcome.jpg",duration:92,category:"technology",tags:["neptune","neptune view","announcement","technology"],language:"en",resolution:{width:1280,height:720},statistics:{views:142,likes:23,comments:7},uploadedAt:"2026-08-07T00:00:00Z",updatedAt:"2026-08-07T00:00:00Z",visibility:"public",rating:"all-ages",license:"neptune-standard"},{id:"my-first-video",title:"My First Video",description:"An example video uploaded to Neptune View™.",channelId:"example-channel",channelName:"Example Channel",videoUrl:"/videos/example.mp4",thumbnailUrl:"/images/thumbnails/example.jpg",duration:157,category:"other",tags:["first video","example"],language:"en",resolution:{width:1920,height:1080},statistics:{views:83,likes:31,comments:12},uploadedAt:"2026-08-07T00:05:00Z",updatedAt:"2026-08-07T00:05:00Z",visibility:"public",rating:"all-ages",license:"neptune-standard"},{id:"something-interesting",title:"Something Interesting",description:"Just a random example video for Neptune View™.",channelId:"example-channel",channelName:"Example Channel",videoUrl:"/videos/interesting.mp4",thumbnailUrl:"/images/thumbnails/interesting.jpg",duration:245,category:"other",tags:["random","interesting"],language:"en",resolution:{width:1280,height:720},statistics:{views:219,likes:18,comments:4},uploadedAt:"2026-08-07T00:10:00Z",updatedAt:"2026-08-07T00:10:00Z",visibility:"public",rating:"all-ages",license:"neptune-standard"}];function u(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),a=(t%60).toString().padStart(2,"0");return e>0?`${e}:${n.toString().padStart(2,"0")}:${a}`:`${n}:${a}`}function v(t){return`${t.toLocaleString()} views`}function M(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function g(t){return[...t].sort((e,n)=>new Date(n.uploadedAt).getTime()-new Date(e.uploadedAt).getTime())}function q(t){return[...t].sort((e,n)=>n.statistics.views-e.statistics.views)}function D(t){return[...t].sort((e,n)=>n.statistics.likes-e.statistics.likes)}function F(t){return[...t].sort((e,n)=>n.statistics.comments-e.statistics.comments)}function B(t,e){return t.find(n=>n.id===e)}function O(t,e){return t.filter(n=>n.category===e)}function j(t){const e=new Set;for(const n of t)for(const s of n.tags)e.add(s);return Array.from(e).sort((n,s)=>n.localeCompare(s))}function P(){return`
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
                        ${v(n.statistics.views)}
                    </div>

                </article>
            `).join("")}
            </div>

        </section>
    `}function W(t){switch(t){case"popular":return q(c);case"liked":return D(c);case"commented":return F(c);default:return g(c)}}function H(t){switch(t){case"popular":return"Most Viewed";case"liked":return"Most Liked";case"commented":return"Most Commented";default:return"Latest Videos"}}function J(){const e=new URLSearchParams(window.location.search).get("sort"),n=W(e),s=H(e),a=n.map(i=>`
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
                        href="/watch/${i.id}"
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

                <h1>${s}</h1>

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

                ${s}

                <span>
                    ${n.length} videos
                </span>

            </div>

            ${n.length>0?`
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
    `}const k="neptune-view-subscriptions";function p(){const t=localStorage.getItem(k);if(!t)return[];try{return JSON.parse(t)}catch{return[]}}function C(t){localStorage.setItem(k,JSON.stringify(t))}function Y(){return p()}function V(t,e){return p().some(n=>n.userId===t&&n.channelId===e)}function Z(t,e){const n=p();n.some(a=>a.userId===t&&a.channelId===e)||(n.push({userId:t,channelId:e,subscribedAt:new Date().toISOString()}),C(n))}function G(t,e){const s=p().filter(a=>!(a.userId===t&&a.channelId===e));C(s)}function _(t){return p().filter(e=>e.userId===t).map(e=>e.channelId)}const f=[{id:"neptune-corporation",userId:"neptune-corporation",name:"Neptune Corporation™",description:"Official videos, announcements, development updates, and other content from Neptune Corporation™.",avatarUrl:"/images/avatars/neptune.png",bannerUrl:"/images/banners/neptune.png",createdAt:"2026-08-01T00:00:00Z",subscribers:0},{id:"example-channel",userId:"example-user",name:"Example Channel",description:"An example Neptune View™ channel.",avatarUrl:"/images/avatars/example.png",bannerUrl:"/images/banners/example.png",createdAt:"2026-08-05T00:00:00Z",subscribers:0}];function N(t){return f.find(e=>e.id===t)}function K(t){const e=N(t);if(!e)return 0;const n=Y().filter(s=>s.channelId===t);return e.subscribers+n.length}function z(){return`
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

            ${f.map(e=>`
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
    `}const I=[{id:"music",name:"Music",description:"Music videos, performances, remixes, and audio."},{id:"gaming",name:"Gaming",description:"Gameplay, game development, reviews, and gaming content."},{id:"technology",name:"Technology",description:"Computers, software, programming, hardware, and technology."},{id:"entertainment",name:"Entertainment",description:"Shows, comedy, animation, and other entertainment."},{id:"education",name:"Education",description:"Tutorials, lessons, explanations, and educational content."},{id:"news",name:"News",description:"News reports, announcements, and current events."},{id:"sports",name:"Sports",description:"Sports videos, highlights, and commentary."},{id:"people",name:"People & Blogs",description:"Personal videos, vlogs, and everyday life."},{id:"other",name:"Other",description:"Videos that don't fit another category."}];function Q(t){return I.find(e=>e.id===t)}function X(){return`
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
            ${I.map(e=>`
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
    `}function ee(){return`
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
    `}function te(){return`
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
    `}function ne(t=""){const e=t.trim().toLowerCase(),n=e.length>0?c.filter(a=>{const i=a.title.toLowerCase(),r=a.description.toLowerCase(),d=a.channelName.toLowerCase(),o=a.category.toLowerCase(),R=a.tags.join(" ").toLowerCase();return i.includes(e)||r.includes(e)||d.includes(e)||o.includes(e)||R.includes(e)}):[],s=n.map(a=>`
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
                                ${u(a.duration)}
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
                            ${v(a.statistics.views)}
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
                                        ${s}
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
    `}function ae(){const t=document.querySelector("#search-page-form"),e=document.querySelector("#search-page-input");!t||!e||t.addEventListener("submit",n=>{n.preventDefault();const s=e.value.trim(),a=encodeURIComponent(s);window.history.pushState({},"",`/search?q=${a}`),window.dispatchEvent(new Event("neptune-navigation"))})}const L="neptune-view-comments";function $(){const t=localStorage.getItem(L);if(!t)return[];try{return JSON.parse(t)}catch{return[]}}function E(t){localStorage.setItem(L,JSON.stringify(t))}function se(t){return $().filter(e=>e.videoId===t)}function ie(t,e,n,s){const a=$(),i={id:crypto.randomUUID(),videoId:t,userId:e,username:n,content:s,createdAt:new Date().toISOString()};a.push(i),E(a)}function oe(t,e){const s=$().filter(a=>!(a.id===t&&a.userId===e));E(s)}const l="example-user",T="neptune-view-video-reactions";function y(){const t=localStorage.getItem(T);if(!t)return[];try{return JSON.parse(t)}catch{return[]}}function ce(t){localStorage.setItem(T,JSON.stringify(t))}function b(t,e){const s=y().find(a=>a.userId===t&&a.videoId===e);return s||{userId:t,videoId:e,liked:!1,favorited:!1}}function U(t){const e=y(),n=e.findIndex(s=>s.userId===t.userId&&s.videoId===t.videoId);n===-1?e.push(t):e[n]=t,ce(e)}function re(t,e){return b(t,e).liked}function de(t,e){return b(t,e).favorited}function le(t,e){const n=b(t,e);n.liked=!n.liked,U(n)}function ue(t,e){const n=b(t,e);n.favorited=!n.favorited,U(n)}function ve(t){return y().filter(e=>e.userId===t&&e.favorited).map(e=>e.videoId)}function he(t){return c.filter(e=>e.id!==t.id&&e.channelId===t.channelId).slice(0,3)}function me(t){const e=B(c,t);if(!e)return`
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
        `;const n=se(e.id),s=re(l,e.id),a=de(l,e.id),i=n.slice().reverse().map(o=>`
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

                        ${o.userId===l?`
                                    <button
                                        type="button"
                                        class="comment-delete"
                                        data-delete-comment="${o.id}"
                                    >
                                        Delete
                                    </button>
                                `:""}

                    </article>
                `).join(""),r=he(e),d=r.map(o=>`
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
                        href="/watch/${o.id}"
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
                    Uploaded ${M(e.uploadedAt)}
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
                    class="video-action-button ${s?"active":""}"
                    data-like-video="${e.id}"
                >
                    ${s?"Liked":"Like"}
                </button>

                <button
                    type="button"
                    class="video-action-button ${a?"active":""}"
                    data-favorite-video="${e.id}"
                >
                    ${a?"Favorited":"Favorite"}
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

            ${r.length>0?`
                        <section class="video-section">

                            <div class="section-header">
                                More from
                                ${e.channelName}
                            </div>

                            <div class="video-grid">
                                ${d}
                            </div>

                        </section>
                    `:""}

        </section>
    `}function pe(){const t=document.querySelector("#comment-form"),e=document.querySelector("#comment-input");t&&e&&t.addEventListener("submit",s=>{s.preventDefault();const a=e.value.trim(),i=t.dataset.videoId;!a||!i||(ie(i,l,"Example User",a),window.dispatchEvent(new Event("neptune-comment-changed")))}),document.querySelectorAll("[data-delete-comment]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.deleteComment;a&&(oe(a,l),window.dispatchEvent(new Event("neptune-comment-changed")))})})}function ge(){const t=document.querySelector("[data-like-video]"),e=document.querySelector("[data-favorite-video]");t&&t.addEventListener("click",()=>{const n=t.dataset.likeVideo;n&&(le(l,n),window.dispatchEvent(new Event("neptune-reaction-changed")))}),e&&e.addEventListener("click",()=>{const n=e.dataset.favoriteVideo;n&&(ue(l,n),window.dispatchEvent(new Event("neptune-reaction-changed")))})}function fe(t){const e=Q(t);if(!e)return`
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
        `;const n=g(O(c,t)),s=n.map(a=>`
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${u(a.duration)}
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
                        ${v(a.statistics.views)}
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
                            ${s}
                        </div>
                    `:`
                        <div class="empty-state">
                            No videos have been
                            uploaded to this category yet.
                        </div>
                    `}

        </section>
    `}function be(){return`
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
            ${j(c).map(n=>`
                <a
                    href="/search?tag=${encodeURIComponent(n)}"
                    data-link
                    class="tag-link"
                >
                    ${n}
                </a>
            `).join("")}
        </section>
    `}function we(t){return new Date(t).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}function $e(t){const e=N(t);if(e===void 0)return`
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
        `;const n=V(l,e.id),s=K(e.id),a=c.filter(d=>d.channelId===e.id),i=a.reduce((d,o)=>d+o.statistics.views,0),r=a.map(d=>`
                <article class="channel-video-card">

                    <a
                        href="/watch/${d.id}"
                        data-link
                        class="channel-video-thumbnail"
                    >

                        <div class="thumbnail">

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${u(d.duration)}
                            </span>

                        </div>

                    </a>

                    <a
                        href="/watch/${d.id}"
                        data-link
                        class="video-title"
                    >
                        ${d.title}
                    </a>

                    <div class="video-stats">
                        ${v(d.statistics.views)}
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
                        ${s.toLocaleString()}
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

                    ${a.length>0?`
                                <div class="video-grid">
                                    ${r}
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

                            ${a.length}
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

                            ${we(e.createdAt)}
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
    `}function ye(){const t=document.querySelector("[data-subscribe]");t&&t.addEventListener("click",()=>{const e=t.dataset.subscribe;if(!e)return;V(l,e)?G(l,e):Z(l,e),window.dispatchEvent(new Event("neptune-subscription-changed"))})}function xe(t){return new Date(t).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}function Se(t){const e=f.find(n=>n.id===t);return e?`
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
                            ${xe(e.createdAt)}
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
        `}function ke(){const t=_(l),e=f.filter(i=>t.includes(i.id)),n=g(c.filter(i=>t.includes(i.channelId))),s=n.map(i=>`
                    <article class="video-card">

                        <a
                            href="/watch/${i.id}"
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
                            href="/watch/${i.id}"
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
                `).join(""),a=e.map(i=>`
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

            ${e.length>0?a:`
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
                            ${s}
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
    `}function Ce(){const t=ve(l),e=c.filter(s=>t.includes(s.id)),n=e.map(s=>`
                    <article class="video-card">

                        <a
                            href="/watch/${s.id}"
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
                            href="/watch/${s.id}"
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
    `}function Ve(){if(c.length===0)return`
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
                    href="/watch/${e.id}"
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
                    href="/watch/${e.id}"
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
                        href="/watch/${e.id}"
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
    `}const Ne={"/":P,"/videos":J,"/channels":z,"/categories":X,"/tags":be,"/subscriptions":ke,"/favorites":Ce,"/community":ee,"/upload":te};function m(){const t=document.querySelector("#page-content");if(!t)throw new Error("Page content container not found.");const e="/neptune-view",n=window.location.pathname,s=n.startsWith(e)?n.substring(e.length)||"/":n;if(s==="/random"){if(c.length===0){t.innerHTML=Ve(),h();return}const i=Math.floor(Math.random()*c.length),r=c[i];window.history.pushState({},"",`/watch/${r.id}`),m();return}if(s==="/search"){const r=new URLSearchParams(window.location.search).get("q")??"";t.innerHTML=ne(r),ae(),h();return}if(s.startsWith("/watch/")){const i=decodeURIComponent(s.substring(7));t.innerHTML=me(i),pe(),ge(),h();return}if(s.startsWith("/categories/")){const i=decodeURIComponent(s.substring(12));t.innerHTML=fe(i),h();return}if(s.startsWith("/channels/")&&s.endsWith("/about")){const i=decodeURIComponent(s.substring(10).replace(/\/about$/,""));t.innerHTML=Se(i),h();return}if(s.startsWith("/channels/")){const i=decodeURIComponent(s.substring(10));t.innerHTML=$e(i),ye(),h();return}const a=Ne[s]??Ie;t.innerHTML=a(),h()}function Ie(){return`
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
    `}function h(){const t=window.location.pathname;document.querySelectorAll(".main-nav a").forEach(e=>{const n=e.getAttribute("href");e.classList.toggle("active",n===t)})}window.addEventListener("neptune-subscription-changed",()=>{m()});window.addEventListener("neptune-comment-changed",()=>{m()});window.addEventListener("neptune-reaction-changed",()=>{m()});window.addEventListener("neptune-navigation",()=>{m()});const A=document.querySelector("#app");if(!A)throw new Error("Application root not found.");A.innerHTML=`
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
`;function x(){if(!document.querySelector("#page-content"))throw new Error("Page content container not found.");if(m(),!document.querySelector("#app"))throw new Error("Application root not found.")}function w(t){window.history.pushState({},"",t),x()}document.addEventListener("click",t=>{const n=t.target.closest("a[data-link]");if(!n)return;const s=n.getAttribute("href");!s||s.startsWith("#")||(t.preventDefault(),w(s))});window.addEventListener("popstate",()=>{x()});const S=document.querySelector("#search-form");S?.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(S),n=String(e.get("q")??"").trim();if(!n){w("/search");return}w(`/search?q=${encodeURIComponent(n)}`)});function Le(){const t=document.querySelector("#header-search-form"),e=document.querySelector("#header-search-input");!t||!e||t.addEventListener("submit",n=>{n.preventDefault();const s=e.value.trim();s&&(window.history.pushState({},"",`/search?q=${encodeURIComponent(s)}`),window.dispatchEvent(new Event("neptune-navigation")))})}x();Le();
