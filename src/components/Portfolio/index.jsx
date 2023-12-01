import React from "react";
import Project from "../Project";

const projects = [
    {
      id: 0,
      title: "What's In My Meal?",
      image: "/Whats in my meal.png",
      technologies: "Tailwind CSS, Google Fonts, Edamam's Nutrition Analysis and Recipe Search API, The script.js file utilizes the Fisher-Yates shuffle algorithm",
      description: "This application lets users search for a food, look at nutritional data, and save recipes. You are able to find recipes in the serach bar or provide your own list of ingredients. The app will suggest recipes and give detailed nutritional analysis.",
      repo: "https://github.com/maxblaul/nutrition-getter",
      live: "https://maxblaul.github.io/nutrition-getter/",
    },
    {
      id: 1,
      title: "Review a Movie",
      image: '/movie-rater.png',
      technologies: "Node.js , Express, Sequelize, Bulma, Bcrypt, Express-handlebars, MySQL, Node-fetch, and dotenv.",
      description: "Enables a user to make an account, search a title, give it a raiting out of 5 stars, and save it to their profile.",
      repo: "https://github.com/maxblaul/movie-rater",
      live: "https://spooky-ghost-09826-e1fe8c97ce3e.herokuapp.com/",
    },
    {
      id: 2,
      title: "Note Taker",
      image: "/note-taker.png",
      description: "This is a simple web application that allows a user to take notes. It uses Express.js as its main technology.",
      repo: "https://github.com/maxblaul/maxblaul-note-taker",
      live: "https://peaceful-dawn-76039-8bfab46614bf.herokuapp.com/notes",
    },
    {
      id: 3,
      title: "Journey Log",
      image: "",
      description: "Coming Soon!",
      repo: "https://github.com/lopezivan763/journey-log-app",
      live: "",
    },
    {
      id: 4,
      title: "Work Day Scheduler",
      image: "/day-scheduler.png",
      description: "Work day scheduler allows a user to input their activities on the page and save it to the console. The color of the activity changes based on what time it is. If it is green, the hour hasn't happend yet, if it's grey, it's in the past, if it's red, then it is the current hour. It uses Day.js as a 3rd party API to retrieve time and date data.",
      repo: "https://github.com/maxblaul/Work-day-scheduler-maxblaul",
      live: "https://maxblaul.github.io/module-5-challenge/",
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