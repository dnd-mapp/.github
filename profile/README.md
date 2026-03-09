# ⚔️ D&D Mapp

Welcome to the official home of **D&D Mapp**, an open-source, vertically integrated web platform designed to unify the fragmented 5th Edition Dungeons & Dragons experience.

## 🗺️ About the Project

D&D Mapp is built by engineers and players who believe that digital tools should do more than just act as "digital paper." Our mission is to eliminate the **mechanical friction** of TTRPGs by providing a high-automation ecosystem where the platform handles the math, rules, and status tracking, allowing players and Dungeon Masters to focus entirely on the story.

By natively linking character sheets, world lore, and tactical combat, we provide a seamless "one-stop-shop" engine that brings professional-grade automation to any browser.

## 🚀 Key Features

- **Automated Mechanical Resolution:** Unlike traditional VTTs, D&D Mapp acts as a game engine. Spells, damage, and status effects are applied automatically to targets in real-time.
- **Interactive VTT:** High-performance tactical combat featuring dynamic lighting, fog of war, and integrated dice rolling.
- **Unified Campaign Suite:** A single ecosystem for character lifecycle management, campaign notes, and a searchable 5e compendium.
- **Curated World Building:** Tools for creating and sharing world maps and lore, with granular DM control over available sourcebooks and resources.
- **Secure Identity:** A bespoke authentication system implementing the **Authorization Code Flow with PKCE** and **(A)RBAC** for secure, tiered access.

## 🛠️ Our Tech Stack

We leverage a modern, type-safe stack to ensure a smooth, maintainable experience:

- **Frontend:** Angular with plain SCSS (no UI frameworks for maximum flexibility).
- **State Management:** Reactive architecture using Angular Services and Signals.
- **Real-time:** WebSockets for low-latency synchronization of game states.
- **Backend:** NestJS (TypeScript) powered by Fastify for high-performance I/O.
- **Security:** Custom Auth implementation with PKCE and (A)RBAC.
- **Database:** Prisma ORM for type-safe data modeling.
- **Infrastructure:** Dockerized deployments and GitHub Actions CI/CD.

## 🤝 Contributing

We love contributions! Whether you are fixing a bug, suggesting a feature, or improving documentation:

1. **Pick an issue:** Check the "Help Wanted" or "Good First Issue" labels in our pinned repositories.
2. **Fork & Branch:** `git checkout -b feat/your-exciting-feature`.
3. **Submit a PR:** Provide a clear description of your changes.

> [!TIP]
> Each repository contains a `CONTRIBUTING.md` file with specific local environment setup and coding standards.

## 🛡️ License

Most of our projects are licensed under the **MIT License**. We believe in keeping the tools for the community free and open.

---

<p style="text-align: center">
    Built with ❤️ by the D&D Mapp Team • <i>"Roll for initiative!"</i>
</p>
