import React, { ReactNode } from 'react'
import Head from 'next/head'

import Header from '../Header'

type Props = {
  children?: ReactNode
  title?: string
  description?: string;
}

export const DEFAULT_SHARE_IMAGE = '/images/dagster-og-share.png'
export const DEFAULT_SHARE_DESCRIPTION = 'Dagster is a data orchestrator for machine learning, analytics, and ETL'

const Layout = ({ children, title = 'Dagster', description = DEFAULT_SHARE_DESCRIPTION }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta key="title" name="title" content={title} />
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta property="twitter:image" content={DEFAULT_SHARE_IMAGE} />

      <meta name="og:type" content="website" />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta property="og:image" content={DEFAULT_SHARE_IMAGE} />
    </Head>

    <Header />
    <div 
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      style={{ paddingTop: '64px' }}
    >
      <div className="flex justify-center">{children}</div>
    </div>
  </div>
)

export default Layout
