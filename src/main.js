"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles/main.css");
var app = document.querySelector("#app");
if (!app) {
    throw new Error("Application root not found.");
}
app.innerHTML = "\n    <header>\n        <h1>Neptune View\u2122</h1>\n        <p>Videos. People. You.</p>\n    </header>\n\n    <main>\n        <section>\n            <h2>Welcome to Neptune View\u2122</h2>\n\n            <p>\n                A video-sharing website without an algorithm.\n            </p>\n\n            <p>\n                Browse videos, discover creators, and decide\n                what you want to watch.\n            </p>\n        </section>\n\n        <section>\n            <h2>Latest Videos</h2>\n\n            <p>No videos have been uploaded yet.</p>\n        </section>\n    </main>\n\n    <footer>\n        <p>\n            Neptune View\u2122 is a Neptune Corporation\u2122 project.\n        </p>\n    </footer>\n";
