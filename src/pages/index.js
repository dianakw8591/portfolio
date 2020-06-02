import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import Contact from '../components/Contact'

import { DEMOS } from '../components/Gallery/constants/demos';
import { LIFESTYLE } from '../components/Gallery/constants/lifestyle';


const HomeIndex = () => {
  const siteTitle = 'Diana Wendt - Portfolio'
  const siteDescription = 'Find all of my project demos and links here!'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Hi! I'm Diana.<br /> Welcome to my site!
            </h2>
          </header>
          <p>
            I graduated from Dartmouth College with a degree in engineering and a passion for exploration that's taken me from remote field camps in Antarctica to big walls in Yosemite. "Extremeness" isn't the only thing that rescues on the side of 3000 foot vertical faces and fueling aircraft at the South Pole have in common. For me, the opportunity to solve complex and novel problems in support of goals I believe in is what ties together all of my work. In seeking out new challenges I've ultimately come full circle as a software engineer. I'm a recent graduate of Flatiron School's Software Engineering Immersive with full stack experience using Ruby on Rails and React JS. If my skills could be of value to you, please get in touch! 
          </p>
          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery media={DEMOS} />

          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>

        <section id='four'>
          <h2>In Other News</h2>

          <Gallery media={LIFESTYLE} />
          
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            I'm open to opportunities as a developer and always excited to talk about climbing, travel, and working in Antarctica!
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <Contact />
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Seattle, WA
                </li>
                {/* <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  000-000-0000
                </li> */}
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:dianakw@gmail.com">dianakw@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
