import React, { Component } from "react";
import Zmage from "react-zmage";

let id = 0;

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;
    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/projectThumbs/" + projects.image;

      return (
        <div class="rows">
          <h1>Stagger Effect On The Cards</h1>
          <div key={id++} class="columns flip-card">
            <div class="flip-card-inner">
              <div style={{ backgroundImage: `(${projectImage})` }}
                class="flip-card-front">
                <h4 style={{ backgroundColor: "black" }} >{projects.title}</h4>
                <Zmage style={{ width: "170px", height: "150px" }} alt={projects.title} src={projectImage} />
                <div style={{ height: "150px" }} class="columns">
                  <h5>{projects.category}</h5>
                </div>
              </div>
              <div class="flip-card-back">
                <h3 style={{ font: "12px" }}>{projects.title}</h3>
                <div style={{ backgroundColor: "black" }} >
                  <a href={projects.deployedSite}  >:Link to Demo:</a>
                </div>
                <h3>+</h3>
                <div style={{ backgroundColor: "black" }} >
                  <a href={projects.gitHubRepo} >:Readme / Code:</a>
                </div>
                <p>{projects.description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">

        <div className="row">
          <div className="twelve columns collapsed">

            <h2 style={{ color: "white", textAlign: "center" }}>My Personal Projects:</h2>

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
