import planets from "../imgs/planets.png";
// import rps from "../imgs/rps.png";
import bookr from "../imgs/bookr.png";
import cities from "../imgs/cities.png";
import heroku from "../imgs/heroku.png";
// import zingers from "../imgs/zingers.png"
import holiday from "../imgs/holiday.png"
import char from "../imgs/char.png"
import pug from "../imgs/thepug.png"
import weekly from '../imgs/weekly.png'
import d8picker from '../imgs/d8picker.png'
import sleuth from '../imgs/sleuth.png'
import ac from '../imgs/animalcrossing.png'
import gameoflife from '../imgs/gameoflife.png'
import extrapickles from '../imgs/extrapickles.png'


let obj = [
    {
        id: 0,
        letter: "E",
        title: "Extra Pickles",
        image: extrapickles,
        alt: "green background with white text and a picture of a woman eating a burger",
        desc: "Never wonder what your friends and family order from a restaurant again. Sign up, create lists with your usual order at a given restaurant, then add friends. Friends can see what you've added to your lists, so you never have to guess if they like extra pickles. The project is a current work in progress, built using ReactJS and NodeJS",
        repo: "https://github.com/alexandercsierra/preferences",
        url: "https://extrapickles.vercel.app/",
        solo: true,
        featured: true
    },
    {
        id: 1,
        letter: "D",
        title: "D8 Picker",
        image: d8picker,
        alt: "picture of a calendar layout in mobile size",
        desc: "An app that allows for quick creation of calendar events in a non-standard pattern. D8 Picker has Google Calendar API integration and a dynamic smooth-scrolling calendar in mobile view. I contributed as a frontend developer on this project on a cross-functional team of 4 developers and 1 UX designer over the course of 2 months. This was a build-on project, with our main objective being to improve the mobile user's experience. We acheived this, finding a 50% decrease in average time to create a new event in our user testing. This project was also voted in the top 5 of 25 projects by our peers. This was created using ReactJS, Context API, React-Window, styled-components, google OAuth2, and NodeJS.",
        repo: "https://github.com/alexandercsierra/school-calendar-fe",
        url: "https://d8picker22.now.sh/",
        solo: false,
        featured: true
    },
    {
        id: 2,
        letter: "G",
        title: "Game of Life",
        image: gameoflife,
        alt: "preview of grid of squares against a grey background",
        desc: "A React implementation of Conway's Game of Life using a grid of components. A user can manually select a configuration, randomize, select a grid size and speed of simulation, as well as a party mode 🎉. Built using ReactJS, following classic rules of Conway's Game of Life.",
        repo: "https://github.com/alexandercsierra/gameoflife/tree/component-grid",
        url: "https://gameoflife-eight.now.sh/",
        solo: true,
        featured: true
    },
    {
        id: 3,
        letter: "W",
        title: "Weekly Task Tracker",
        image: weekly,
        alt: "blue-green screenshot with cards for different weekly tasks",
        desc: "A task tracker which presents the user with daily tasks dependant upon a complex A/B week schedule. Tasks may be marked completed, but do not disappear so that the user can clearly see what has been accomplished and what is left to do. Completed tasks are stored in local storage. This app was created using Moment JS for time tracking, as well as React, styled-components, and React Router.",
        repo: "https://github.com/alexandercsierra/weeklyTaskTracker",
        url: "https://weeklytasktracker.now.sh/",
        solo: true,
        featured: true
    },
    {
        id: 4,
        letter: "S",
        title: "Sleuth Clone",
        image: sleuth,
        alt: "",
        desc: "A labor of love and work in progress, this project aims to replicate a childhood favorite DOS game, Sleuth. A user can put in their own custom guest names and try to figure out whodunnit. Created using ReactJS, Context API, and styled-components.",
        repo: "https://github.com/alexandercsierra/sleuthv5",
        url: "https://sleuth.now.sh/",
        solo: true,
        featured: true
    },
    {
        id: 5,
        letter: "W",
        title: "WunderList 2.0",
        image: heroku,
        alt: "heroku logo",
        desc: "I Worked on this project as a the sole backend engineer on a full stack team over the course of a week. This is a REST API utilizing NodeJS, Express, and PostgresQL. It contains endpoints for authentication as well as full CRUD for to-dos and to-do lists. Deleted todos expire after 1 week.",
        repo: "https://github.com/alexandercsierra/back-end?organization=alexandercsierra&organization=alexandercsierra",
        url: "https://wunderlistbuildweek.herokuapp.com/",
        solo: false,
        featured: false
    },
    {
        id: 6,
        letter: "P",
        title: "Planetary Weights",
        image: planets,
        alt: "screenshot of website with an Earth background, and a form in the foreground",
        desc: "Takes a user's weight on Earth, and planet selection and returns their weight on another planet. The background image will dynamically change according to which planet the user has selected. Build in HTML, CSS and vanilla JavaScript.",
        repo: "https://github.com/alexandercsierra/planetary-weights",
        url: "https://planetary-weights.now.sh/",
        solo: true,
        featured: false
    },
    
    {
        id: 7,
        letter: "A",
        title: "Animal Crossing Item Calculator",
        image: ac,
        alt: "screenshot of a green add item form",
        desc: "A fullstack project which allows a user to add an item to a database, which can then be searched through and added to a 'cart' which will total the values of the items held within it. Intended for recreational use by players of the Nintendo series Animal Crossing. The frontend uses ReactJS, Material UI, and styled-components. The backend is REST API created with NodeJS and Express.",
        repo: "https://github.com/alexandercsierra/acitemsearchfe",
        url: "https://animal-crossing-item-calculator.now.sh/",
        solo: true,
        featured: false
    },
    {
        id: 8,
        letter: "H",
        title: "Holiday Postcards",
        image: holiday,
        alt: "red screenshot with holly and a form in the foreground",
        desc: "A web app that will display holiday postcards, with a festive snowfall effect. A user can input a specific code, and then gain access to a flippable postcard specific to them. Different holidays are represented utilizing dynamic background images. Created using React, react-router, styled-components, react-card-flip and react-snowfall.",
        repo: "https://github.com/alexandercsierra/holidayPostcards",
        url: "https://alexandercsierra.github.io/holidayPostcards/#/",
        solo: true,
        featured: false
    },
    {
        id: 9,
        letter: "C",
        title: "Cities by Consonants",
        image: cities,
        alt: "dark screenshot with a form in the foreground",
        desc: "A radio quiz question turned side project, users of this website can try to guess which states contain a city which shares the same consonants as it's state name. They are given dynamic visual cues based on right or wrong answers. Created using HTML, CSS, and vanilla JavaScript.",
        repo: "https://github.com/alexandercsierra/citiesByConsonant",
        url: "https://alexandercsierra.github.io/cities/index.html",
        solo: true,
        featured: false
    },
    {
        id: 10,
        letter: "C",
        title: "Characteristiq",
        image: char,
        alt: "screenshot of dark grey website with purple sliders",
        desc: "A more stream-lined Myers-Briggs-esque personality test. The user can answer questions with the slider and receive a personality type result. I contributed to this project as a Front End Developer on a 24hr hackathon team. I also edited and narrated our marketing video. Technologies used include React, react-router, styled-components, and Material UI.",
        repo: "https://github.com/Myers-Briggs-for-Millennials/Frontend",
        url: "https://characteristiq.now.sh/",
        video: "https://www.youtube.com/watch?v=2gU_upDqM34&feature=youtu.be",
        solo: false,
        featured: false
    },
    {
        id: 11,
        letter: "G",
        title: "Golden Girls API",
        image: heroku,
        alt: "the heroku logo",
        desc: "A simple API, deployed to Heroku, built in Node JS that would allow an application to receive randomized quotes from the popular TV series 'The Golden Girls'. Work on this API is still in progress.",
        repo: "https://github.com/alexandercsierra/goldenGirlsAPIv3",
        url: "https://goldengirlsquotes.herokuapp.com/",
        solo: true,
        featured: false
    },
    // zingers: {
    //     letter: "Z",
    //     title: "Zbornak Zingers",
    //     image: zingers,
    //     desc: "A simply frontend application designed to compliment the Golden Girls API, which will display a randomized quote in a card upon request. Created using React, styled-components, and bootstrap.",
    //     repo: "https://github.com/alexandercsierra/zbornakzingersreact",
    //     url: "https://zbornakzingers.netlify.com/"
    // },
    {
        id: 12,
        letter: "S",
        title: "Sad Pug Gifs",
        image: pug,
        alt: "screenshot with a sad pug and random gifs button",
        desc: "This website is a random gif generator, pulling from the giphy API. It was built using React, styled-components, and Redux.",
        repo: "https://github.com/alexandercsierra/React-Redux-App/tree/alexander-sierra",
        url: "https://react-redux-app-bbqz03ky6.now.sh/",
        solo: true,
        featured: false
    },
    {
        id: 13,
        letter: "O",
        title: "OER Bookr",
        image: bookr,
        alt: "screenshot of a homepage with a bookshelf background",
        desc: "As part of a team, I created the Marketing and About Us pages for OER Bookr, a source for open source textbooks, using HTML and CSS. I also 3D modelled (and contributed to the design of) our logo in Blender.",
        repo: "https://github.com/Build-Week-Team-OERBookr/UI",
        url: "https://oerbookr2019.netlify.com/",
        solo: false,
        featured: false
    }
    // rps: {
    //     letter: "R",
    //     title: "Rock Paper Scissors",
    //     image: rps,
    //     alt: "screenshot with two men playing rock paper scissors with buttons below",
    //     desc: "A simple rock, paper, scissors game built using HTML, CSS, and vanilla JavaScript",
    //     repo: "https://github.com/alexandercsierra/rpsgame",
    //     url: "https://alexandercsierra.github.io/rockpaperscissors/rpsgame.html"
    // }
    

]

export const projectlist = Object.values(obj);