# vue-workshop

Here you can access Vue.js workshop assets and resources.

## vue-js introduction 

A nice web based presentation about vue js : https://robinck.github.io/vue-presentation/#/.

## vue-cli
To use vue-cli follow instructions : https://cli.vuejs.org/guide/installation.html

## axios

Promise based HTTP client for the browser and node.js

Use can read more about it in : https://github.com/axios/axios

### install

```bash
npm install axios --save
```


### Setup 

```js
import Vue from 'vue'
const axios = require('axios');
window.axios = axios;
```

### Usage
```js
window
    .axios
    .get('api.reyhoon.com')
    .then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.error(error);
    })
```

## vue-router

vue-router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Features include:

read more : https://router.vuejs.org/

### install via vue-cli 3

```bash
vue add vue-router
```

### Usage 
Now go to `/src/router.js` and make your routes.


## useful links
* [21 Top Vue.js UI Frameworks and Libraries For Your App](
https://hackernoon.com/21-top-vue-js-ui-libraries-for-your-app-4556e5a9060e
)

* [Adding Bootstrap to a Vue CLI Project](
https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0)
* [Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await](
https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee
) 
