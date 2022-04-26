const Component = require('../Component');



class About extends Component{
  constructor(pic='./src/assets/profile/profile.jpeg', name='Artantat', header='Healine', description='Something About me'){
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
          I've been a Game Developer for ${expTimeYears}y ${expTimeMonths}m ${expTimeDaysRemaining}d working at 3 studios in that time. It's been a great pleasure working in this industry full of so many talented people and amazing teams.
        </p>
        <p>
          When I'm not working on making games, I spend most of my time learning new skills through a variety of resources such as Udemy, Linkedin Learn and tranditional classes. check out my learning section for resources i've found useful as well as tutorials and resources I've created.
        </p>
      </div>
    `);

  }

}

module.exports = About;
