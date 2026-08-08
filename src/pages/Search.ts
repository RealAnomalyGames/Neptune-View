export function Search(): string {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");

    return `
        <section class="welcome-box">
            <div class="box-title">
                Search
            </div>

            <div class="box-content">
                <h1>Search Neptune View™</h1>

                ${
                    query
                        ? `<p>Searching for: <strong>${query}</strong></p>`
                        : `<p>Enter a search term above.</p>`
                }

                <p>
                    Search functionality will be implemented
                    in a later step.
                </p>
            </div>
        </section>
    `;
}