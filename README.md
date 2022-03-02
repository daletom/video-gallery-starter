<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.imgix.com">
    <img alt="imgix Logo" src="https://ix-www.imgix.net/press/imgixcollage.jpg?crop=focal&fit=crop&q=70&markpad=0&markalign=middle%2Ccenter&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L3ByZXNza2l0L2ltZ2l4LXByZXNza2l0LnBkZj9mbT1wbmcmcGFnZT00&bm=normal&usm=2O&chromasub=444&blend64=OTkwQzMyNDk&w=380&h=238" width="380" />
  </a>
</p>
<h1 align="center">
  Video Gallery Starter for Gatsby Conf Workshop
</h1>

At one time or another, we have all seen the "building an image gallery with Gatsby tutorial." Well, it's time to up your game and build a video gallery tutorial!! In this workshop, you will learn how to create video gallery pages with Gatsby using all three of these modern video solutions — Strap in for an amazing workshop!

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/daletom/video-gallery-start)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🧐 Looking inside src?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── src
    ├── components
    ├──── header.js
    ├──── layout.css
    ├──── layout.js
    ├──── player.js
    ├──── seo.js
    ├──── videojs.css
    ├── images
    ├── pages
    ├──── 404.js
    ├──── index.js
    ├──── page-2.js
    └── templates

1.  **`/components`**: This directory contains components that you will be using on your actual pages.

2.  **`/header.js`**: This is the header that will be used throughout the site.

3.  **`/layout.css`**: This is the global css used to design the site.

4.  **`/layout.js`**: This implements items globally, such as the layout.css or adding the header component on each page.

5.  **`/player.js`**: This is the code to create the player for video.js.  It is also setting the options for the player.

6.  **`/seo.js`**: This is querrying the website's metadata and implementing them on original graph (og) tags to display info when the site is shared.

7.  **`/videojs.css`**: This is the design of the video.js player.

8.  **`/images`**: A folder where you can store images to be used later.

9.  **`/pages`**: A folder where you will create files for each additional page of the site.

10.  **`/404.js`**: This is the page that will be displayed if you navigate to a page that does not exist on the site.

11.  **`/index.js`**: This is the homepage of the site.

12.  **`/page-2.js`**: This is an example second page that can be navigated to on the website.  You can copy or modify this page for additional pages you create.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 🎓 Learning imgix

Looking for more information about imgix?  Find out more about our image optimization and video APIs [on our website](https://www.imgix.com/). Here are some places to start:

- **To see [our documentation](https://docs.imgix.com/).** In particular, check out the [Gatsby Library](https://docs.imgix.com/libraries/gatsby).

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.
