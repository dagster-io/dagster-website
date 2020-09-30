const rehypePrism = require('@mapbox/rehype-prism')
const visit = require('unist-util-visit')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const path = require('path')
const nextMdxEnhanced = require('next-mdx-enhanced')

const tokenClassNames = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic',
}

const withMdxEnhanced = nextMdxEnhanced({
  defaultLayout: true,
  fileExtensions: ['mdx'],
  layoutPath: 'components/layouts',
  rehypePlugins: [
    rehypePrism,
    () => {
      return (tree) => {
        visit(tree, 'element', (node, index, parent) => {
          let [token, type] = node.properties.className || []
          if (token === 'token') {
            node.properties.className = [tokenClassNames[type]]
          }
        })
      }
    },
  ],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      const slug = path.basename(frontMatter.__resourcePath, '.mdx')
      const href = '/' + frontMatter.__resourcePath.replace(/\.mdx$/, '').replace(/index$/, '')

      return {
        slug,
        href,
      }
    },
  },
  usesSrc: false,
})

module.exports = withBundleAnalyzer(
  withMdxEnhanced({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

    webpack: (config, { dev, webpack }) => {
      config.plugins.push(
        new webpack.DefinePlugin({
          __DEV__: dev,
          __GA_DISABLED__: process.env.GA_DISABLED === 'true',
        })
      )

      return config
    },
  })
)
