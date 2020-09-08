// import { getAllPosts } from 'components/foo'
import { getBlogPostFrontMatterList, BlogPostFrontMatter } from 'components/MdxMetadata'
import NextLink from 'next/link'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps<{
  blogPostFrontMatterList: BlogPostFrontMatter[]
}> = async () => {
  const blogPostFrontMatterList = getBlogPostFrontMatterList()

  return {
    props: {
      blogPostFrontMatterList,
    },
  }
}

export default function BlogFeedPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { blogPostFrontMatterList } = props
  const content = (
    <ul className="divide-y divide-gray-200">
      {blogPostFrontMatterList.map((post: any) => {
        const { slug, title, excerpt, coverImage, date } = post

        return (
          <div key={slug} className="blogpost py-12 list-none">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-6 font-medium text-gray-500">{date}</dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <h2 className="text-2xl leading-4 mb-4 font-bold tracking-tight">
                    <NextLink href={post.href}>
                      <a className="hover:text-blue-800">{post.title}</a>
                    </NextLink>
                  </h2>
                  {coverImage && <img src={coverImage} />}
                  <div className="prose max-w-none text-gray-500">{excerpt}</div>
                </div>
                <div className="text-base leading-6 font-medium">
                  <NextLink href={post.href}>
                    <a className="hover:text-blue-800" aria-label={`Read "${title}"`}>
                      Read more &rarr;
                    </a>
                  </NextLink>
                </div>
              </div>
            </article>
          </div>
        )
      })}
    </ul>
  )

  return <>{content}</>
}
