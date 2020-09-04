import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import Head from 'next/head'

const mdxComponents: MDXProviderComponentsProp = {
  pre: ({ className, ...props }) => (
    <pre className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`} {...props} />
  ),
  'pre.code': ({ className, ...props }: { className: string; props: any }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
}

interface PageProps {
  meta: {
    title: string
  }
  children: any
}

export default function Page({ meta, children }: PageProps) {
  return (
    <article>
      <Head>
        <title>{meta.title} – Dagster Docs</title>
      </Head>
      <div className="prose max-w-none pt-10 pb-8">
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </div>
    </article>
  )
}
