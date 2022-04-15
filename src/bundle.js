(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
      url: '/about',
      validUrls: [
        '/about',
        '/games',
        '/webapps',
        '/demoreel',
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
      './src/assets/profile/profile.png',
      'William Castagna',
      new NavBar([
        {
          name:'About',
          callback: () => this.setState.bind(this, '/about')
        },
        {
          name:'Games',
          callback: () => this.setState.bind(this, '/games')
        },
        {
          name:'Web Apps',
          callback: () => this.setState.bind(this, '/webapps')
        },
        {
          name:'Demo Reel',
          callback: () => this.setState.bind(this, '/demoreel')
        },
        {
          name:'Contact',
          callback: () => this.setState.bind(this, '/contact')
        }
      ])).component);
    // root.appendChild(new NavBar(['About','Games','Personal Projects','Contact']).component);
    switch (this.state.url) {
      case '/about':
        root.appendChild(new About().component);
        break;
      case '/games':
        root.appendChild(new ProjectPanel('GAMES',`Below you will find each game that I've worked on in my 15 years in the game industry.<br/><br/>Each entry is accompanied by some writings about the project`).component);
        break;
      case '/webapps':
        root.appendChild(new ProjectPanel('Web Apps',`Here you can find a collection of WebApps that I've created`).component);
        break;
      case '/demoreel':
        root.appendChild(new DemoReel().component);
        break;
      case '/contact':
        root.appendChild(new Contact().component);
        break;
      default:
        root.appendChild(new About().component);
    }
    root.appendChild(new Footer().component);
  }
}

module.exports = App;

},{"./About/About":1,"./Contact/Contact":4,"./DemoReel/DemoReel":5,"./Footer/Footer":6,"./Header/Header":8,"./Navigation/NavBar":9,"./ProjectPanel/ProjectPanel":11}],3:[function(require,module,exports){
class Component{
  constructor(elementType='div'){
    this.component = document.createElement(elementType);
  }

  getHTML(){
    return this.component.outerHTML;
  }

  toJSON(){
    let obj = {
      elementType: this.component.nodeName,
      attributes: {},
      innerHTML: this.component.innerHTML
    };
    for (let attr of this.component.getAttributeNames()){
      obj.attributes[attr] = this.component.getAttribute(attr);
    }
    return JSON.stringify(obj);
  }

  static fromJSON(obj){
    obj = JSON.parse(obj);
    let newComp = new Component(obj.elementType);
    for (let attr in obj.attributes){
      newComp.component.setAttribute(attr,obj.attributes[attr]);
    }
    newComp.component.innerHTML = obj.innerHTML;
    return newComp;
  }
}

module.exports = Component;

},{}],4:[function(require,module,exports){
const Component = require('../Component');

class Contact extends Component {
  constructor(){
    super('div');
    this.component.classList.add('contactContainer');
    const submitbtn = new Component('button');
    submitbtn.component.classList.add('contactSubmit');
    submitbtn.component.innerText = 'Submit';
    submitbtn.component.onclick = (event) =>{
      // console.log(BASE_ROUTE_URL);
      // console.log('click', event, event.target, event.target.value);
      const email = document.getElementById('email').value;
      const name = document.getElementById('contactName').value;
      const type = document.getElementById('contactType').value;
      const message = document.getElementById('contactMessage').value;
      fetch(`http://localhost:3002/submitemail`, {
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
        // console.log(err));
      });
    };

    this.component.innerHTML = (`
      <form class="contactForm" onsubmit="return false">
        <div class="contactLabels" for="contactName"> Name </div>
        <input class="contactName" id="contactName" type="text"/>
        </br>
        <div class="contactLabels" for="email"> Email </div>
        <input class="contactInput" id="email" type="email"/>
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
        <textarea class="contactMessage" id="contactMessage" type="text" maxlength="250"></textarea>
        </br>
      </form>
    `);
    this.component.children[0].appendChild(submitbtn.component);
    // this.component.appendChild(submitbtn.component);

  }


}

module.exports = Contact;

},{"../Component":3}],5:[function(require,module,exports){
const Component = require('../Component');

class DemoReel extends Component {
  constructor(title='Demo Reel', description='Something about demo reel'){
    super('div');
    this.component.classList.add('demoReelContainer');
    this.component.innerHTML = (`
      <div class="demoHeader">
        <div class="demoReelTitle">${title}</div>
        <div class="demoDescription">${description}</div>
      </div>
      <video class="demoReelVideo" controls>
        <source src="./src/assets/demoreel/demoreel.mp4" type="video/mp4" alt="Demo Reel">
      </video>
    `);
  }

}

module.exports = DemoReel;

},{"../Component":3}],6:[function(require,module,exports){
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
    name: 'Email',
    src: './src/assets/icons/email_icon.png',
    link: 'mailto: wcastagna@gmail.com'
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
    // console.log(icon);
    footerHtml += `<a href="${icon.link}" class="footerIcon"><img class="footerIconImg" src="${icon.src}" alt="${icon.name}" /></a>`;
  }
  // console.log(footerHtml);
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

},{"../Component":3}],7:[function(require,module,exports){
const SkillTagBox = require('../SkillTag/SkillTagBox');
// const GameTitle = require('./GameTitle');
// const GameBoxImg = require('./GameBoxImg');
const Component = require('../Component');

class GameProject extends Component{
  constructor(imgsrc='./src/assets/gameboxes/default.jpg', title='Game Credit', skillTags=['art', 'banana','apple','squiggle','orange','zippy'], description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'){
    super('div');

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
    // let innerComponents = '';
    // innerComponents += new GameBoxImg(imgsrc, `${title} image`).getHTML();
    // innerComponents += new GameTitle(title).getHTML();
    // innerComponents += new SkillTagBox(skillTags).getHTML();
    // this.component.innerHTML = innerComponents;
  }

}

module.exports = GameProject;

},{"../Component":3,"../SkillTag/SkillTagBox":12}],8:[function(require,module,exports){
const Component = require('../Component');
const NavBar = require('../Navigation/NavBar');

class Header extends Component {
  constructor(pic, name, navbar ){
    super('div');
    this.component.classList.add('header');
    this.component.id = 'header';
    this.component.innerHTML = (`
      <div class="banner">
        
        <div class='headerName'>${name}</div>
      </div>
    `);
    this.component.appendChild(navbar.component);
  }
}

module.exports = Header;

},{"../Component":3,"../Navigation/NavBar":9}],9:[function(require,module,exports){
const Component = require('../Component');
const NavBarItem = require('./NavBarItem');

class NavBar extends Component{
  constructor(items=[]){
    super('nav');
    this.component.classList.add('navBar');
    for (let item of items){
      this.component.appendChild(new NavBarItem(item.name, item.callback).component);
    }

  }
}

module.exports = NavBar;

},{"../Component":3,"./NavBarItem":10}],10:[function(require,module,exports){
const Component = require('../Component');

class NavBarItem extends Component {
  constructor(title, callback){
    super('div');
    this.component.classList.add('navBarItem');
    this.component.innerText = title;
    this.component.addEventListener('click', callback());

  }
}

module.exports = NavBarItem;

},{"../Component":3}],11:[function(require,module,exports){
const Component = require('../Component');
const GameProject = require('../GameProject/GameProject');

class ProjectPanel extends Component{
  constructor(
    title='Projects',
    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projectUrl='http://localhost:3002/projectsgames'
  ){
    super('div');
    this.component.classList.add('projectPanel');
    fetch(projectUrl)
      .then(response => response.json())
      .then(projects =>{
        let html = '';
        html += (`
          <div class="projectCollectionHeader">
            <div class="projectCollectionTitle">${title}</div>
            <div class="projectCollectionDescription">${description}</div>
          </div>
        `);
        for (let project of projects){
          html += new GameProject(project.imgsrc, project.title,  project.skillTags, project.description).getHTML();
        }
        this.component.innerHTML = html;
      });

  }
}

module.exports = ProjectPanel;

},{"../Component":3,"../GameProject/GameProject":7}],12:[function(require,module,exports){
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

},{"../Component":3}],13:[function(require,module,exports){
// const GameCredit = require('./components/GameProject/GameCredit');
// const ProjectPanel = require('./components/ProjectPanel/ProjectPanel');
// const NavBar = require('./components/Navigation/NavBar');
// const gamecredits = require('./data/data_gamecredits');
// const About = require('./components/About/About');
const App = require('./components/App');

const app = new App();
app.route();
//
// const root = document.getElementById('Root');
// const nav = new NavBar(['About','Games','Personal Projects','Contact']);
// const about = new About();
// // console.log(nav);
// root.appendChild(nav.component);
// root.appendChild(about.component);
//
// var gamecred1 = new GameCredit('./src/assets/gameboxes/default.jpg','Test Game Credit', ['art', 'vfx','destruction','console','shaderFX','houdini']);
// var gamecred2 = GameCredit.fromJSON(gamecred1.toJSON());
// var gamecred3 = new GameCredit();
//
// let testCreds = [gamecred1,gamecred2,gamecred1,gamecred3];
//
//
// root.appendChild(new ProjectPanel('Projects',testCreds).component);
//
// let testCreds2 = [];
// for (let credit of gamecredits){
//   testCreds2.push(new GameCredit(credit.imgsrc,credit.title, credit.skillTags));
// }
//
// root.appendChild(new ProjectPanel('Projects 2',testCreds2).component);
//
// // let navitem = new NavBarItem('navbaritemtest', (()=>{
//   console.log('monkey');
// }));

// document.querySelector('body').appendChild(navitem.component);

},{"./components/App":2}]},{},[13]);
