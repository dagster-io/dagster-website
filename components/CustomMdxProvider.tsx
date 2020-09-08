import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'

const mdxComponents: MDXProviderComponentsProp = {
  pre: ({ className, ...props }) => (
    <pre className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`} {...props} />
  ),
  'pre.code': ({ className, ...props }: { className: string; props: any }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
}

export function CustomMdxProvider(props: { children: React.ReactNode }) {
  const { children } = props

  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>
}
