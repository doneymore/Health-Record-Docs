// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---docs-index-mdx": () => import("./../../../../docs/index.mdx" /* webpackChunkName: "component---docs-index-mdx" */),
  "component---src-components-introduction-mdx": () => import("./../../../../src/components/introduction.mdx" /* webpackChunkName: "component---src-components-introduction-mdx" */),
  "component---src-components-role-mdx": () => import("./../../../../src/components/role.mdx" /* webpackChunkName: "component---src-components-role-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

