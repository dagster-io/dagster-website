import { getBlogPostFrontMatterList, BlogPostFrontMatter } from 'components/MdxMetadata'
import { GridCard } from 'components/Feed'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

// blog post tags
// const TAGS = [
//   "dagster-release",
//   "dagster-integration",
//   "community",
//   "user-story",
// ]

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

export default function UserStoriesPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { blogPostFrontMatterList } = props

  return (
    <div className="my-8">
      <div className="block pb-4 border-b border-gray-200">
        <div className="font-bold text-4xl">User Stories</div>
        <div className="text-lg text-gray-500">
          Explore stories of how other companies are using Dagster.
        </div>
      </div>
      <div className="block mt-8 grid md:grid-cols-3 gap-8 grid-cols-1">
        {blogPostFrontMatterList
          .filter((post: BlogPostFrontMatter) => post.tags?.includes('user-story'))
          .map((post: BlogPostFrontMatter) => (
            <GridCard key={post.slug} post={post} />
          ))}
      </div>
    </div>
  )
}
