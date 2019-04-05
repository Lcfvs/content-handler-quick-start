# content-handler-quick-start

Create your own [content-handler](https://github.com/Lcfvs/content-handler) based project to build your app/site in seconds!

## How to install it?

* Be sure to have **node.js** installed on your machine or install it: [node.js](https://nodejs.org/en/download/)
* Install this package **into your localhost directory**

  *On UNIX system*
  ```shell
  $ project-dir=/var/www/html/project-name
  $ git clone https://github.com/Lcfvs/content-handler-quick-start.git $project-dir
  $ cd $project-dir
  $ npm i -D
  $ npm run build
  ```
  
  *On Windows system*
  ```cmd
  project-dir=C:\wamp\www\project-name
  git clone https://github.com/Lcfvs/content-handler-quick-start.git %project-dir%
  cd %project-dir%
  npm i -D
  npm run build
  ```
* Open your browser on your project index [http://localhost/project-name](http://localhost/project-name)
* Enjoy!

## Make your first middleware

Create a `./assets/js/dev/test.js`

```js
import ContentHandler from 'content-handler'

function changeColor () {
  this.querySelector('h1').style.backgroundColor = '#ccc'
}

// create a listener to be applied on each element matching the `main.test` selector
ContentHandler
 .getByDocument()
 .addEventListener('main.test', ({element}) => {
   element.addEventListener('click', changeColor)
 })
```

## Register your middleware

Import your listener into your `./assets/js/dev/index.js`

```js
import ContentHandler from 'content-handler'

// Import your own listeners here
import './test.js'

// Let the following lines at the end of this file
import './listen-same-origin-anchors.js'
import './listen-same-origin-forms.js'
import './mono-main-strategy.js'
```

## Build your app

**Into your localhost directory**, each time your JS code changes
```cmd
$ npm run build
```

## Create the content

Create a file into your project, for example `./pages/test.html`

```html
<main class="test">
  <h1>Test title</h1>
  <p>This is the test content</p>
</main>
```

## Link it into your page

```html
<a href="./pages/test.html">Load the test content</a>
```

