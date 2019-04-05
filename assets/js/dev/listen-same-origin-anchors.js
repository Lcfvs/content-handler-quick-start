import ContentHandler from 'content-handler/content-handler.js'
import anchor from 'content-handler/controllers/fetcher/anchor.js'
import cache from 'content-handler/controllers/fetcher/init/cache.js'
import headers from 'content-handler/controllers/fetcher/init/headers.js'
import credentials from 'content-handler/controllers/fetcher/init/credentials.js'
import mode from 'content-handler/controllers/fetcher/init/mode.js'
import redirect from 'content-handler/controllers/fetcher/init/redirect.js'
import referrer from 'content-handler/controllers/fetcher/init/referrer.js'

ContentHandler
  .getByDocument()
  .addEventListener(anchor.selector, anchor.listen([
    cache.default,
    headers.xhr,
    credentials.sameOrigin,
    mode.sameOrigin,
    redirect.follow,
    referrer.client
  ]))
