import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import NextLink from 'next/link'
import { metadata as resourceMetadataList } from './metadata.json'
import cx from 'classnames'

enum ResourceType {
  COMMUNITY_MEETING = 'Community Meeting',
  TECH_TALK = 'Tech Talk',
  PODCAST = 'Podcast',
}

type ResourceMetadata = {
  title: string
  date: string
  excerpt: string
  type: ResourceType
  url?: string
  coverImage?: string
}

function refine(data: unknown): Array<ResourceMetadata> {
  return data as any
}

function getResourceMetadataList(): ResourceMetadata[] {
  return refine(resourceMetadataList).sort((resource1, resource2) =>
    resource1.date > resource2.date ? -1 : 1
  ) // sort by date desc
}

export const getStaticProps: GetStaticProps<{
  resourceList: ResourceMetadata[]
}> = async () => {
  const resourceList = getResourceMetadataList()

  return {
    props: {
      resourceList,
    },
  }
}

const CommunitySection: React.FunctionComponent<{
  title: string
  subtitle?: string
  content: any
}> = ({ title, subtitle, content }) => {
  return (
    <div className="mt-8">
      <div className="block mb-8">
        <div className="font-bold text-2xl">{title}</div>
        {subtitle && <div className="text-base text-gray-500">{subtitle}</div>}
      </div>
      <div className="block grid md:grid-cols-3 gap-8 grid-cols-1">{content}</div>
    </div>
  )
}
const ResourceCard: React.FunctionComponent<any> = ({ resource }) => {
  const { title, date, excerpt, url, coverImage, type } = resource

  return (
    <div
      key={title}
      className="border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-2 shadow-md hover:shadow-lg mb-4"
    >
      <NextLink href={url}>
        <a className="hover:text-blue-600" aria-label={`Read "${title}"`}>
          <div>{coverImage && <img src={coverImage} />}</div>
          <div className="py-4 px-8">
            <h3 className="text-xl mb-4 font-bold tracking-tight">
              <span className="hover:text-blue-600">{title}</span>
            </h3>
            <div className="my-4">
              <span
                className={cx('w-auto text-center font-bold rounded-lg py-2 px-4 text-sm', {
                  'bg-blue-200 text-blue-700': type == ResourceType.COMMUNITY_MEETING,
                  'bg-green-200 text-green-700': type == ResourceType.TECH_TALK,
                  'bg-purple-200 text-purple-700': type == ResourceType.PODCAST,
                })}
              >
                {type}
              </span>
            </div>
            <div className="text-sm max-w-none text-gray-500 mb-4">{excerpt}</div>
            <dl>
              <dd className="text-xs text-gray-700">{date}</dd>
            </dl>
          </div>
        </a>
      </NextLink>
    </div>
  )
}

export default function CommunityPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { resourceList } = props

  return (
    <div className="my-8">
      <div className="block pb-4 border-b border-gray-200">
        <div className="font-bold text-4xl">Dagster Community</div>
        <div className="text-lg text-gray-500">
          <a
            href="https://dagster-slackin.herokuapp.com/"
            className="font-bold text-blue-600 hover:text-blue-800"
          >
            Join us on Slack
          </a>{' '}
          with over 1,800 members across 400 organizations.
        </div>
      </div>

      <CommunitySection
        title="Upcoming Events"
        subtitle="Check out our upcoming events, including Dagster Community Meetings hosted by the Dagster core team as well as other external talks and podcasts."
        content={resourceList
          .filter((resource) => {
            const resourceDate = new Date(resource.date)
            const today = new Date()
            return resourceDate > today
          })
          .map((resource: ResourceMetadata) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
      />

      <div className="my-8 md:col-span-3 flex flex-wrap md:flex-nowrap items-center bg-gray-800 shadow-lg rounded-2xl py-6 md:py-4 px-6 md:pr-5 space-y-4 md:space-y-0 md:space-x-8">
        <p className="flex-auto text-white text-lg">
          If your organization is interested in sharing how you use dagster, please reach out to us!
        </p>
        <a
          href="mailto:community@elementl.com"
          // TODO: slack or email?
          className="flex-none bg-white hover:bg-gray-100 transition-colors duration-200 text-black font-bold rounded-lg py-2 px-4 no-underline"
        >
          Contact us
        </a>
      </div>

      <div className="text-gray-700">
        Check out{' '}
        <NextLink href="/resources/user-stories">
          <a className="font-bold hover:text-blue-600">User Stories</a>
        </NextLink>{' '}
        to explore how other companies are using Dagster.
      </div>
      <div className="flex my-16 justify-center">
        <hr className="border-gray-300 w-2/3" />
      </div>
      <CommunitySection
        title="Past Events"
        subtitle="If you missed one of our events, you can watch a recording below or view related event materials."
        content={resourceList
          // .filter((resource) => resource.type === ResourceType.COMMUNITY_MEETING)
          .map((resource: ResourceMetadata) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
      />
    </div>
  )
}
