import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";



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
        <Contact data={this.state.projectsData.main} />

        <Portfolio data={this.state.projectsData.portfolio} />

        <Resume data={this.state.projectsData.resume} />
        <Skills data={this.state.projectsData.resume} />

        <Footer data={this.state.projectsData.main} />
        
      </div>
    );
  }
}

export default App;
