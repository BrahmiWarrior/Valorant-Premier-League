const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/home.vue") }],
  },
  {
    path: "/playersinformation",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/players-information.vue") },
    ],
  },
  {
    path: "/teams",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/teams.vue") }],
  },
  {
    path: "/points",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/points.vue") }],
  },
  {
    path: "/fixtures",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/fixtures.vue") }],
  },
  {
    path: "/joinus",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/joinus.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
