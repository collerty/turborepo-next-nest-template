# **Turborepo + Nixos + Bun + Nestjs + Prisma + Nextjs + Shadcn + Shared Zod Types**

Imagine writing frontend and backend that share the same types. Write the type once - use it everywhere else in your application. 
That is the main goal of this repository.

## **Monorepo Structure**
```
/my-monorepo
    /apps
        /api (NestJS API)
        /web (Next.js app)
    /packages
        /ui (Shared UI components based on Shadcn)
        TODO: /utils (Shared utility functions and types)
turbo.json
package.json
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
bunx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```
## Why Create This?

I decided to create this project to **reinvent the wheel** and build this template from scratch using the tools and frameworks I prefer.
While there are many great examples (such as turborepo-shadcn-ui or superrepo), I wanted to write my shitty code to have a bit of understanding of the architecture, tools, and code involved. 
This approach ensures that I can fix the code in case any issue appears.

## Other things..
### flake.nix for prisma
I am nixos user and for prisma to work, I need prisma engine to be installed. If you have nixos as well, you can write `direnv allow` -> `nix develop`, 
and then use **prisma** directly like `prisma migrate dev --name init` (without `npx` prefix)