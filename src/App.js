import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      projectsData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getProjectsData() {
    $.ajax({
      url: "./projectsData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ projectsData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getProjectsData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.projectsData.main} />
        <About data={this.state.projectsData.main} />
        <Resume data={this.state.projectsData.resume} />
        <Portfolio data={this.state.projectsData.portfolio} />
        <Contact data={this.state.projectsData.main} />
        <Footer data={this.state.projectsData.main} />
      </div>
    );
  }
}

export default App;
