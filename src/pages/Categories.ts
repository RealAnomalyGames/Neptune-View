import { categories } from "../data/categories";

export function Categories(): string {
    const categoryCards = categories
        .map(
            (category) => `
                <a
                    href="/categories/${category.id}"
                    data-link
                    class="category-card"
                >

                    <div class="category-name">
                        ${category.name}
                    </div>

                    <div class="category-description">
                        ${category.description}
                    </div>

                </a>
            `
        )
        .join("");

    return `
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
            ${categoryCards}
        </section>
    `;
}