import { DOMAIN_TITLE } from "@/.env";
import { components } from "./components";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | home`,
    },
  },
  {
    path: "/Intro",
    name: "Getting Started",
    component: () => import("@/views/Intro/Intro.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | Getting Started`,
    },
  },
  {
    path: "/components",
    name: "components",
    component: () => import("@/Layout/ComponentLayout.vue"),
    children: components,
  },
];
