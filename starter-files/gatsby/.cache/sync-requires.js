const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/estebanpalomeque/Documents/Projects/master-gatsby/starter-files/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/estebanpalomeque/Documents/Projects/master-gatsby/starter-files/gatsby/src/pages/index.js"))),
  "component---src-pages-pizza-js": hot(preferDefault(require("/Users/estebanpalomeque/Documents/Projects/master-gatsby/starter-files/gatsby/src/pages/pizza.js")))
}

