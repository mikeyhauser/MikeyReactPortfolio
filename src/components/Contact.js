import React, { Component } from "react";
import Fade from "react-reveal";

class Contact extends Component {
  render() {
    const aboutName = "Mikey Hauser";
    const aboutCity = "Chapel Hill";
    const aboutState = "North Carolina";
    const phone = "919-259-2629";
    const email = "mikeyhauser@gmail.com";

    // const name = "Mikey Hauser";
    // const street = "Orange Grove Road";
    // const city = "Efland";
    // const state = "North Carolina";
    // // const phone = "919-259-2628";
    // // const message = this.props.data.contactmessage;

    return (
      <section id="contactinfo">
      <div style={{textAlign: "center"}}  className="row">
        <div className="contact-details">
         
            <h2 >Contact Details</h2>
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
            <Fade bottom>
            <div className="twelve columns">
              <ul className="mikeySocial">
                <li style={{paddingRight: "100px"}}
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
         
        </div>
      </div>
      </section>
    );
  }
}

export default Contact;
