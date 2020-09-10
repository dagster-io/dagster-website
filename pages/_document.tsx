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
  // Function will be called below to inject
  // script contents onto page
  setGoogleTags() {
    return {
      __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-138684758-4');
        `,
    }
  }

  render() {
    return (
      <Html lang="en">
        <InlineStylesHead>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </InlineStylesHead>
        <Head>
          {/* We only want to add the scripts if in production */}
          {__NODE_ENV__ === 'production' && (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138684758-4" />
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
