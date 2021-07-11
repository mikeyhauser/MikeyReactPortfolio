import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/projectThumbs/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <h2 style={{ textAlign: "center" }}>{projects.title}</h2>
            <a style={{ textAlign: "center" }} href={projects.deployedSite}  >Deployed Site</a>
            <a style={{ textAlign: "center" }} href={projects.gitHubRepo} >Repository </a>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
       
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div 
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Portfolio;
