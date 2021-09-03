import React, { Component } from "react";
import Fade from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    // let letters = "0123456789ABCDEF";
    let color = "#681f30";
    // for (let i = 0; i < 6; i++) {
    //   color += letters[Math.floor(Math.random() * 16)];
    // }
    return color;
  }

  render() {
    if (!this.props.data) return null;

  
    const education = this.props.data.education.map(function (education) {
      return (
        
        
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        
        <Fade duration={500}>
        <div style={{textAlign: "center"}}>
        <a href="https://mikeyhauser.github.io/Resume/" style={{textAlign: "center"}}>:LINK TO VIEW FULL RESUME:</a>
        </div>  
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade duration={500}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Fade>

          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>Here are some of my favorite languages/technologies</p>
              <p>* The bar graphic represents my confidence and ability to quickly find solutions to new problems on that platform</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Resume;
