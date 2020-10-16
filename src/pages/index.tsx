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
            <a href="/"> Katherine Patton </a>
            <a href="#resume"> Resume </a>
            <a href="https://github.com/k-patton"> Projects </a>
            <a href="#blog"> Blog </a>
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
              [Quick heads up, this site is a work in progress. Please forgive
              any weird behaviors or blank pages!]
            </div>
            <div className="checkout">
              <p>
                Check out my <a href="#resume"> experience </a>
              </p>
              <p>
                Check out some{" "}
                <a href="https://github.com/k-patton">of my projects</a>
              </p>
              <p>
                And here's some stuff that's <a href="#blog"> just for fun </a>
              </p>
            </div>
          </div>
          <div className="scroll">{/* <DownArrow /> */}</div>
        </div>
      </div>
      <div className="section-b container">
        <div className="experience" id="resume">
          <h2> Experience </h2>

          {/* componetize? */}
          <div className="experience-bubble">
            <h3> Education </h3>
            <div className="d-flex justify-content-between">
              <div className="title"> Dual BA Program </div>
              <div className="d-none d-md-block title">
                September 2014 - May 2019
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="">
                Columbia University in the City of New York
              </div>
              <div className="d-none d-md-block "> New York, NY</div>
            </div>
            <div className="d-flex justify-content-start">
              <ul>
                <li className=""> B.A. Computer Science </li>
                <li className=""> B.A. Psychology </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between">
              <div className="">
                Institut d’études politiques de Paris (Sciences Po)
              </div>
              <div className="d-none d-md-block "> Reims, France </div>
            </div>
            <div className="d-flex justify-content-start">
              <ul>
                <li className=""> B.A. Social Sciences </li>
                <li className=""> Concentration in History </li>
              </ul>
            </div>
          </div>

          <div className="experience-bubble">
            <h3> Career </h3>
            <ResumeCard
              company="Levvel"
              city="Charlotte, NC"
              title="Associate Engineering Consultant"
              dates="July 2019 - Present"
              bulletPoints={[
                "Built an online banking platform for a major financial institution using React and Typescript. Integrated with multiple teams and third-party vendors. Platform serves over a million users. ",
                "Architected, developed and maintained an internal HR solution which automates the creation and suspension of accounts during onboarding and termination. Reduced HR effort by nearly 100% for these workflows.",
                "Organized and led several cultural events, hosting upwards of 100 people, via the Levvel Volunteering and Ladies of Levvel groups.  ",
              ]}
            />
            <ResumeCard
              company="Code Ninjas"
              city="Charlotte, NC"
              title="Instructor (Code Sensei)"
              dates="March 2020 – Present"
              bulletPoints={[
                "Creates an engaging learning environment for children where they can discover the power of programming.",
                "Developed a Website Builder curriculum that teaches kids the basics of HTML, CSS, and Javascript and guides them through creating their own personal websites. ",
              ]}
            />

            <ResumeCard
              company="Columbia Spectator Publishing Company"
              city="New York, NY"
              title="Developer- Web Applications"
              dates="February 2018 – May 2019"
              bulletPoints={[
                "Collaborated with 15 developers within Spectator’s tech team to convert a housing application from Ruby to React. The application is used by a third of Columbia students during the housing lottery.",
                "Created a chrome extension using JavaScript and HTML to improve an existing student class registration tool; the extension displays total class enrollment and fixes a calendar export bug",
              ]}
            />

            <ResumeCard
              company="Scholastic"
              city="New York, NY"
              title="Software Engineering Intern"
              dates="June 2018 - August 2018"
              bulletPoints={[
                "Designed and implemented a micro-service tracer and log aggregator using Java and Opentracing; project was launched to production clarifying context propagation and drastically reducing incidence resolution time",
                "Engaged in agile/scrum practices; followed a project through an entire life cycle.",
                "Worked with Spring MVC, AWS, JavaFX, and a variety of logging tools.",
              ]}
            />

            <ResumeCard
              company="Zuckerman Institute of Mind, Brain, and Behavior"
              city="New York, NY"
              title="Research Assistant- Virology Core"
              dates="June 2017 - January 2018"
              bulletPoints={[
                "Produced viral neuronal tracers, essential tools used in neuroscience research and nervous system mapping, for Columbia University, other academic institutions, and scientific corporations",
                "Rebuilt and managed a detailed Virology Core database describing over 300 products and their productions status",
                "Performed molecular biology techniques and assisted in tissue culture, harvesting rabies, and harvesting AAVS",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="section-c">
        <div className="fun container" id="blog">
          <h2> Just for fun </h2>
          <p>
            I'm working on starting a food blog where I cook dishes from around
            the world. That's a WIP. For now enjoy some glamour shots of food!
          </p>
          <div className="food-photo">
            <h3> Shakshuka</h3>
            <img src="/shakshuka.jpg" alt="Shakshuka" />
          </div>
          <div className="food-photo">
            <h3> Tzatziki </h3>
            <img src="/tzatziki.jpg" alt="tzatziki" />
          </div>
          <div className="food-photo">
            <h3> Sweet n Sour Chicken</h3>
            <img src="/sweetsourchicken.jpg" alt="sweet and sour chicken" />
          </div>
          <div className="food-photo">
            <h3> Paneer and Broccoli</h3>
            <img src="paneer-broccoli.jpg" alt="paneer and broccoli" />
          </div>
        </div>
      </div>
    </div>
  )
}
