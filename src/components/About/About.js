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
      <div class='aboutheader'>

      </div>
      <div class='description'>
        <div id='descriptionBox' class='descriptionBox'>
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
        <div class='aboutGames'>
          <div id='aboutGamesTitle' class='aboutSectionTitle'>Experience</div>
          <div id='bioware'>
            <div class='aboutGameStudioHeader'>
              <div class='aboutGameStudio'>Bioware - Austin TX</div>
              <div class='aboutStudioTime'>Sept 2020 - Present</div>
            </div>
            <div class='aboutGameBox'>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Senior VFX Lead</div>
                <div class='aboutGameTitle'>SWTOR - Legacy of the Sith</div>
              </div>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Senior VFX Artist</div>
                <div class='aboutGameTitle'>SWTOR - The Dark Descent</div>
              </div>
            </div>
          </div>
          <div id='vv'>
            <div class='aboutGameStudioHeader'>
              <div class='aboutGameStudio'>Vicarious Visions - Albany NY</div>
              <div class='aboutStudioTime'>Sept 2008 - Sept 2020</div>
            </div>
            <div class='aboutGameBox'>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Senior VFX Artist</div>
                <div class='aboutGameTitle'>Tony Hawk Pro Skater: 1+2 Remaster</div>
              </div>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Senior VFX Artist</div>
                <div class='aboutGameTitle'>Destiny 2 - Black Armory</div>
              </div>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Senior VFX Artist</div>
                <div class='aboutGameTitle'>Destiny 2 - War Mind</div>
              </div>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Senior VFX Artist</div>
                <div class='aboutGameTitle'>Skylanders: Imaginators - Crash Action Pack</div>
              </div>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Senior Artist</div>
                <div class='aboutGameTitle'>Skylanders: Trap Team Tablet</div>
              </div>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Lead Artist</div>
                <div class='aboutGameTitle'>Skylanders: Lost Islands</div>
              </div>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Environment Artist</div>
                <div class='aboutGameTitle'>Sklanders: Spyro's Adventure 3ds</div>
              </div>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Environment Artist</div>
                <div class='aboutGameTitle'>DJ Hero 3ds</div>
              </div>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Environment Artist</div>
                <div class='aboutGameTitle'>Band Hero</div>
              </div>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Environment Artist</div>
                <div class='aboutGameTitle'>Marvel Ultimate Alliance 2</div>
              </div>
            </div>
          </div>
          <div id='edge'>
            <div class='aboutGameStudioHeader'>
              <div class='aboutGameStudio'>Edge of Reality - Austin TX</div>
              <div class='aboutStudioTime'>Mar 2007 - Sept 2008</div>
            </div>
            <div class='aboutGameBox'>
              <div class='aboutGame'>
                <div class='aboutGamePos'>Environment Artist</div>
                <div class='aboutGameTitle'>The Incredible Hulk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);

  }

}

module.exports = About;
