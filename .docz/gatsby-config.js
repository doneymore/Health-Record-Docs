const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Heath Record Documentaion',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\cazunna\\Desktop\\meand you\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Heath Record Documentaion',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\cazunna\\Desktop\\meand you',
          templates:
            'C:\\Users\\cazunna\\Desktop\\meand you\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\cazunna\\Desktop\\meand you\\.docz',
          cache: 'C:\\Users\\cazunna\\Desktop\\meand you\\.docz\\.cache',
          app: 'C:\\Users\\cazunna\\Desktop\\meand you\\.docz\\app',
          appPackageJson:
            'C:\\Users\\cazunna\\Desktop\\meand you\\package.json',
          appTsConfig: 'C:\\Users\\cazunna\\Desktop\\meand you\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\cazunna\\Desktop\\meand you\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\cazunna\\Desktop\\meand you\\gatsby-browser.js',
          gatsbyNode: 'C:\\Users\\cazunna\\Desktop\\meand you\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\cazunna\\Desktop\\meand you\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\cazunna\\Desktop\\meand you\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\cazunna\\Desktop\\meand you\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\cazunna\\Desktop\\meand you\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\cazunna\\Desktop\\meand you\\.docz\\app\\index.html',
          db: 'C:\\Users\\cazunna\\Desktop\\meand you\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
