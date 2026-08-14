(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function N(t){return`/Neptune-View/${t.replace(/^\/+/,"")}`}const c=[{id:"my-first-video",title:"My First Video",description:"An example video uploaded to Neptune View™.",channelId:"example-channel",channelName:"Example Channel",videoUrl:N("media/videos/example.mp4"),thumbnailUrl:N("media/thumbnails/example.jpg"),duration:157,category:"other",tags:["first video","example"],language:"en",resolution:{width:1920,height:1080},statistics:{views:0,likes:0,comments:0},uploadedAt:"2026-08-07T00:05:00Z",updatedAt:"2026-08-07T00:05:00Z",visibility:"public",rating:"all-ages",license:"neptune-standard"}];function v(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=(t%60).toString().padStart(2,"0");return e>0?`${e}:${n.toString().padStart(2,"0")}:${i}`:`${n}:${i}`}function p(t){return`${t.toLocaleString()} views`}function J(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function w(t){return[...t].sort((e,n)=>new Date(n.uploadedAt).getTime()-new Date(e.uploadedAt).getTime())}function G(t){return[...t].sort((e,n)=>n.statistics.views-e.statistics.views)}function Z(t){return[...t].sort((e,n)=>n.statistics.likes-e.statistics.likes)}function z(t){return[...t].sort((e,n)=>n.statistics.comments-e.statistics.comments)}function K(t,e){return t.find(n=>n.id===e)}function Q(t,e){return t.filter(n=>n.category===e)}function X(t){const e=new Set;for(const n of t)for(const a of n.tags)e.add(a);return Array.from(e).sort((n,a)=>n.localeCompare(a))}const ee="/Neptune-View";function te(){return`
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
                ${w(c).slice(0,3).map(n=>`
                <article class="video-card">

                    <div class="thumbnail">
                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${v(n.duration)}
                        </span>
                    </div>

                    <a
                        href="${ee}/watch/${n.id}"
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
                        ${p(n.statistics.views)}
                    </div>

                </article>
            `).join("")}
            </div>

        </section>
    `}const ne="/Neptune-View";function ie(t){switch(t){case"popular":return G(c);case"liked":return Z(c);case"commented":return z(c);default:return w(c)}}function ae(t){switch(t){case"popular":return"Most Viewed";case"liked":return"Most Liked";case"commented":return"Most Commented";default:return"Latest Videos"}}function se(){const e=new URLSearchParams(window.location.search).get("sort"),n=ie(e),a=ae(e),i=n.map(s=>`
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${v(s.duration)}
                        </span>

                    </div>

                    <a
                        href="${ne}/watch/${s.id}"
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
                        ${p(s.statistics.views)}
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
                            ${i}
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
    `}const q="neptune-view-subscriptions";function f(){const t=localStorage.getItem(q);if(!t)return[];try{return JSON.parse(t)}catch{return[]}}function M(t){localStorage.setItem(q,JSON.stringify(t))}function oe(){return f()}function R(t,e){return f().some(n=>n.userId===t&&n.channelId===e)}function ce(t,e){const n=f();n.some(i=>i.userId===t&&i.channelId===e)||(n.push({userId:t,channelId:e,subscribedAt:new Date().toISOString()}),M(n))}function re(t,e){const a=f().filter(i=>!(i.userId===t&&i.channelId===e));M(a)}function de(t){return f().filter(e=>e.userId===t).map(e=>e.channelId)}const y=[{id:"neptune-corporation",userId:"neptune-corporation",name:"Neptune Corporation™",description:"Official videos, announcements, development updates, and other content from Neptune Corporation™.",avatarUrl:"/images/avatars/neptune.png",bannerUrl:"/images/banners/neptune.png",createdAt:"2026-08-01T00:00:00Z",subscribers:0},{id:"example-channel",userId:"example-user",name:"Example Channel",description:"An example Neptune View™ channel.",avatarUrl:"/images/avatars/example.png",bannerUrl:"/images/banners/example.png",createdAt:"2026-08-05T00:00:00Z",subscribers:0}];function D(t){return y.find(e=>e.id===t)}function le(t){const e=D(t);if(!e)return 0;const n=oe().filter(a=>a.channelId===t);return e.subscribers+n.length}function ue(){return`
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

            ${y.map(e=>`
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
    `}const B=[{id:"music",name:"Music",description:"Music videos, performances, remixes, and audio."},{id:"gaming",name:"Gaming",description:"Gameplay, game development, reviews, and gaming content."},{id:"technology",name:"Technology",description:"Computers, software, programming, hardware, and technology."},{id:"entertainment",name:"Entertainment",description:"Shows, comedy, animation, and other entertainment."},{id:"education",name:"Education",description:"Tutorials, lessons, explanations, and educational content."},{id:"news",name:"News",description:"News reports, announcements, and current events."},{id:"sports",name:"Sports",description:"Sports videos, highlights, and commentary."},{id:"people",name:"People & Blogs",description:"Personal videos, vlogs, and everyday life."},{id:"other",name:"Other",description:"Videos that don't fit another category."}];function ve(t){return B.find(e=>e.id===t)}function pe(){return`
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
            ${B.map(e=>`
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
    `}function me(){return`
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
    `}const he=500*1024*1024,fe=10*1024*1024;function P(){return`
        <section class="box">

            <div class="box-title">
                Upload Video
            </div>

            <div class="box-content">

                <form id="upload-form">

                    <p>
                        <label for="video-title">
                            Video Title
                        </label>
                        <br>

                        <input
                            type="text"
                            id="video-title"
                            name="title"
                            maxlength="100"
                            required
                        >
                    </p>

                    <p>
                        <label for="video-description">
                            Description
                        </label>
                        <br>

                        <textarea
                            id="video-description"
                            name="description"
                            maxlength="5000"
                            rows="8"
                            required
                        ></textarea>
                    </p>

                    <p>
                        <label for="video-file">
                            Video File
                        </label>
                        <br>

                        <input
                            type="file"
                            id="video-file"
                            name="video"
                            accept="video/*"
                            required
                        >
                    </p>

                    <p>
                        <label for="thumbnail-file">
                            Thumbnail
                        </label>
                        <br>

                        <input
                            type="file"
                            id="thumbnail-file"
                            name="thumbnail"
                            accept="image/*"
                            required
                        >
                    </p>

                    <p>
                        <label for="video-category">
                            Category
                        </label>
                        <br>

                        <select
                            id="video-category"
                            name="category"
                            required
                        >
                            <option value="">
                                Select a category
                            </option>

                            <option value="music">
                                Music
                            </option>

                            <option value="gaming">
                                Gaming
                            </option>

                            <option value="entertainment">
                                Entertainment
                            </option>

                            <option value="news">
                                News
                            </option>
                        </select>
                    </p>

                    <p>
                        <label for="video-tags">
                            Tags
                        </label>
                        <br>

                        <input
                            type="text"
                            id="video-tags"
                            name="tags"
                            placeholder="music, electronic, remix"
                        >
                    </p>

                    <p>
                        <button
                            type="submit"
                            id="upload-button"
                        >
                            Upload Video
                        </button>
                    </p>

                </form>

                <div
                    id="upload-status"
                    aria-live="polite"
                ></div>

            </div>

        </section>
    `}function ge(){const t=document.querySelector("#upload-form");t&&t.addEventListener("submit",be)}async function be(t){t.preventDefault();const e=t.currentTarget,n=new FormData(e),a=String(n.get("title")??"").trim();String(n.get("description")??"").trim();const i=n.get("video"),s=n.get("thumbnail");String(n.get("category")??"").trim(),String(n.get("tags")??"").split(",").map(r=>r.trim()).filter(Boolean);const o=document.querySelector("#upload-status");if(!o)return;if(a.length<1){o.textContent="Please enter a video title.";return}if(a.length>100){o.textContent="Video titles must be 100 characters or less.";return}if(!(i instanceof File)){o.textContent="Please select a video file.";return}if(!(s instanceof File)){o.textContent="Please select a thumbnail.";return}if(!i.type.startsWith("video/")){o.textContent="The selected file is not a video.";return}if(!s.type.startsWith("image/")){o.textContent="The selected thumbnail is not an image.";return}if(i.size>he){o.textContent="Video files must be 500 MB or smaller.";return}if(s.size>fe){o.textContent="Thumbnail files must be 10 MB or smaller.";return}let d;try{d=await $e(i)}catch{o.textContent="Unable to read the video duration.";return}o.textContent="Upload information is valid. Ready for server upload."}function $e(t){return new Promise((e,n)=>{const a=document.createElement("video"),i=URL.createObjectURL(t);a.preload="metadata",a.onloadedmetadata=()=>{URL.revokeObjectURL(i),e(Math.round(a.duration))},a.onerror=()=>{URL.revokeObjectURL(i),n(new Error("Unable to read video metadata."))},a.src=i})}const I="/Neptune-View";function we(t=""){const e=t.trim().toLowerCase(),n=e.length>0?c.filter(i=>{const s=i.title.toLowerCase(),o=i.description.toLowerCase(),d=i.channelName.toLowerCase(),r=i.category.toLowerCase(),g=i.tags.join(" ").toLowerCase();return s.includes(e)||o.includes(e)||d.includes(e)||r.includes(e)||g.includes(e)}):[],a=n.map(i=>`
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
                                ${v(i.duration)}
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
                            ${p(i.statistics.views)}
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
    `}function ye(){const t=document.querySelector("#search-page-form"),e=document.querySelector("#search-page-input");!t||!e||t.addEventListener("submit",n=>{n.preventDefault();const a=e.value.trim(),i=encodeURIComponent(a);window.history.pushState({},"",`/search?q=${i}`),window.dispatchEvent(new Event("neptune-navigation"))})}const F="neptune-view-comments";function k(){const t=localStorage.getItem(F);if(!t)return[];try{return JSON.parse(t)}catch{return[]}}function H(t){localStorage.setItem(F,JSON.stringify(t))}function xe(t){return k().filter(e=>e.videoId===t)}function Se(t,e,n,a){const i=k(),s={id:crypto.randomUUID(),videoId:t,userId:e,username:n,content:a,createdAt:new Date().toISOString()};i.push(s),H(i)}function Ce(t,e){const a=k().filter(i=>!(i.id===t&&i.userId===e));H(a)}const l="example-user",O="neptune-view-video-reactions";function V(){const t=localStorage.getItem(O);if(!t)return[];try{return JSON.parse(t)}catch{return[]}}function ke(t){localStorage.setItem(O,JSON.stringify(t))}function x(t,e){const a=V().find(i=>i.userId===t&&i.videoId===e);return a||{userId:t,videoId:e,liked:!1,favorited:!1}}function j(t){const e=V(),n=e.findIndex(a=>a.userId===t.userId&&a.videoId===t.videoId);n===-1?e.push(t):e[n]=t,ke(e)}function Ve(t,e){return x(t,e).liked}function Ee(t,e){return x(t,e).favorited}function Ne(t,e){const n=x(t,e);n.liked=!n.liked,j(n)}function Ie(t,e){const n=x(t,e);n.favorited=!n.favorited,j(n)}function Le(t){return V().filter(e=>e.userId===t&&e.favorited).map(e=>e.videoId)}const Te="/Neptune-View";function Ae(t){return c.filter(e=>e.id!==t.id&&e.channelId===t.channelId).slice(0,3)}function Ue(t){const e=K(c,t);if(!e)return`
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
        `;const n=xe(e.id),a=Ve(l,e.id),i=Ee(l,e.id),s=n.slice().reverse().map(r=>`
                    <article
                        class="comment"
                        data-comment-id="${r.id}"
                    >

                        <div class="comment-header">

                            <strong>
                                ${r.username}
                            </strong>

                            <span>
                                ${new Date(r.createdAt).toLocaleString()}
                            </span>

                        </div>

                        <div class="comment-content">
                            ${r.content}
                        </div>

                        ${r.userId===l?`
                                    <button
                                        type="button"
                                        class="comment-delete"
                                        data-delete-comment="${r.id}"
                                    >
                                        Delete
                                    </button>
                                `:""}

                    </article>
                `).join(""),o=Ae(e),d=o.map(r=>`
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${v(r.duration)}
                        </span>

                    </div>

                    <a
                        href="${Te}/watch/${r.id}"
                        class="video-title"
                        data-link
                    >
                        ${r.title}
                    </a>

                    <div class="video-meta">
                        ${r.channelName}
                    </div>

                    <div class="video-stats">
                        ${p(r.statistics.views)}
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
                    ${p(e.statistics.views)}
                    ·
                    ${e.statistics.likes} likes
                    ·
                    ${e.statistics.comments} comments
                    ·
                    Uploaded ${J(e.uploadedAt)}
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
                    class="video-action-button ${i?"active":""}"
                    data-favorite-video="${e.id}"
                >
                    ${i?"Favorited":"Favorite"}
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
                        ${v(e.duration)}
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

                        ${e.tags.map(r=>`
                                    <a
                                        href="/search?tag=${encodeURIComponent(r)}"
                                        data-link
                                    >
                                        ${r}
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

                    ${n.length>0?s:`
                                <div class="empty-state">
                                    No comments yet.
                                    Be the first to comment!
                                </div>
                            `}

                </div>

            </section>

            ${o.length>0?`
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
    `}function qe(){const t=document.querySelector("#comment-form"),e=document.querySelector("#comment-input");t&&e&&t.addEventListener("submit",a=>{a.preventDefault();const i=e.value.trim(),s=t.dataset.videoId;!i||!s||(Se(s,l,"Example User",i),window.dispatchEvent(new Event("neptune-comment-changed")))}),document.querySelectorAll("[data-delete-comment]").forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.deleteComment;i&&(Ce(i,l),window.dispatchEvent(new Event("neptune-comment-changed")))})})}function Me(){const t=document.querySelector("[data-like-video]"),e=document.querySelector("[data-favorite-video]");t&&t.addEventListener("click",()=>{const n=t.dataset.likeVideo;n&&(Ne(l,n),window.dispatchEvent(new Event("neptune-reaction-changed")))}),e&&e.addEventListener("click",()=>{const n=e.dataset.favoriteVideo;n&&(Ie(l,n),window.dispatchEvent(new Event("neptune-reaction-changed")))})}const Re="/Neptune-View";function De(t){const e=ve(t);if(!e)return`
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
        `;const n=w(Q(c,t)),a=n.map(i=>`
                <article class="video-card">

                    <div class="thumbnail">

                        <span>
                            No Thumbnail
                        </span>

                        <span class="duration">
                            ${v(i.duration)}
                        </span>

                    </div>

                    <a
                        href="${Re}/watch/${i.id}"
                        data-link
                        class="video-title"
                    >
                        ${i.title}
                    </a>

                    <div class="video-meta">
                        ${i.channelName}
                    </div>

                    <div class="video-stats">
                        ${p(i.statistics.views)}
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
    `}function Be(){return`
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
            ${X(c).map(n=>`
                <a
                    href="/search?tag=${encodeURIComponent(n)}"
                    data-link
                    class="tag-link"
                >
                    ${n}
                </a>
            `).join("")}
        </section>
    `}const L="/Neptune-View";function Pe(t){return new Date(t).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}function Fe(t){const e=D(t);if(e===void 0)return`
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
        `;const n=R(l,e.id),a=le(e.id),i=c.filter(d=>d.channelId===e.id),s=i.reduce((d,r)=>d+r.statistics.views,0),o=i.map(d=>`
                <article class="channel-video-card">

                    <a
                        href="${L}/watch/${d.id}"
                        data-link
                        class="channel-video-thumbnail"
                    >

                        <div class="thumbnail">

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${v(d.duration)}
                            </span>

                        </div>

                    </a>

                    <a
                        href="${L}/watch/${d.id}"
                        data-link
                        class="video-title"
                    >
                        ${d.title}
                    </a>

                    <div class="video-stats">
                        ${p(d.statistics.views)}
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

                    ${i.length>0?`
                                <div class="video-grid">
                                    ${o}
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

                            ${i.length}
                        </div>

                        <div class="channel-stat">
                            <strong>
                                Views:
                            </strong>

                            ${s.toLocaleString()}
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

                            ${Pe(e.createdAt)}
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
    `}function He(){const t=document.querySelector("[data-subscribe]");t&&t.addEventListener("click",()=>{const e=t.dataset.subscribe;if(!e)return;R(l,e)?re(l,e):ce(l,e),window.dispatchEvent(new Event("neptune-subscription-changed"))})}function Oe(t){return new Date(t).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}function je(t){const e=y.find(n=>n.id===t);return e?`
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
                            ${Oe(e.createdAt)}
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
        `}const T="/Neptune-View";function _e(){const t=de(l),e=y.filter(s=>t.includes(s.id)),n=w(c.filter(s=>t.includes(s.channelId))),a=n.map(s=>`
                    <article class="video-card">

                        <a
                            href="${T}/watch/${s.id}"
                            data-link
                            class="thumbnail"
                        >

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${v(s.duration)}
                            </span>

                        </a>

                        <a
                            href="${T}/watch/${s.id}"
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
                            ${p(s.statistics.views)}
                        </div>

                    </article>
                `).join(""),i=e.map(s=>`
                    <a
                        href="/channels/${s.id}"
                        data-link
                        class="subscription-channel"
                    >
                        ${s.name}
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

            ${e.length>0?i:`
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
    `}const A="/Neptune-View";function We(){const t=Le(l),e=c.filter(a=>t.includes(a.id)),n=e.map(a=>`
                    <article class="video-card">

                        <a
                            href="${A}/watch/${a.id}"
                            data-link
                            class="thumbnail"
                        >

                            <span>
                                No Thumbnail
                            </span>

                            <span class="duration">
                                ${v(a.duration)}
                            </span>

                        </a>

                        <a
                            href="${A}/watch/${a.id}"
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
                            ${p(a.statistics.views)}
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
    `}const S="/Neptune-View";function Ye(){if(c.length===0)return`
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
                    href="${S}/watch/${e.id}"
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
                    href="${S}/watch/${e.id}"
                    data-link
                    class="thumbnail random-video-thumbnail"
                >

                    <span>
                        No Thumbnail
                    </span>

                    <span class="duration">
                        ${v(e.duration)}
                    </span>

                </a>

                <div class="random-video-information">

                    <a
                        href="${S}/watch/${e.id}"
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
                        ${p(e.statistics.views)}
                    </div>

                    <p>
                        ${e.description}
                    </p>

                </div>

            </div>

        </section>
    `}function Je(){return c}function _(t){return c.find(e=>e.id===t)}function Ge(t){const e=c.findIndex(n=>n.id===t.id);return e===-1?!1:(c[e]=t,!0)}function Ze(t){const e=c.findIndex(n=>n.id===t);return e===-1?!1:(c.splice(e,1),!0)}function ze(){const t=Je();return`
        <section class="box">

            <div class="box-title">
                My Videos
            </div>

            <div class="box-content">

                ${t.length===0?`
                            <p>
                                You haven't uploaded
                                any videos yet.
                            </p>
                        `:t.map(e=>`
                                    <article
                                        class="video-management-item"
                                        data-video-id="${e.id}"
                                    >

                                        <h2>
                                            ${b(e.title)}
                                        </h2>

                                        <p>
                                            ${b(e.description)}
                                        </p>

                                        <p>
                                            <strong>
                                                Category:
                                            </strong>
                                            ${b(e.category)}
                                        </p>

                                        <p>
                                            <strong>
                                                Tags:
                                            </strong>
                                            ${e.tags.map(n=>b(n)).join(", ")}
                                        </p>

                                        <button
                                            type="button"
                                            class="edit-video-button"
                                            data-video-id="${e.id}"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            type="button"
                                            class="delete-video-button"
                                            data-video-id="${e.id}"
                                        >
                                            Delete
                                        </button>

                                    </article>
                                `).join("")}

            </div>

        </section>
    `}function Ke(){document.querySelectorAll(".edit-video-button").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.videoId;e&&(window.history.pushState({},"",`/Neptune-View/edit-video/${e}`),window.dispatchEvent(new PopStateEvent("popstate")))})}),document.querySelectorAll(".delete-video-button").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.videoId;!e||!window.confirm("Are you sure you want to delete this video?")||!Ze(e)||window.location.reload()})})}function b(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Qe(t){const e=_(t);return e?`
        <section class="box">

            <div class="box-title">
                Edit Video
            </div>

            <div class="box-content">

                <form id="edit-video-form">

                    <input
                        type="hidden"
                        id="edit-video-id"
                        value="${h(e.id)}"
                    >

                    <p>
                        <label for="edit-video-title">
                            Title
                        </label>
                        <br>

                        <input
                            type="text"
                            id="edit-video-title"
                            value="${h(e.title)}"
                            maxlength="100"
                            required
                        >
                    </p>

                    <p>
                        <label for="edit-video-description">
                            Description
                        </label>
                        <br>

                        <textarea
                            id="edit-video-description"
                            rows="8"
                            maxlength="5000"
                            required
                        >${h(e.description)}</textarea>
                    </p>

                    <p>
                        <label for="edit-video-category">
                            Category
                        </label>
                        <br>

                        <input
                            type="text"
                            id="edit-video-category"
                            value="${h(e.category)}"
                            required
                        >
                    </p>

                    <p>
                        <label for="edit-video-tags">
                            Tags
                        </label>
                        <br>

                        <input
                            type="text"
                            id="edit-video-tags"
                            value="${h(e.tags.join(", "))}"
                        >
                    </p>

                    <p>

                        <button
                            type="submit"
                        >
                            Save Changes
                        </button>

                    </p>

                </form>

                <div
                    id="edit-video-status"
                    aria-live="polite"
                ></div>

            </div>

        </section>
    `:`
            <section class="box">

                <div class="box-title">
                    Video Not Found
                </div>

                <div class="box-content">

                    <p>
                        The video you're trying
                        to edit doesn't exist.
                    </p>

                </div>

            </section>
        `}function Xe(){const t=document.querySelector("#edit-video-form");t&&t.addEventListener("submit",e=>{e.preventDefault();const n=document.querySelector("#edit-video-id")?.value,a=document.querySelector("#edit-video-title")?.value.trim(),i=document.querySelector("#edit-video-description")?.value.trim(),s=document.querySelector("#edit-video-category")?.value.trim(),o=document.querySelector("#edit-video-tags")?.value.split(",").map(Y=>Y.trim()).filter(Boolean),d=document.querySelector("#edit-video-status");if(!n||!a||!i||!s||!o||!d)return;const r=s,g=_(n);if(!g){d.textContent="Video not found.";return}if(!Ge({...g,title:a,description:i,category:r,tags:o})){d.textContent="Unable to update video.";return}d.textContent="Video updated successfully."})}function h(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const $="/Neptune-View",et={"/":te,"/videos":se,"/channels":ue,"/categories":pe,"/tags":Be,"/subscriptions":_e,"/favorites":We,"/community":me,"/upload":P};function m(){const t=document.querySelector("#page-content");if(!t)throw new Error("Page content container not found.");const e=window.location.pathname,n=e.startsWith($)?e.substring($.length)||"/":e;if(n==="/random"){if(c.length===0){t.innerHTML=Ye(),u();return}const i=Math.floor(Math.random()*c.length),s=c[i];window.history.pushState({},"",`${$}/watch/${s.id}`),m();return}if(n==="/upload"){t.innerHTML=P(),ge(),u();return}if(n==="/search"){const s=new URLSearchParams(window.location.search).get("q")??"";t.innerHTML=we(s),ye(),u();return}if(n.startsWith("/watch/")){const i=decodeURIComponent(n.substring(7));t.innerHTML=Ue(i),qe(),Me(),u();return}if(n.startsWith("/categories/")){const i=decodeURIComponent(n.substring(12));t.innerHTML=De(i),u();return}if(n.startsWith("/channels/")&&n.endsWith("/about")){const i=decodeURIComponent(n.substring(10).replace(/\/about$/,""));t.innerHTML=je(i),u();return}if(n.startsWith("/channels/")){const i=decodeURIComponent(n.substring(10));t.innerHTML=Fe(i),He(),u();return}if(n.startsWith("/edit-video/")){const i=decodeURIComponent(n.substring(12));t.innerHTML=Qe(i),Xe(),u();return}if(n==="/my-videos"){t.innerHTML=ze(),Ke(),u();return}const a=et[n]??tt;t.innerHTML=a(),u()}function tt(){return`
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
                        href="${$}/"
                        data-link
                    >
                        Return to Neptune View™
                    </a>
                </p>

            </div>

        </section>
    `}function u(){const t=window.location.pathname;document.querySelectorAll(".main-nav a").forEach(e=>{const n=e.getAttribute("href");e.classList.toggle("active",n===t)})}window.addEventListener("neptune-subscription-changed",()=>{m()});window.addEventListener("neptune-comment-changed",()=>{m()});window.addEventListener("neptune-reaction-changed",()=>{m()});window.addEventListener("neptune-navigation",()=>{m()});const W=document.querySelector("#app");if(!W)throw new Error("Application root not found.");W.innerHTML=`
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
            <a href="/my-videos"data-link>My Videos</a>
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
`;function E(){if(!document.querySelector("#page-content"))throw new Error("Page content container not found.");if(m(),!document.querySelector("#app"))throw new Error("Application root not found.")}function C(t){window.history.pushState({},"",t),E()}document.addEventListener("click",t=>{const n=t.target.closest("a[data-link]");if(!n)return;const a=n.getAttribute("href");!a||a.startsWith("#")||(t.preventDefault(),C(a))});window.addEventListener("popstate",()=>{E()});const U=document.querySelector("#search-form");U?.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(U),n=String(e.get("q")??"").trim();if(!n){C("/search");return}C(`/search?q=${encodeURIComponent(n)}`)});function nt(){const t=document.querySelector("#header-search-form"),e=document.querySelector("#header-search-input");!t||!e||t.addEventListener("submit",n=>{n.preventDefault();const a=e.value.trim();a&&(window.history.pushState({},"",`/search?q=${encodeURIComponent(a)}`),window.dispatchEvent(new Event("neptune-navigation")))})}E();nt();
