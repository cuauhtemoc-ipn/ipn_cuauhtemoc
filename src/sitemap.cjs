const { SitemapStream, streamToPromise } = require('sitemap')
const fs = require('fs')

async function generateSitemap () {
  const sitemap = new SitemapStream({ hostname: 'https://yourwebsite.com' })
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 }
    // Add more URLs for your site
  ]
  links.forEach(link => sitemap.write(link))
  sitemap.end()

  const sitemapXml = await streamToPromise(sitemap)
  fs.writeFileSync('./public/sitemap.xml', sitemapXml.toString())
}

generateSitemap()
