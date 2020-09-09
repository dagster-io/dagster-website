import { authors } from './editors.json'

const userDataList: AuthorData[] = authors

type AuthorData = {
  id: string
  fullName: string
  profileImage?: string
  url?: string
}

export const AuthorItem: React.FunctionComponent<any> = ({ authorId }) => {
  const data = userDataList.find((item) => item.id === authorId)
  if (!data) {
    throw new Error(`Author @${authorId} does not exist in the system.`)
  }
  return (
    <>
      <img className="w-8 h-8 rounded-full mr-4 my-0" src={data.profileImage} alt={data.fullName} />
      <dl className="text-sm font-medium leading-5 whitespace-no-wrap mr-4">
        <dt className="sr-only">Name</dt>
        <dd className="text-gray-900">{data.fullName}</dd>
        <dt className="sr-only">Handle</dt>
        <dd>
          <a href={data.url} className="text-blue-500 hover:text-blue-600">
            @{data.id}
          </a>
        </dd>
      </dl>
    </>
  )
}

export const AuthorPanel: React.FunctionComponent<any> = ({ authors }) => {
  if (!authors) {
    return null
  }

  return (
    <div className="flex items-center">
      {authors.map((authorId: string) => {
        return <AuthorItem key={authorId} authorId={authorId} />
      })}
    </div>
  )
}
