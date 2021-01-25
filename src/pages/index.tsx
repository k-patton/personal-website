import React from "react"
import "./index.scss"
import SEO from "../components/seo"
import { ResumeCard } from "../components/resumeCard/resumeCard"

export default function Home() {
  return (
    <div className="homepage">
      <SEO title="Katherine Patton" />
      <div className="section-a">
        <div className="image-container"></div>
        <div className="content-container">
          <nav className="d-none d-md-flex">
            <a id="logo" href="/">
              Katherine Patton
            </a>
            <a
              href="https://s3.amazonaws.com/katherinepatton.com/Resume.pdf"
              target="_blank"
            >
              Resume
            </a>
            <a href="https://github.com/k-patton" target="_blank">
              {" "}
              Github{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/katherine-patton-9601/"
              target="_blank"
            >
              Linkedin
            </a>
          </nav>
          <div className="greeting">
            <div className="greeting-myname">
              <h1> Hi, I'm Katie. </h1>
            </div>
            <h3>
              <div> I'm a full stack</div>
              <span id="software">
                software engineer
                <span id="cursor">|</span>
              </span>
            </h3>
            <div className="warning">
              This site is currently a work in progress (check back soon for
              some blog content!) but you can check out some of my work:
            </div>
            <div className="checkout">
              <p>
                Check out my{" "}
                <a
                  href="https://s3.amazonaws.com/katherinepatton.com/Resume.pdf"
                  target="_blank"
                >
                  experience
                </a>
              </p>
              <p>
                Check out some of{" "}
                <a href="https://github.com/k-patton" target="_blank">
                  my projects
                </a>
              </p>
              <p>
                And here's some stuff that's{" "}
                <a href="https://repl.it/@kpatton" target="_blank">
                  {" "}
                  just for fun{" "}
                </a>
              </p>
            </div>
          </div>
          <div className="scroll">{/* <DownArrow /> */}</div>
        </div>
      </div>
    </div>
  )
}
