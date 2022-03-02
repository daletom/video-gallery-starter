import * as React from "react"
import { Link } from "gatsby"
import VideoPlayerJS from './../components/player';
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div id="outer">
      <div id="outro">
      <div id="hometext">
        <h1 id="homeheader">Building Video Galleries with Gatsby</h1>
        <p id="homeparagraph">At one time or another, we have all seen the "building an image gallery with Gatsby tutorial." Well, it's time to up your game and build a video gallery tutorial!! In this workshop, you will learn how to create video gallery pages with Gatsby using all three of these modern video solutions — Strap in for an amazing workshop!</p>
      </div>
      <ul role="list" id="homelist">
        <li>
          <Link to="/page-2">
            <div id="outerlist">
              <div id="outerimglist">
                <img
                  id="imglist"
                  src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format,compress&w=400" />
              </div>
              <div id="outerheaderlist">
                <div id="innerheaderlist">
                  <h3 id="linkheader">Page 2</h3>
                  <p id="linkparagraph">Default Placeholder for a second page.</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
