[![Netlify Status](https://api.netlify.com/api/v1/badges/03d2f9db-14df-40ae-8e64-9ee954d6062c/deploy-status)](https://app.netlify.com/sites/elastic-bartik-3a0d13/deploys)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Deployment 


```bash
yarn build
```

start your server side 
```bash
yarn start
```


# start your static side 
static export is available in the out folder

a bit of configuration is required if you want to use the static side,
this configuration will return to default when build && export this project

# check route

added . if css and js links are not found in every `html` page

before
```bash
/_next/static/chunk......
```
after
```bash
./_next/static/chunk......
```
# check anchor
check the href tag for page switching on each `html` file

before
```bash
href="/"
href="Capacity increase"
```
after
```bash
href="index.html"
href="Capacityincrease.html"
```
open html file in web browser or live server

Have a good time


