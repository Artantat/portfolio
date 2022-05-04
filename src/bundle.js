(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
      </div>
    `);
    document.getElementById('Root').classList.remove('dark');
  }

}

module.exports = About;

},{"../Component":3}],2:[function(require,module,exports){
const About = require('./About/About');
const Header = require('./Header/Header');
const NavBar = require('./Navigation/NavBar');
const ProjectPanel = require('./ProjectPanel/ProjectPanel');
const Footer = require('./Footer/Footer');
const DemoReel = require('./DemoReel/DemoReel');
const Contact = require('./Contact/Contact');

class App{
  constructor(){
    this.state = {
      url: '/work',
      validUrls: [
        '/bio',
        '/exp',
        '/work',
        '/contact'
      ]
    };
  }

  setState( url ){
    if(this.state.validUrls.find(element => element === url)){
      this.state.url = url;
      this.route();
    } else {
      console.log('no such url');
    }

  }

  route(){
    const root = document.getElementById('Root');
    root.innerHTML = '';
    root.classList.add('main');
    root.appendChild(new Header(
      './src/assets/profile/profile.jpeg',
      'William Castagna',
      new NavBar([
        {
          name:'Work',
          id:'nav_work',
          callback: () => this.setState.bind(this, '/work')
        },
        {
          name:'Bio',
          id:'nav_bio',
          callback: () => this.setState.bind(this, '/bio')
        },
        {
          name:'Experience',
          id:'nav_exp',
          callback: () => this.setState.bind(this, '/exp')
        },
        {
          name:'Hire Me',
          id:'nav_contact',
          callback: () => this.setState.bind(this, '/contact')
        }
      ])).component);
    // root.appendChild(new NavBar(['About','Games','Personal Projects','Contact']).component);
    switch (this.state.url) {
      case '/bio':
        document.getElementById('nav_bio').classList.add('activeNavBarItem');
        root.appendChild(new About().component);
        break;
      case '/exp':
        document.getElementById('nav_exp').classList.add('activeNavBarItem');
        root.appendChild(new ProjectPanel('GAMES',`Below you will find each game that I've worked on in my 15 years in the game industry.<br/><br/>Each entry is accompanied by some writings about the project`).component);
        break;
      case '/work':
        document.getElementById('nav_work').classList.add('activeNavBarItem');
        root.appendChild(new DemoReel().component);
        break;
      case '/contact':
        document.getElementById('nav_contact').classList.add('activeNavBarItem');
        root.appendChild(new Contact().component);
        break;
      default:
        root.appendChild(new About().component);
    }
    root.appendChild(new Footer().component);
  }
}

module.exports = App;

},{"./About/About":1,"./Contact/Contact":4,"./DemoReel/DemoReel":5,"./Footer/Footer":8,"./Header/Header":10,"./Navigation/NavBar":11,"./ProjectPanel/ProjectPanel":13}],3:[function(require,module,exports){
// NOTE: when using the events addEventlistener it seems if you later manipulate
// the innerHTML on the component the listener is then lost... this may be from
// the id missing? I wonder if this would happen if i supplied an id: for the expand


class Component{
  constructor(elementType='div', attrs={}, events={}){
    this.elementType = elementType;
    this.attrs = attrs;
    if(!this.attrs.class){
      this.attrs.class = 'default';
    }
    this.events = events;

    this.component = document.createElement(this.elementType);
    this.component.classList.add(this.attrs.classes);
    for(let attr in this.attrs){
      this.component.setAttribute(attr,this.attrs[attr]);
    }
    for(let evnt in this.events){
      console.log(evnt);
      console.log(this.events[evnt]);
      this.component.addEventListener(evnt, this.events[evnt]);
      // console.log(test);
    }
  }

  getHTML(){
    return this.component.outerHTML;
  }

  toJSON(){
    return JSON.stringify({
      elementType: this.elementType,
      attrs: this.attrs
    });
  }

  getEventNames(){
    const eventNames = [];
    for (let evnt in this.events){
      eventNames.push(evnt);
    }
    return eventNames;
  }
}

module.exports = Component;

},{}],4:[function(require,module,exports){
const Component = require('../Component');
const BASE_URL = require('../../init');
const { validateEmail, validateFields } = require('../../utils');

class Contact extends Component {
  constructor(){
    super('div');
    this.component.classList.add('contactContainer');
    const submitbtn = new Component('button');
    submitbtn.component.classList.add('contactSubmit');
    document.getElementById('Root').classList.remove('dark');
    submitbtn.component.id = 'submitbtn';
    submitbtn.component.innerText = 'Submit';
    submitbtn.component.onclick = (event) =>{
      const email = document.getElementById('email').value;
      const name = document.getElementById('contactName').value;
      const type = document.getElementById('contactType').value;
      const message = document.getElementById('contactMessage').value;

      const fields = [email, name, type, message];
      if (validateFields(fields) && validateEmail(email)){
        fetch(`${BASE_URL}/submitemail`, {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            name: name,
            email: email,
            type: type,
            message: message
          })
        })
        .then(response => {
          console.log(response);
          if (response.status === 200){
            return response.json();
          } else {
            throw new Error(`Error ${response.status} Please try again later.`);
          }

        })
        .then(data => {
          this.component.innerHTML = (`
            <div class="contactThanks">${data.email},</br></br>Thanks for reaching out! I'll get back to you as soon as i can.</br>In the mean time follow me on on my socials or check out my blog. </br></br>Regards,</br>William Castagna</div>
            `);
        })
        .catch(err => {
          this.component.innerHTML = (`
            <div class="contactThanks contactError">${err}</div>
          `);
        });
      } else if (!validateFields(fields)){
        document.getElementById('contactSubmitError').innerHTML = 'Some required fields are empty please ensure to fill all fields';
      } else if (!validateEmail(email)){
        document.getElementById('contactSubmitError').innerHTML = 'Please enter valid e-mail address.';
      }

    };

    this.component.innerHTML = (`
      <form class="contactForm" onsubmit="return false">
        <div class="contactLabels" for="contactName"> Name </div>
        <input class="contactName" id="contactName" type="text" required/>
        </br>
        <div class="contactLabels" for="email"> Email </div>
        <input class="contactInput" id="email" type="email" required/>
        <div class="contactValidError" id="emailValidation" for="email"></div>
        </br>
        <div class="contactLabels" for="contactType">Reason to get in touch</div>
        <div class="wrapper">
          <select id="contactType" class="contactDropdown">
            <option value="jobgames">Hire me for Games</option>
            <option value="jobweb">Hire me for Web</option>
            <option value="jobconsult">Hire for consultations</option>
            <option value="collab">Collaborate on personal project</option>
          </select>
        </div>
        </br>
        <div class="contactLabels" for="contactMessage">Message</div>
        <textarea class="contactMessage" id="contactMessage" type="text" maxlength="250" required></textarea>
        <div class="contactValidError" id="contactMessageValid" for="contactMessage"></div>
        <div class="contactValidError" id="contactSubmitError" for="submitbtn"></div>
        </br>
      </form>
    `);
    this.component.children[0].appendChild(submitbtn.component);
    for (let child of this.component.children[0]){
      if (child.id === 'email'){
        child.oninput = (event) => {
          if (validateEmail(event.target.value)){
            document.getElementById('emailValidation').innerHTML = '';
          } else {
            document.getElementById('emailValidation').innerHTML = (`
              Emails should have @ and .com ex. test@test.com
              `);
          }
        };
      }
      if (child.id === 'contactMessage'){
        child.oninput = (event) =>{
          document.getElementById('contactMessageValid').innerHTML = (`
            message ${event.target.value.length} / 250
          `);
        }
      }
    }

  }


}

module.exports = Contact;

},{"../../init":15,"../../utils":17,"../Component":3}],5:[function(require,module,exports){
const Component = require('../Component');

class DemoReel extends Component {
  constructor(title='Demo Reel', description='Something about demo reel'){
    super('div');
    this.component.classList.add('demoReelContainer');
    this.component.innerHTML = (`
      <video class="demoReelVideo" controls>
        <source src="" type="video/mp4" alt="Demo Reel">
      </video>

    `);
    document.getElementById('Root').classList.add('dark');
  }

}

module.exports = DemoReel;

},{"../Component":3}],6:[function(require,module,exports){
const Component = require('../Component');
const GameProject = require('../GameProject/GameProject');
const exp = require('./Experience_data.js');

// refactor this component to be more procedural.

class Experience extends Component{
  constructor(){
    super('div',{class:'exp',id:'exp'});
    // this.component.classList.add('exp');
    // this.component.id = 'exp';
    const constructExp = (studio, studioTime, projects) =>{
      const creds = new Component('div',{class:'expStudio',id:studio});
      creds.component.innerHTML = (`
        <div class='expStudioHeader'>
          <div class='expStudio'>${studio}</div>
          <div class='expStudioTime'>${studioTime}</div>
        </div>
      `);

      const box = new Component('div',{class:'expBox'});

      for (let project of projects){
        // console.log('project', project);
        const entry = new Component('div',{class:'expEntry', id:`entry_${project.id}`});
        const expand = new Component('div', {class:'expExpand', id:project.id}, {
            click: (event) => {
            const target = event.target;
            console.log('target',target);
            target.toggleAttribute('expanded');
            if(target.attributes.expanded){
              target.parentElement.appendChild(new GameProject(project.imgsrc, project.title,  project.skillTags, project.description,{id:`full_${project.id}`}).component);
            } else {
              const remove = document.getElementById(`full_${project.id}`);
              target.parentElement.removeChild(remove);
            }
          }
        });

        const position = new Component('div',{class:'expPos'});
        const title = new Component('div',{class:'expTitle'});
        // console.log('expand',expand.events);
        position.component.innerHTML = project.position;
        title.component.innerHTML = project.title;

        expand.component.appendChild(position.component);
        expand.component.appendChild(title.component);

        entry.component.appendChild(expand.component);
        box.component.appendChild(entry.component);
        creds.component.appendChild(box.component);
      }

      return creds;
    }

    const bioware = [];
    const vv = [];
    const edge = [];

    for (let project of exp){
      if (project.studio === 'Bioware'){
        bioware.push(project);
      } else if (project.studio === 'Vicarious Visions'){
        vv.push(project);
      } else if (project.studio === 'Edge of Reality'){
        edge.push(project);
      }
    }

    // const biowareCreds = new Component('div',{class:'expStudio',id:'Bioware'});
    // const vvCreds = new Component('div',{class:'expStudio',id:'Vicarious'});
    // const edgeCreds = new Component('div',{class:'expStudio',id:'Edge'});
    //
    // biowareCreds.component.innerHTML = (`
    //   <div class='expStudioHeader'>
    //     <div class='expStudio'>Bioware - Austin TX</div>
    //     <div class='expStudioTime'>Sept 2020 - Present</div>
    //   </div>
    // `);
    //
    // vvCreds.component.innerHTML = (`
    //   <div class='expStudioHeader'>
    //     <div class='expStudio'>Vicarius Visions - Albany NY</div>
    //     <div class='expStudioTime'>Sept 2008 - Sept 2020</div>
    //   </div>
    // `);
    //
    // edgeCreds.component.innerHTML = (`
    //   <div class='expStudioHeader'>
    //     <div class='expStudio'>Edge of Reality - Austin TX</div>
    //     <div class='expStudioTime'>Mar 2007 - Sept 2008</div>
    //   </div>
    // `);
    //
    // const box = new Component('div',{class:'expBox'});
    //
    // for (let project of bioware){
    //   // console.log('project', project);
    //   const entry = new Component('div',{class:'expEntry', id:`entry_${project.id}`});
    //   const expand = new Component('div', {class:'expExpand', id:project.id}, {click: (event) => {
    //     const target = event.target;
    //     console.log('target',target);
    //     target.toggleAttribute('expanded');
    //     if(target.attributes.expanded){
    //       target.parentElement.appendChild(new GameProject(project.imgsrc, project.title,  project.skillTags, project.description,{id:`full_${project.id}`}).component);
    //     } else {
    //       const remove = document.getElementById(`full_${project.id}`);
    //       target.parentElement.removeChild(remove);
    //     }
    //   }});
    //
    //   const position = new Component('div',{class:'expPos'});
    //   const title = new Component('div',{class:'expTitle'});
    //   // console.log('expand',expand.events);
    //   position.component.innerHTML = project.position;
    //   title.component.innerHTML = project.title;
    //
    //   expand.component.appendChild(position.component);
    //   expand.component.appendChild(title.component);
    //
    //   entry.component.appendChild(expand.component);
    //   box.component.appendChild(entry.component);
    //   biowareCreds.component.appendChild(box.component);
    // }
    // console.log(biowareCreds.component);
    // box.component.appendChild(biowareCreds)

    // this.component.appendChild(biowareCreds.component);
    // this.component.appendChild(vvCreds.component);
    // this.component.appendChild(edgeCreds.component);

    this.component.appendChild(constructExp('Bioware - Austin TX','Sept 2020 - Present',bioware).component);
    this.component.appendChild(constructExp('Vicarius Visions - Albany NY','Sept 2008 - Sept 2020',vv).component);
    this.component.appendChild(constructExp('Edge of Reality - Austin TX','Mar 2007 - Sept 2008',edge).component);
    // this.component.innerHTML = (`
    //   <div class='description'>
    //     <div id='descriptionBox' class='descriptionBox'>
    //     <div class='expGames'>
    //       <div id='expGamesTitle' class='expGamesTitle'>Experience</div>
    //       <div id='bioware'>
    //         <div class='expStudioHeader'>
    //           <div class='expStudio'>Bioware - Austin TX</div>
    //           <div class='expStudioTime'>Sept 2020 - Present</div>
    //         </div>
    //         <div class='aboutGameBox'>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Lead</div>
    //             <div class='aboutGameTitle'>SWTOR - Legacy of the Sith</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Artist</div>
    //             <div class='aboutGameTitle'>SWTOR - The Dark Descent</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div id='vv'>
    //         <div class='expStudioHeader'>
    //           <div class='expStudio'>Vicarious Visions - Albany NY</div>
    //           <div class='expStudioTime'>Sept 2008 - Sept 2020</div>
    //         </div>
    //         <div class='aboutGameBox'>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Artist</div>
    //             <div class='aboutGameTitle'>Tony Hawk Pro Skater: 1+2 Remaster</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Artist</div>
    //             <div class='aboutGameTitle'>Destiny 2 - Black Armory</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Artist</div>
    //             <div class='aboutGameTitle'>Destiny 2 - War Mind</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Artist</div>
    //             <div class='aboutGameTitle'>Skylanders: Imaginators - Crash Action Pack</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior Artist</div>
    //             <div class='aboutGameTitle'>Skylanders: Trap Team Tablet</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Lead Artist</div>
    //             <div class='aboutGameTitle'>Skylanders: Lost Islands</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Environment Artist</div>
    //             <div class='aboutGameTitle'>Sklanders: Spyro's Adventure 3ds</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Environment Artist</div>
    //             <div class='aboutGameTitle'>DJ Hero 3ds</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Environment Artist</div>
    //             <div class='aboutGameTitle'>Band Hero</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Environment Artist</div>
    //             <div class='aboutGameTitle'>Marvel Ultimate Alliance 2</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div id='edge'>
    //         <div class='expStudioHeader'>
    //           <div class='expStudio'>Edge of Reality - Austin TX</div>
    //           <div class='expStudioTime'>Mar 2007 - Sept 2008</div>
    //         </div>
    //         <div class='aboutGameBox'>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Environment Artist</div>
    //             <div class='aboutGameTitle'>The Incredible Hulk</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // `);

  }

}

module.exports = Experience;

},{"../Component":3,"../GameProject/GameProject":9,"./Experience_data.js":7}],7:[function(require,module,exports){
const exp = [
  {
    id:'SWTOR-Descent',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'SWTOR - The Dark Descent',
    position: 'Senior VFX Artist',
    studio: 'Bioware',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'SWTOR-LegacySith',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'SWTOR - Legacy of the Sith',
    position: 'Lead VFX Artist',
    studio: 'Bioware',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'THPS',
    imgsrc: './src/assets/gameboxes/thps.jpg',
    title: 'Tony Hawk Pro Skater: 1+2 Remaster',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX', 'Destruction', 'Houdini', 'Unreal 4'],
    description: (`
      This was such a fun project to work on! Though our team was relatively small we were able to do a lot. I focused much of my time on destruction, using tools such as Houdini to create sims and building a viable pipeline for the game. We were pushing for 60fps so we had to be really creative in how we implemented things.
      <br/>
      <br/>
      One huge leg up we had was actually using Unreal 4. Had we tried to use a homebrew I have doubts we would have been able to finish the game at quality in the time we had. I believe we knocked this out in around a year or so from scratch. There was such nestalgia working on this game. I remember growing up playing this and being addicted to it.
      `)
  },
  {
    id:'Destiny-Armory',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'Destiny 2: Black Armory',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'Destiny-Warmind',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'Destiny 2 - War Mind',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'Skylanders:Imaginators-Crash',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'Skylanders: Imaginators - Crash Action Pack',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'Skylanders:SuperChargers',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'Skylanders: Super Chargers',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'Skylanders:TrapTeam',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'Skylanders: Trap Team Tablet',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'Skylanders:LostIslands',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'Skylanders: Lost Islands',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'Skylanders:Spyro3ds',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: `Sklanders: Spyro's Adventure 3ds`,
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'DJHero',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'DJ Hero 3ds',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'BandHero',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'Band Hero',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'MUA2',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'Marvel Ultimate Alliance 2',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'Hulk',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'The Incredible Hulk',
    position: 'Senior VFX Artist',
    studio: 'Edge of Reality',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },

];

module.exports = exp;

},{}],8:[function(require,module,exports){
const Component = require('../Component');

const footerIcons = [
  {
    name: 'GitHub',
    src: './src/assets/icons/github_icon.png',
    link: 'https://github.com/Artantat'
  },
  {
    name: 'LinkedIn',
    src: './src/assets/icons/linkedin_icon.png',
    link: 'https://www.linkedin.com/in/wcastagna/'
  },
  {
    name: 'OpenSea',
    src: './src/assets/icons/opensea_icon.svg',
    link: 'https://opensea.io/Artantat'
  },
  {
    name: 'Redbubble',
    src: './src/assets/icons/redbubble_icon.png',
    link: 'https://www.redbubble.com/people/Artantat/shop'
  },
  {
    name: 'Twitter',
    src: './src/assets/icons/twitter_icon.png',
    link: 'https://twitter.com/Artantat'
  }
];

const getFooterIcons = () =>{
  footerHtml = '';
  for (let icon of footerIcons){
    footerHtml += `<a href="${icon.link}" class="footerIcon"><img class="footerIconImg" src="${icon.src}" alt="${icon.name}" /></a>`;
  }

  return footerHtml;
}

class Footer extends Component{
  constructor(){
    super('div');
    this.component.classList.add('footer');
    this.component.id = 'footer';
    this.component.innerHTML = (`
      <div class="footerBlock">
        ${getFooterIcons()}
      </div>
      <p class="copywrite">\xA9 copyright William Castagna 2022. All rights reserved.</p>
    `);

  }

}

module.exports = Footer;

},{"../Component":3}],9:[function(require,module,exports){
const SkillTagBox = require('../SkillTag/SkillTagBox');
const Component = require('../Component');

class GameProject extends Component{
  constructor(imgsrc='../../assets/gameboxes/default.jpg', title='Game Credit', skillTags=['art', 'banana','apple','squiggle','orange','zippy'], description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',attrs={},events={}){
    super('div',attrs);
    this.component.classList.add('gameContainer');
    this.component.innerHTML = (`
      <div class="gameTitle">${title}</div>
      <div class="gameContent">
        <img
          src="${imgsrc}"
          alt="${title} image"
          class="gameImg"
        />
        ${description}
      </div>
      ${new SkillTagBox(skillTags).getHTML()}

    `);

  }

}

module.exports = GameProject;

},{"../Component":3,"../SkillTag/SkillTagBox":14}],10:[function(require,module,exports){
const Component = require('../Component');
const NavBar = require('../Navigation/NavBar');

class Header extends Component {
  constructor(pic, name, navbar ){
    super('div');
    this.component.classList.add('header');
    this.component.id = 'header';
    this.component.innerHTML = (`
      <div class="banner" id='banner'>
        <img src="${pic}" alt="Picture" class="logo"/>
        <div>
          <div class='headerName'>${name}</div>
          <div class='headerPos'>VFX, Creative, & Code</div>
        </div>
      </div>
    `);
    this.component.children[0].appendChild(navbar.component);
    // this.component.appendChild(navbar.component);
  }
}

module.exports = Header;

},{"../Component":3,"../Navigation/NavBar":11}],11:[function(require,module,exports){
const Component = require('../Component');
const NavBarItem = require('./NavBarItem');

class NavBar extends Component{
  constructor(items=[]){
    super('nav');
    this.component.classList.add('navBar');
    for (let item of items){
      this.component.appendChild(new NavBarItem(item.name,item.id, item.callback).component);
    }

  }
}

module.exports = NavBar;

},{"../Component":3,"./NavBarItem":12}],12:[function(require,module,exports){
const Component = require('../Component');

class NavBarItem extends Component {
  constructor(title,id, callback){
    super('div');
    this.component.classList.add('navBarItem');
    this.component.id = id;
    this.component.innerText = title;
    this.component.addEventListener('click', callback());

  }
}

module.exports = NavBarItem;

},{"../Component":3}],13:[function(require,module,exports){
const Component = require('../Component');
const GameProject = require('../GameProject/GameProject');
const Experience = require('../Experience/Experience');
const BASE_URL = require('../../init');

class ProjectPanel extends Component{
  constructor(
    title='Projects',
    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projectUrl=`${BASE_URL}/projectsgames`
  ){
    super('div');
    this.component.classList.add('projectPanel');
    this.component.appendChild(new Experience().component);
    fetch(projectUrl)
      .then(response => response.json())
      .then(projects =>{
        // let html = this.component.innerHTML;
        // html += (`
        //   <div class="projectCollectionHeader">
        //     <div class="projectCollectionTitle">${title}</div>
        //     <div class="projectCollectionDescription">${description}</div>
        //   </div>
        // `);
        // for (let project of projects){
        //   this.component.appendChild(new GameProject(project.imgsrc, project.title,  project.skillTags, project.description).component);
        // }
        // this.component.innerHTML = html;
      });
      document.getElementById('Root').classList.remove('dark');
  }
}

module.exports = ProjectPanel;

},{"../../init":15,"../Component":3,"../Experience/Experience":6,"../GameProject/GameProject":9}],14:[function(require,module,exports){
// const SkillTag = require('./SkillTag');
const Component = require('../Component');

class SkillTagBox extends Component{
  constructor(skillTags=[]){
    super('div');
    this.component.classList.add('skillTagBox');
    let html = '';
    for (let skilltag of skillTags){
      html += `<div class="skillTag">${skilltag}</div>`;
    }
    this.component.innerHTML = html;
  }
}

module.exports = SkillTagBox;

},{"../Component":3}],15:[function(require,module,exports){
 const BASE_URL = "https://will-cast-portfolio.herokuapp.com";

 module.exports = BASE_URL;

},{}],16:[function(require,module,exports){
const App = require('./components/App');

const app = new App();
app.route();

},{"./components/App":2}],17:[function(require,module,exports){


const validateEmail = (email) => {
  const regEx = /^[0-9a-zA-Z]+$/;
  const at = email.indexOf('@');
  const com = email.lastIndexOf('.com');
  if(at === -1 || com === -1){
    return false;
  } else if (at > com){
    return false;
  }
  return true;
}

const validateFields = (fields) => {
  for (field of fields){
    if (field.length === 0){
      return false;
    }
  }
  return true;
}

module.exports = { validateEmail, validateFields };

},{}]},{},[16]);
