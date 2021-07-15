# Awesome Nuxt Prismic Blog

## Table of Contents

  - [About <a name = "about"></a>](#about-)
    - [Prerequisites](#prerequisites)
    - [Using the project <a name="#usage"><a/>](#using-the-project-a-nameusagea)
      - [Prismic Repository <a name="#repo"></a>](#prismic-repository-)
      - [Setup .env file <a name="#env"></a>](#setup-env-file-)
      - [Install dependencies <a name="#dep"></a>](#install-dependencies-)
    - [Run the Project <a name="#run"> </a>](#run-the-project--)

## About <a name = "about"></a>

A blog using Prismic CMS and Nuxtjs, ideal for content managers

### Prerequisites

- Vue
- Nuxt
- Nodejs

### Using the project <a name="#usage"><a/>

#### Prismic Repository <a name="#repo"></a>

Go to <a href="prismic.io">Prismic CMS</a> and start a repository create relevent types and docs used in the project. Setup the env

#### Setup .env file <a name="#env"></a>

````bash
prismicEP =https://REPO_NAME.cdn.prismic.io/api/v2
GID= GOOGLE ANALYTIC_MEASUREMENT_ID
sitemap_host=DOMAIN
DISQ=DISQUS_SHORT_HAND
````

#### Install dependencies <a name="#dep"></a>

Install project dependencies using npm/yarn pacakge manager

````bash

npm install 
````

#### Run the Project <a name="#run"> </a>

Ready to run the project using **yarn dev**