import * as React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'

const Header = () => {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false)
  const router = useRouter()

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img
                className="block h-6 w-auto"
                src="https://docs.dagster.io/assets/logos/small.png"
                alt="Dagster logo"
              />
              <div
                className="text-lg font-bold tracking-widest uppercase hidden md:block"
                style={{ marginLeft: '.75rem' }}
              >
                Dagster
              </div>
            </a>
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
                href="https://docs.dagster.io"
                className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Docs
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className={cx('flex flex-row nowrap justify-around w-40')}>
              <a href="https://github.com/dagster-io/dagster">
                <img className="h-6" src="/images/logos/github-icon.svg" />
              </a>
              <a href="https://dagster-slackin.herokuapp.com/">
                <img className="h-6" src="/images/logos/slack-icon.svg" />
              </a>
              <a href="https://stackoverflow.com/questions/tagged/dagster">
                <img className="h-6" src="/images/logos/stack-overflow-icon.svg" />
              </a>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => {
                setIsMobileHeaderOpen(!isMobileHeaderOpen)
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/*
  Mobile menu, toggle classes based on menu state.

  Open: "block", closed: "hidden"
*/}
      <div className={`${isMobileHeaderOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3">
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
          >
            Home
          </a>
          <a
            href="/blog"
            className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
          >
            Blog
          </a>
          <a
            href="https://docs.dagster.io"
            className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
          >
            Docs
          </a>
          <a
            href="https://github.com/dagster-io/dagster"
            className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
