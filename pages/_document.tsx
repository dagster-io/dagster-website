import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import * as fs from 'fs'
import * as path from 'path'

class InlineStylesHead extends Head {
  getCssLinks() {
    return this.__getInlineStyles()
  }

  __getInlineStyles() {
    const { assetPrefix, buildManifest } = this.context

    if (!buildManifest.pages || Object.keys(buildManifest.pages).length === 0) return null

    const pageKeys = []
    for (const key of Object.keys(buildManifest.pages)) {
      if (buildManifest.pages[key]) {
        pageKeys.push(buildManifest.pages[key])
      }
    }
    const mergeDedupeFiles = (arr: any) => {
      return [...new Set([].concat(...arr))]
    }

    return mergeDedupeFiles(pageKeys)
      .filter((file) => /\.css$/.test(file))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(path.join(process.cwd(), '.next', file), 'utf-8'),
          }}
        />
      ))
  }
}

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <InlineStylesHead>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </InlineStylesHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
