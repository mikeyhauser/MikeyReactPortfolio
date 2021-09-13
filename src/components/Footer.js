import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {

    return (
      <section id="footer">
     <footer >
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="mikeySocial">
                <li style={{paddingRight: "200px"}}
                key="linkedin">
                  <a href="https://www.linkedin.com/in/mikey-hauser-3109099/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li key="github">
                  <a href="https://github.com/mikeyhauser">
                    <i className="fa fa-github"></i>
                  </a>
                </li>

              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
      </section>

    );
  }
}

export default Footer;
