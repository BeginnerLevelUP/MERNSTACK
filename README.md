# MERNSTACK
2024 our year

first create your vite project
https://vitejs.dev/guide/
npm create vite@latest
Edit your vite config so it opens by itself - super cool
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
https://vitejs.dev/config/

set up your client server and concurrently
https://www.npmjs.com/package/concurrently?activeTab=readme
open all there of them in seperate terminals makes it alot easier

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


client dependencies
"dependencies": {
    "@apollo/client": "^3.7.14",
    "graphql": "^16.6.0",
    "jwt-decode": "^3.1.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.11.2"
  },

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