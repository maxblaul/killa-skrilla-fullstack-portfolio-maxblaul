import React from "react";
import MaxResume from "../../public/Resume.pdf"


function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium"> Resume</p>
        <>
          <hr />
        </>
        <a
          className="button is-primary"
          href= {MaxResume} // Corrected the file path
          target="_blank"
          rel="noopener noreferrer"  // Include both noopener and noreferrer for security
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>  {/* Corrected the class name */}
        {/* <hr /> */}
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>API, React, Node.js</li>
          <li>NoSQL, MySQL, MVC</li>
          <li>Progressive Web Applications</li>
          <li>Github, Heroku, MongoDB, Insomnia</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
