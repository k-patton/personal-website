import React from "react"
import "./index.scss"

export default function Home() {
  return (
    <div className="homepage">
      <div className="section-a">
        <div className="image-container"></div>
        <div className="content-container">
          <nav>
            <a href="/"> Katherine Patton </a>
            <a> Resume </a> <a> Projects </a> <a> Blog </a>
          </nav>
          <div className="greeting">
            <h1> Hi, I'm Katie. </h1>
            <h3>
              I'm a full stack
              <span id="software">
                software engineer
                <span id="cursor"> | </span>
              </span>
            </h3>
            <div className="checkout">
              <p>
                Check out my <a> experience </a>
              </p>
              <p>
                Check out some <a> projects I've worked on </a>
              </p>
              <p>
                And here's some stuff that's <a> just for fun </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-b">Lorem ipsum</div>
      <div className="section-c">Lorem ipsum</div>
    </div>
  )
}
