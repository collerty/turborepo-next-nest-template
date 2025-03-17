# **Turborepo + Nixos + Bun + Nestjs + Prisma + Nextjs + Shadcn + Shared Zod Types**

- Write schema.prisma once - use generated [Zod Schemas](./packages/zod-schemas/README.md) everywhere else in your application.
- Use Shadcn components from the /packages/ui directory for a consistent UI.
## **Monorepo Structure**
```
/turborepo-next-nest-template
    /apps
        /api (NestJS API)
        /web (Next.js app)
    /packages
        /ui (Shared UI components based on Shadcn)
        /typescript-config (Shared TS configs)
        /eslint-config (Shared base eslint.config.mjs)
        /zod-schemas (Shared Zod schemas)
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
## Zod schemas
`bun run build` and/or `bun run dev` automatically run `prisma generate` which re-generates and rebuilds `packages/zod-schemas/` automatically.

By default, only full models are generated. For more configuration, see [schema.prisma](./apps/api/prisma/schema.prisma).

## **flake.nix for Prisma**

If you're using NixOS and need the Prisma engine installed, you can use the following commands:

1. `direnv allow`
2. `nix develop`

Then you can run Prisma commands directly, such as:

```bash
prisma migrate dev --name init
```
> **Note**  
>You can skip using the `npx` prefix with this setup.