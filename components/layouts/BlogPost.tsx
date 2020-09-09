import type { BlogPostFrontMatter } from 'components/MdxMetadata'
import { AuthorPanel } from 'components/Author'
import DynamicHead from 'next/head'
import * as React from 'react'

export default function BlogPostLayout({
  children,
  frontMatter,
}: {
  children: React.ReactNode
  frontMatter: BlogPostFrontMatter
}) {
  const title = `${frontMatter.title} | Dagster Blog`
  return (
    <article>
      <DynamicHead>
        <title key="real-title">{title}</title>
        {/* embedly - https://embed.ly/code */}
        <script async src="https://cdn.embedly.com/widgets/platform.js" type="text/javascript" />
        {frontMatter.status === 'published' ? (
          <>
            <meta key="title" name="title" content={title} />
            <meta key="og:title" property="og:title" content={title} />
            <meta key="twitter:title" property="twitter:title" content={title} />

            <meta key="description" name="description" content={frontMatter.excerpt} />
            <meta key="og:description" property="og:description" content={frontMatter.excerpt} />
            <meta
              key="twitter:description"
              property="twitter:description"
              content={frontMatter.excerpt}
            />
          </>
        ) : (
          // tell web crawlers to not index the page if it is not published
          <meta content="noindex, nofollow" name="robots" />
        )}
      </DynamicHead>

      <div className="prose max-w-none pt-10 pb-8">
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
