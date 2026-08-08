import type { User } from "./User";

export const users: User[] = [
    {
        id: "neptune-corporation",

        username: "neptune",

        displayName: "Neptune Corporation™",

        avatarUrl: "/images/avatars/neptune.png",

        joinedAt: "2026-08-01T00:00:00Z",

        bio:
            "Official Neptune Corporation™ account."
    },

    {
        id: "example-user",

        username: "example",

        displayName: "Example User",

        avatarUrl: "/images/avatars/example.png",

        joinedAt: "2026-08-05T00:00:00Z",

        bio:
            "Just another person on Neptune View™."
    }
];

export function getUserById(
    id: string
): User | undefined {
    return users.find(
        (user) => user.id === id
    );
}