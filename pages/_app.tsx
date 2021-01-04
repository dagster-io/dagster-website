import 'css/tailwind.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import HomeLayout from 'components/layouts/HomeLayout'
import Layout from 'components/layouts/Layout'
import { useRouter } from 'next/dist/client/router'
import { CustomMdxProvider } from 'components/CustomMdxProvider'
import Footer from 'components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const isHomepage = router.pathname === '/'
  const isBlog = router.pathname.includes('/blog')
  const PageLayout = isHomepage ? HomeLayout : Layout

  return (
    <div className="antialiased">
      <Head>
        <meta name="title" content="Dagster" />
        <meta
          name="description"
          content="A data orchestrator for machine learning, analytics, and ETL"
        />
        {/* Open Graph / Facebook */}
        {!isBlog && (
          <>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://dagster.io/" />
            <meta property="og:title" content="Dagster" />
            <meta
              property="og:description"
              content="A data orchestrator for machine learning, analytics, and ETL"
            />
            <meta property="og:image" content="https://dagster.io/images/dagster-og-share.png" />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://dagster.io/" />
            <meta property="twitter:title" content="Dagster" />
            <meta
              property="twitter:description"
              content="A data orchestrator for machine learning, analytics, and ETL"
            />
            <meta
              property="twitter:image"
              content="https://dagster.io/images/dagster-og-share.png"
            />
          </>
        )}
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
