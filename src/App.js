import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

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
      success: function (data) {
        this.setState({ projectsData: data });
      }.bind(this),
      error: function (err) {
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
        <Contact data={this.state.projectsData.main} />
        <Resume data={this.state.projectsData.resume} />
        <Portfolio data={this.state.projectsData.portfolio} />
        <Skills data={this.state.projectsData.resume} />
        <Footer data={this.state.projectsData.main} />
      </div>
    );
  }
}

export default App;
