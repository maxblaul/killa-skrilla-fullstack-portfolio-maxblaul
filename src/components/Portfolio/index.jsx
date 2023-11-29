import React from "react";
import Project from "../Project";

const projects = [
    {
      id: 0,
      title: "",
      image: "",
      description: "",
      repo: "",
      live: "",
    },
    {
      id: 1,
      title: "",
      image: "",
      description: "",
      repo: "",
      live: "",
    },
    {
      id: 2,
      title: "",
      image: "",
      description: "",
      repo: "",
      live: "",
    },
    {
      id: 3,
      title: "",
      image: "",
      description: "",
      repo: "",
      live: "",
    },
    {
      id: 4,
      title: "",
      image: "",
      description: "",
      repo: "",
      live: "",
    },
    {
      id: 5,
      title: "",
      image: "",
      description: "",
      repo: "",
      live: "",
    },
    {
      id: 6,
      title: "",
      image: "",
      description: "",
      repo: "",
      live: "",
    },
  ];
  

function Portfolio() {
    return (
      <div>
        <p className="content is-medium">Portfolio</p>
        <hr />
  
        <Project projects={projects} />
      </div>
    );
  }
  
  export default Portfolio;