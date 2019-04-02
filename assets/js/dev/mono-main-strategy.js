import ContentHandler from 'content-handler/content-handler.js'

ContentHandler
  .getByDocument()
  .addEventListener('body:first-child main', ({element}) => {
    const main = element.ownerDocument.querySelector('main')

    main.parentNode.replaceChild(element, main)
  })
