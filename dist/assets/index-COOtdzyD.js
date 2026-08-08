(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector("#app");if(!n)throw new Error("Application root not found.");n.innerHTML=`
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
