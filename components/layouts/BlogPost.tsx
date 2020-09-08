import type { BlogPostFrontMatter } from 'components/MdxMetadata'
import DynamicHead from 'next/head'
import * as React from 'react'

export default function BlogPostLayout({
  children,
  frontMatter,
}: {
  children: React.ReactNode
  frontMatter: BlogPostFrontMatter
}) {
  return (
    <>
      <article>
        <DynamicHead>
          {/* TODO meta tags */}
          <title>{frontMatter?.title} | Dagster </title>
          {/* tell web crawlers to not index the page if it is not published */}
          {frontMatter.status !== 'published' && <meta content="noindex, nofollow" name="robots" />}
        </DynamicHead>
        <div className="prose max-w-none pt-10 pb-8">{children}</div>
      </article>
    </>
  )
}
