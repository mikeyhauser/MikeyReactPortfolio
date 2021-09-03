import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {

    const aboutName = "Mikey Hauser";
    const aboutPicture = "images/mikeyMountains.jpg";
    const aboutBio1 =  "For over a decade I have served as an ASE Master Mechanic, earning all ASE certificates in automotive repair and commercial vehicle repair. During that period I have completed the UNC Coding Bootcamp and two years towards a Computer Science Degree.";
    const aboutBio2 = "My ambition is to find myself in the convergence of these two industries; both automotive mechanics and computer programming."


    const aboutCity = "Chapel Hill";
    const aboutState = "North Carolina";
    const phone = "919-259-2629";
    const email = "mikeyhauser@gmail.com";
    // const resumeDownload = this.props.data.resumedownload;

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

              <p>{aboutBio1}</p>
              <p>{aboutBio2}</p>
             <h2>                Core Philosophies:
</h2>
              <ol>
                <li>Be a perpetual learner of new things</li>
                <li>Break complicated diagnostics into simpler, easily confirmed tests</li>
                <li>Break long projects up into smaller, easily accomplished tasks and celebrate success</li>
                <li>Prioritize listening: Attempt to understand other perspectives before expressing my own</li>
                <li>By focusing on honest communication, people can accomplish great things together</li>
                <li>Positive attitudes resonate and amplify through a project</li>
                <li>Practice makes perfect: time and commitment bring the impossible goals within reach</li>
              

              </ol>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{aboutName}</span>
                    <br />
                    <span>
                      <br />
                      {aboutCity}, {aboutState}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    {/* <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </Fade>
        
        
      </section>
    );
  }
}

export default About;
