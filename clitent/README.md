# MERNSTACK
## 2024 our year

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
    
 ``````   export default defineConfig({
    plugins: [react()],
    server: {
    port: 3000,
    open: true   }  })
``````

    

Now install your client dependecies
* [Appolo Client]()
* [Graphql]()
* [Jwt]()
* [React]()
* [React-dom]()
* [React-router-dom]()
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
 Once complete You can now store all your files into a folder called CLIET
 
set up your client server and concurrently
https://www.npmjs.com/package/concurrently?activeTab=readme
open all there of them in seperate terminals makes it alot easier
### Establishing Your Back End
This part is alot more time consumming and easy to mess up so be carefull

First You must init your npm
server dependencies
    "@apollo/server": "^4.7.1",
    "bcrypt": "^5.0.0",
    "express": "^4.17.2",
    "graphql": "^16.6.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^7.0.2"
    (mysql2 if were doing sql database)
    (express sessions if were doing auth that way)
    disregard version numbers just lazy rn

    npm install nodemon --save-dev

    setup all your scripts 
    watch/dev
    start install seed etc



back to the server
check comments in server.js
maybe add imgs later
set up the connection to your database (mongdb or ssql) in config folder connection.js
set up your models

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

after done with mutations you can now set up your react router 