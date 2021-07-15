# Awesome Nuxt Prismic Blog

## Table of Contents

- [Awesome Nuxt Prismic Blog](#awesome-nuxt-prismic-blog)
  - [Table of Contents](#table-of-contents)
  - [About <a name = "about"></a>](#about-)
  - [Prerequisites](#prerequisites)
  - [Using the project <a name="#usage"><a/>](#using-the-project-a-nameusagea)
    - [Prismic Repository <a name="#repo"></a>](#prismic-repository-)
    - [Setup .env file <a name="#env"></a>](#setup-env-file-)
    - [Install dependencies <a name="#dep"></a>](#install-dependencies-)
    - [Run the Project <a name="#run"> </a>](#run-the-project--)

## About <a name = "about"></a>

A blog using Prismic CMS and Nuxtjs, ideal for content managers

## Prerequisites

- Vue
- Nuxt
- Nodejs

## Using the project <a name="#usage"><a/>

For using the Nuxt project need to configure the following.

### Prismic Repository <a name="#repo"></a>

Go to <a href="prismic.io">Prismic CMS</a> and start a repository create relevent types and docs used in the project. Setup the env

### Setup .env file <a name="#env"></a>

The .env file hold the secrets and API end points. Create .env file at the root of the project with following

````bash
prismicEP =https://REPO_NAME.cdn.prismic.io/api/v2
GID= GOOGLE ANALYTIC_MEASUREMENT_ID
sitemap_host=DOMAIN
DISQ=DISQUS_SHORT_HAND
````

Replace the CAPITALIZED variables with real values

### Install dependencies <a name="#dep"></a>

Install project dependencies using npm/yarn pacakge manager

````bash
npm install 
````

### Run the Project <a name="#run"> </a>

Ready to run the project, using **yarn dev**
