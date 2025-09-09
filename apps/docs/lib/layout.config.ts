import type { HomeLayoutProps } from "fumadocs-ui/layouts/home";

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: "Turborepo App",
    enableSearch: true,
    url: "/",
  },
  githubUrl: "https:/github.com/collerty",
  links: [
    { text: "Main Page", url: "https://turborepo-next-nest-template-web.vercel.app/" },
    // { text: "Option 2", url: "" },
    // { text: "Option 3", url: "" },
    // { text: "Option 4", url: "" },
  ],
};