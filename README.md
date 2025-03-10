# **Monorepo template with Next.js, NestJS, Prisma, Shadcn, and Bun**

This project is a **Turborepo** monorepo template with the stack I personally prefer to use.
## **Why This Stack?**

### **Next.js**:
- Provides the best-in-class SSR/SSG for building React apps.
- I like it.

### **Shadcn UI**:
- A collection of customizable, ready-made UI components built on **Tailwind CSS**.
- I like it.

### **NestJS**:
- Enforces a modular, maintainable architecture with **TypeScript**.
- Forces me to learn more about **OOP**...

**Note:** while Nextjs is itself a fullstack framework, creating a separate backend better suits me.
### **Prisma**:
- A modern **ORM** with a focus on **TypeScript** and **developer experience**.


### **Bun**:
- Optimized for package management, which reduces installation times in the monorepo setup. 
- Has a cute name.
### **Turborepo**:
- Helps manage multiple apps and libraries within a single repo.
- Speeds up builds with caching and parallelization.
- Allows easy sharing of code (like UI components and utilities) across different applications.
- Scalable.
---

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
pnpm dlx shadcn@latest add button -c apps/web
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