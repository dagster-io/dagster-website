import { getBlogPostFrontMatterList } from 'components/MdxMetadata'
import { NextPageContext } from 'next'

const toUrl = (host: string, route: string) => `<url><loc>http://${host}${route}</loc></url>`

const createSitemap = (host: string, routes: string[]) =>
  `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map((route) => toUrl(host, route)).join('')}
    </urlset>`

const Sitemap = () => {}

Sitemap.getInitialProps = ({ res, req }: NextPageContext) => {
  const routes = ['/']
  getBlogPostFrontMatterList().map(({ href }) => routes.push(href))

  const host = req && req.headers.host ? req.headers.host : 'dagster.io'
  const sitemap = createSitemap(host, routes)

  res?.setHeader('Content-Type', 'text/xml')
  res?.write(sitemap)
  res?.end()
  return res
}

export default Sitemap
