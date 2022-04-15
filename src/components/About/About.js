const Component = require('../Component');
// import './About.css
// require('./About.css');

const studios = [
  {
    name: 'Edge of Reality',
    location: 'Austin, TX',
    logo: 'eor_logo.jpg',
    yearsofservice: '1 year 7 months',
    position: 'Environment Artist (Contract)',
    shippedTitles: ['Incredible Hulk'],
    description: ('This was my first Game job right out of college. It was a great learning experience and I had a lot of fun working on "The Incredible Hulk" that came out with the Ed Norton movie. I worked on city props, destruction assets and storefronts mostly')
  },
  {
    name: 'Vicarious Visions',
    location: 'Albany, NY',
    logo: 'vv_logo.jpg',
    yearsofservice: '12 years 6 months',
    position: 'Environment Art, VFX Art',
    shippedTitles: ['Marvel Ultimate Alliance', 'Guitar Hero', 'Band Hero'],
    decription: (`My second studio and currently the longest stretch I've had at one company. I had the pleasure of working on a wide variety of titles using almost as many different engines. We were a console studio mostly but also jumped into mobile for a bit. It truly was a rewarding experience having been able to work with so many talented people and on such a wide variety of games.`)
  },
  {
    name: 'Bioware',
    location: 'Austin, TX',
    logo: 'bioware_logo.jpg',
    yearsofservice: '1 years 6 months',
    position: 'Lead VFX Artist',
    shippedTitles: ['Star Wars: The Old Republic'],
    decription: (`This is my current studio which i've been working on Star Wars: The old republic. While the game has been live for about 10 years now we are actively working on modernizing it's content and with that many of it's tools and capabilties. I've worked to develope and implement new shaders and pipelines to be used by the VFX department.`)
  }
];

class About extends Component{
  constructor(pic='./src/assets/profile/profile.png', name='Artantat', header='Healine', description='Something About me'){
    super('div');
    this.component.classList.add('about');
    this.component.id = 'about';

    const expTimeSeconds = ((new Date() - new Date(2007, 2, 1))/1000);
    const expTimeMinutes = expTimeSeconds / 60;
    const expTimeHours = expTimeMinutes / 60;
    const expTimeDays = Math.floor(expTimeHours / 24);
    const expTimeYears = Math.floor(expTimeDays / 365.25);
    const expTimeMonths = Math.floor(12 * (expTimeDays / 365.25)-(expTimeYears * 12));
    const expTimeDaysRemaining = Math.floor(expTimeDays - ((expTimeYears * 365.25) + (expTimeMonths * 30.417)));

    this.component.innerHTML = (`
      <div class='description'>
      <img src="${pic}" alt="Picture" class="profilePic"/>
        <p>
          Hi! Thanks for dropping by!
        </p>
        <p>
          I've been a Game Developer for ${expTimeYears}y ${expTimeMonths}m ${expTimeDaysRemaining}d working at ${studios.length} studios in that time. It's been a great pleasure working in this industry full of so many talented people and amazing teams.
        </p>
        <p>
          When I'm not working on making games, I spend most of my time learning new skills through a variety of resources such as Udemy, Linkedin Learn and tranditional classes. check out my learning section for resources i've found useful as well as tutorials and resources I've created.
        </p>
      </div>
    `);

  }

}

module.exports = About;
