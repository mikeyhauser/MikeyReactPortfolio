import React, { Component } from "react";
import Fade from "react-reveal";

const aboutPicture = "images/mikeyMountains.jpg";
const aboutBio3 = "Software Engineer with 4 years of coding experience, leveraging 12 years as an ASE Master Mechanic to logically troubleshoot and diagnose computer code. Earned a certificate in Full Stack Web Development from the University of North Carolina Coding Boot Camp. Tenacious problem-solver who is naturally drawn to database management and server development. Strengths in critical thinking, diagnostics, learning new concepts, and leadership."

class About extends Component {

  render() {

    return (
      <section id="about">
        <Fade duration={500}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={aboutPicture}
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Mikey Hauser</h2>
              <p>{aboutBio3}</p>
              <h2>Core Philosophies:</h2>
              <ol>
                <li>Be a perpetual learner of new things</li>
                <li>Break complicated diagnostics into simpler, easily confirmed tests</li>
                <li>Break long projects up into smaller, easily accomplished tasks and celebrate success</li>
                <li>Prioritize listening: Attempt to understand other perspectives before expressing my own</li>
                <li>By focusing on honest communication, people can accomplish great things together</li>
                <li>Positive attitudes resonate and amplify throughout a project</li>
                <li>Practice makes perfect: time and commitment bring the impossible goals within reach</li>
              </ol>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;