import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {

    const aboutName = "Mikey Hauser";
    const aboutPicture = "images/mikeyMountains.jpg";
    const aboutBio1 =  "Since taking a college course in C++ in 2018, I have been fascinated by the logical languages of computers. I am naturally drawn server side code, but I am comfortable with FullStack Application Development concepts. I am excited to dedicate my time to developing code that enhances organizational performance in a practical context.";
    const aboutBio2 = "Up to this point in time, I have served professionally as a mechanic for over a decade in an array of industries. From agriculture and trucking in  NC, to transportation and ocean tourism in the Galapagos Islands, the world of mechanical repair has provided me with a myriad of opportunity to challenge my brain and solve new problems. I now turn my professional focus and problem-solving skills to coding. In the fall of 2021 I will begin seeking work as a full-time computer programmer."

    
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
                <li>Be a perpetual learner of new things: life never stops presenting opportunities to 				grow.</li>
                <li>Break complicated diagnostics into simpler, easily confirmed tests.</li>
                <li>Break long projects up into smaller, easily accomplished tasks and celebrate success.</li>
                <li>Always seek to learn and listen. Attempt to understand to other perspectives before 				expressing my own.</li>
                <li>By focusing on honest communication, people can accomplish great things together.</li>
                <li>Positive attitudes resonate and amplify through a project.</li>
                <li>Practice makes perfect: time and commitment bring the impossible goals within reach.</li>
              

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
