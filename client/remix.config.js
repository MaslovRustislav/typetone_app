/** @type {import('@remix-run/dev').AppConfig} */
export default {
  tailwind: true,
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/", "home.tsx", { index: true });
      route("templates", "templates/index.tsx");
    });
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js", 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
};
