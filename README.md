# MERNSTACK
## 2024 our year
Before Building your application you must
* Create a github repo to keep track of everything (commit often)
* Seperate your front end and back end into folders client and server respectively 

### Establishing Your Front End
#### Docs
1.  [Getting Started With Vite](https://vitejs.dev/guide/ )
2.  [Vite Config](https://vitejs.dev/config/)

Vite is basically a template for your frontend so you don't have to go through the hassel of having to create all those folder ( unfortunatley not the same for the backend, well not that I know off)

First create your vite project by simply typing in 

    
    npm create vite@latest 
    In your vite config 

Edit your vite config so it opens by itself
1. The port propery sets your desired port
2. the open property sets makes it open in your browsers for you
    
 ``````  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

``````

    

Now install your client dependecies
* [Appolo Client](https://www.npmjs.com/package/@apollo/client)
* [Graphql](https://www.npmjs.com/package/graphql)
* [Jwt](https://www.npmjs.com/package/jwt-decode)
* [React](https://www.npmjs.com/package/react)
* [React-dom](https://www.npmjs.com/package/react-dom)
* [React-router-dom](https://www.npmjs.com/package/react-router-dom)
``````
    "dependencies": {
    "@apollo/client": "^3.7.14",
    "graphql": "^16.6.0",
    "jwt-decode": "^3.1.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-
    dom": "^6.11.2"
    },
 ``````   
 

set up your client server and concurrently
https://www.npmjs.com/package/concurrently?activeTab=readme
open all there of them in seperate terminals makes it alot easier

### Establishing Your Back End
This part is alot more time consumming and easy to mess up so be carefull

First You must init your npm then install the necessary packages
* [nodemon](https://www.npmjs.com/package/nodemon)

* [@apollo/server](https://www.npmjs.com/package/@apollo/server) 
* [bcrypt](https://www.npmjs.com/package/bcrypt) 
* * [Understanding bcrypt](//https://auth0.com/blog/hashing-in-action-understanding-bcrypt/)
* [express](https://www.npmjs.com/package/express) 
* [graphql](https://www.npmjs.com/package/graphql)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 
* [mongoose](https://www.npmjs.com/package/mongoose)
* [mysql2](https://www.npmjs.com/package/mysql2) - (if using SQL database)
* [express-session](https://www.npmjs.com/package/express-session) - (if using authentication this way)

``````
server dependencies
    "@apollo/server": "^4.7.1",
    "bcrypt": "^5.0.0",
    "express": "^4.17.2",
    "graphql": "^16.6.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^7.0.2"
    (mysql2 if were doing sql database)
    (express sessions if were doing auth that way)
      npm install nodemon --save-dev

``````
Set up your scripts to 
```"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "watch": "nodemon server.js",
    "seed": "node seeds/seed.js"
  },
  
  In your package.json

  "scripts": {
    "start": "node server/server.js",
    "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm run dev\"",
    "install": "cd server && npm i && cd ../client && npm i",
    "seed": "cd server && npm run seed",
    "build": "cd client && npm run build"
  }
  ``````
(add images later)

1. Create your Sever.js
2. Establish your connection 
3. Once connected you now create your models for the database
4. Now create Seeds
5. Create Typedefs and Resolvers
6. Now you can set up concurrently with the necessary scripts 

* * `` npm install concurrently--save-dev "devDependencies": {
    "concurrently": "^8.2.0"
  }``


if using traditional rest api you would require the models in your controllers folder but if using graph ql
crete type defs and resolvers in your schema folder 
create your seeds

once seeds are done set up concurrently

set up scripts and your single package

 "scripts": {
    "start": "node server/server.js",
    "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm run dev\"",
    "install": "cd server && npm i && cd ../client && npm i",
    "seed": "cd server && npm run seed",
    "build": "cd client && npm run build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^8.2.0"
  }

  At this stage you should have a server running able to test your queries

  now time to connect with the front end
  first go to your utils folder
  create your queries best to test out in the graphql sandbox the copy and past
  import gql
  store each queries in variables and export

  got to your app.jsx
   and import the necessary component

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

after done with mutations you can now set up authentication
auth for backend
server.js
type defs 
resolvers verfiy password with the model method you created 

create auth util file (jwt )
with auth create now you can set up a me route
time for the front end 
set up pages/react router
