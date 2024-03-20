import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

const config = {
  num: [4, 7],
  rps: 1,
  radius: [5, 20],
  life: [30, 30],
  v: [10, 10],
  tha: [-40, 40],
  body: "/images/html.jpg",
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: { x: 100, y: 100, width: 2400, height: 2200 },
  color: ["purple", "#ff0000"],
  cross: "dead",
  random: 15,
  g: 2,
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath();
    ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
  }
};

class Header extends Component {

  render() {

    return (
      <header id="home"
        style={{
          height: "600px",
          backgroundImage: "url(images/tree4.jpg)",
          backgroundSize: "cover",
          opacity: "0.99",
          zIndex: "9999"
        }}>
        <ParticlesBg type="color" num={1} config={config} bg={{
          opacity: ".3",
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          width: 200
        }} />
        <ParticlesBg type="color" num={1} config={config} bg={{
          opacity: ".15",
          position: "absolute",
          zIndex: -1,
          top: 0,
          right: 0,
          width: 200
        }} />

        <nav id="nav-wrap">
          <div>
          </div>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contactinfo">
                Contact
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#skills">
                Skills
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner" >
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Mikey Hauser</h1>
            </Fade>
            <Fade bottom duration={1800}>
              <h3>Software Engineer and ASE Master Mechanic</h3>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;