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
      <meta name="google-site-verification" content="96eDOZ6jtOSl6isEMM_Im0lJsEJtCUst7rwESkd3vnQ" />
    </Head>
    <Header />
    {children}
  </div>
)

export default Layout
