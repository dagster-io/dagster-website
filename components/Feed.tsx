import NextLink from 'next/link'

export const FeedCard: React.FunctionComponent<any> = ({ post }) => {
  const { slug, title, excerpt, coverImage, date } = post

  return (
    <div key={slug} className="blogpost py-12 list-none">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium text-gray-500">{date}</dd>
        </dl>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <h2 className="text-2xl mb-4 font-bold tracking-tight">
              <NextLink href={post.href}>
                <a className="hover:text-blue-600">{post.title}</a>
              </NextLink>
            </h2>
            {coverImage && <img src={coverImage} />}
            <div className="prose max-w-none text-gray-500">{excerpt}</div>
          </div>
          <div className="text-base font-medium">
            <NextLink href={post.href}>
              <a className="hover:text-blue-600" aria-label={`Read "${title}"`}>
                Read more &rarr;
              </a>
            </NextLink>
          </div>
        </div>
      </article>
    </div>
  )
}

function truncate(text: string, max: number) {
  return text.length > max ? text.slice(0, max).split(' ').slice(0, -1).join(' ') + ' ...' : text
}

export const GridCard: React.FunctionComponent<any> = ({ post }) => {
  const { slug, title, excerpt, coverImage, date } = post

  return (
    <div
      key={slug}
      className="transition duration-200 ease-in-out transform hover:-translate-y-2 shadow-md hover:shadow-lg mb-4"
    >
      <NextLink href={post.href}>
        <a className="hover:text-blue-600" aria-label={`Read "${title}"`}>
          <div>{coverImage && <img src={coverImage} />}</div>
          <div className="py-4 px-8">
            <h3 className="text-xl mb-4 font-bold tracking-tight">
              <NextLink href={post.href}>
                <a className="hover:text-blue-600">{post.title}</a>
              </NextLink>
            </h3>
            <div className="text-sm max-w-none text-gray-500 mb-4">{truncate(excerpt, 180)}</div>
            <dl>
              <dd className="text-xs text-gray-700">{date}</dd>
            </dl>
          </div>
        </a>
      </NextLink>
    </div>
  )
}
