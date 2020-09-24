import React, { ReactNode } from 'react'
import Head from 'next/head'

import Header from '../Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Dagster' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex">{children}</div>
    </div>
  </div>
)

export default Layout
