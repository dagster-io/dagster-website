import { getBlogPostFrontMatterList, BlogPostFrontMatter } from 'components/MdxMetadata'
import { FeedCard } from 'components/Feed'
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
      {blogPostFrontMatterList.map((post: BlogPostFrontMatter) => (
        <FeedCard key={post.slug} post={post} />
      ))}
    </ul>
  )

  return <>{content}</>
}
