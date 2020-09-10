import 'css/tailwind.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import HomeLayout from 'components/layouts/HomeLayout'
import Layout from 'components/layouts/Layout'
import { useRouter } from 'next/dist/client/router'
import { CustomMdxProvider } from 'components/CustomMdxProvider'
import Footer from 'components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const isHomepage = router.pathname === '/'
  const PageLayout = isHomepage ? HomeLayout : Layout

  return (
    <div className="antialiased">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Ropa+Sans&display=swap"
          rel="stylesheet"
        />
        {/*

        TODO: Add all these

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

        */}
      </Head>
      <main>
        <PageLayout>
          <CustomMdxProvider>
            <Component {...pageProps} />
          </CustomMdxProvider>
        </PageLayout>
      </main>
      <Footer />
    </div>
  )
}
