import * as React from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'

const Footer = () => {
  const router = useRouter()

  return (
    <footer style={{height: 357, paddingTop: 20, borderTop: '0px solid #D6E3ED', background: 'url(images/oceandagster.png), #f5f9fc', backgroundSize: 'cover', backgroundPosition: '90% 0%'}}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://docs.dagster.io/assets/logos/small.png"
                alt="Dagster logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://docs.dagster.io/assets/logos/small.png"
                alt="Dagster logo"
              />
              <div className="font-bold text-xl ml-3">Dagster</div>
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              <a
                href="/"
                className={cx(
                  'ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out',
                  {
                    'border-indigo-500': !router.pathname.startsWith('/blog'),
                  }
                )}
              >
                Home
              </a>
              <a
                href="/blog"
                className={cx(
                  'ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out',
                  {
                    'border-indigo-500': router.pathname.startsWith('/blog'),
                  }
                )}
              >
                Blog
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Docs
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
