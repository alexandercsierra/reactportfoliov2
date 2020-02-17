import planets from "../imgs/planets.png";
import rps from "../imgs/rps.png";
import bookr from "../imgs/bookr.png";
import cities from "../imgs/cities.png";
import heroku from "../imgs/heroku.png";
import zingers from "../imgs/zingers.png"
import holiday from "../imgs/holiday.png"
import char from "../imgs/char.png"
import pug from "../imgs/thepug.png"
import weekly from '../imgs/weekly.png'


let obj = {
    weekly: {
        letter: "W",
        title: "Weekly Task Tracker",
        image: weekly,
        desc: "A task tracker which presents the user with daily tasks dependant upon a complex A/B week schedule. Tasks may be marked completed, but do not disappear so that the user can clearly see what has been accomplished and what is left to do. Completed tasks are stored in local storage. This app was created using Moment JS for time tracking, as well as React, styled-components, and React Router",
        repo: "https://github.com/alexandercsierra/weeklyTaskTracker",
        url: "https://weeklytasktracker.now.sh/"
    },
    planets: {
        letter: "P",
        title: "Planetary Weights",
        image: planets,
        desc: "Takes a user's weight on Earth, and planet selection and returns their weight on another planet. The background image will dynamically change according to which planet the user has selected. Build in HTML, CSS and vanilla JavaScript",
        repo: "https://github.com/alexandercsierra/planetary-weights",
        url: "https://alexandercsierra.github.io/planets/index.html"
    },
    holiday: {
        letter: "H",
        title: "Holiday Postcards",
        image: holiday,
        desc: "A web app that will display holiday postcards, with a festive snowfall effect. A user can input a specific code, and then gain access to a flippable postcard specific to them. Different holidays are represented utilizing dynamic background images. Created using React, react-router, styled-components, react-card-flip and react-snowfall",
        repo: "https://github.com/alexandercsierra/holidayPostcards",
        url: "https://alexandercsierra.github.io/holidayPostcards/#/"
    },
    cities: {
        letter: "C",
        title: "Cities by Consonants",
        image: cities,
        desc: "A radio quiz question turned side project, users of this website can try to guess which states contain a city which shares the same consonants as it's state name. They are given dynamic visual cues based on right or wrong answers. Created using HTML, CSS, and vanilla JavaScript",
        repo: "https://github.com/alexandercsierra/citiesByConsonant",
        url: "https://alexandercsierra.github.io/cities/index.html"
    },
    characteristiq: {
        letter: "C",
        title: "Characteristiq",
        image: char,
        desc: "A more stream-lined Myers-Briggs-esque personality test. The user can answer questions with the slider and receive a personality type result. I contributed to this project as a Front End Developer on a 24hr hackathon team. I also edited and narrated our marketing video. Technologies used include React, react-router, styled-components, and Material UI",
        repo: "https://github.com/Myers-Briggs-for-Millennials/Frontend",
        url: "https://characteristiq.now.sh/",
        video: "https://www.youtube.com/watch?v=2gU_upDqM34&feature=youtu.be"
    },
    ggapi: {
        letter: "G",
        title: "Golden Girls API",
        image: heroku,
        desc: "A simple API, deployed to Heroku, built in Node JS that would allow an application to receive randomized quotes from the popular TV series 'The Golden Girls'. Work on this API is still in progress",
        repo: "https://github.com/alexandercsierra/goldenGirlsAPI",
        url: "https://golden-girls-api.herokuapp.com/"
    },
    zingers: {
        letter: "Z",
        title: "Zbornak Zingers",
        image: zingers,
        desc: "A simply frontend application designed to compliment the Golden Girls API, which will display a randomized quote in a card upon request. Created using React, styled-components, and bootstrap.",
        repo: "https://github.com/alexandercsierra/zbornakzingersreact",
        url: "https://zbornakzingers.netlify.com/"
    },
    gifs: {
        letter: "S",
        title: "Sad Pug Gifs",
        image: pug,
        desc: "This website is a random gif generator, pulling from the giphy API. It was built using React, styled-components, and Redux",
        repo: "https://github.com/alexandercsierra/React-Redux-App/tree/alexander-sierra",
        url: "https://react-redux-app-bbqz03ky6.now.sh/"
    },
    bookr: {
        letter: "O",
        title: "OER Bookr",
        image: bookr,
        desc: "As part of a team, I created the Marketing and About Us pages for OER Bookr, a source for open source textbooks, using HTML and CSS. I also 3D modelled (and contributed to the design of) our logo in Blender.",
        repo: "https://github.com/Build-Week-Team-OERBookr/UI",
        url: "https://oerbookr2019.netlify.com/"
    },
    rps: {
        letter: "R",
        title: "Rock Paper Scissors",
        image: rps,
        desc: "A simply rock, paper, scissors game built using HTML, CSS, and vanilla JavaScript",
        repo: "https://github.com/alexandercsierra/rpsgame",
        url: "https://alexandercsierra.github.io/rockpaperscissors/rpsgame.html"
    }
    

}

export const projectlist = Object.values(obj);