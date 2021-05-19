import type { BlogPostFrontMatter } from 'components/MdxMetadata'
import { AuthorPanel } from 'components/Author'
import DynamicHead from 'next/head'
import * as React from 'react'
import { DEFAULT_SHARE_IMAGE } from './Layout'

export default function BlogPostLayout({
  children,
  frontMatter,
}: {
  children: React.ReactNode
  frontMatter: BlogPostFrontMatter
}) {
  const title = `${frontMatter.title} | Dagster Blog`
  const coverImage = frontMatter.coverImage ? frontMatter.coverImage : DEFAULT_SHARE_IMAGE
  return (
    <article className="mx-auto max-w-full">
      <DynamicHead>
        <title key="real-title">{title}</title>
        {/* embedly - https://embed.ly/code */}
        <script async src="https://cdn.embedly.com/widgets/platform.js" type="text/javascript" />
        {frontMatter.status === 'published' ? (
          <>
            {/* Search Engine */}
            <meta name="description" content={frontMatter.excerpt} />
            <meta key="title" name="title" content={title} />
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta
              key="twitter:description"
              property="twitter:description"
              content={frontMatter.excerpt}
            />
            <meta property="twitter:image" content={'https://dagster.io' + coverImage} />

            {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
            <meta name="og:type" content="website" />
            <meta key="og:title" property="og:title" content={title} />
            <meta key="og:description" property="og:description" content={frontMatter.excerpt} />
            <meta property="og:image" content={'https://dagster.io' + coverImage} />
          </>
        ) : (
          // tell web crawlers to not index the page if it is not published
          <meta content="noindex, nofollow" name="robots" />
        )}
      </DynamicHead>

      <div className="prose prose-md pt-10 pb-8">
        <h1 style={{ marginBottom: 0 }}>{frontMatter.title}</h1>
        <p className="text-sm w-full" style={{ marginBottom: 0 }}>
          Published on {frontMatter.date}
        </p>
        <AuthorPanel authors={frontMatter.authors} />
        <hr style={{ margin: '1em 0 2em 0' }} />
        {children}
      </div>
    </article>
  )
}
