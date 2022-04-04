(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Component = require('../Component');
// import './About.css
// require('./About.css');

const studios = [
  {
    name: 'Edge of Reality',
    location: 'Austin, TX',
    logo: 'eor_logo.jpg',
    yearsofservice: '1 year 6 months',
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
    this.component.innerHTML = (`
      <div class='description'>
      <img src="${pic}" alt="Picture" class="profilePic"/>
        <p>
          Hi! Thanks for dropping by!
        </p>
        <p>
          I've been a Game Developer for ${new Date(new Date() - new Date(2006, 8, 1))} working at ${studios.length} studios. It's been a great pleasure working in this industry full of so many talented people and amazing teams.
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
        root.appendChild(new ProjectPanel('Games',`Below you will find each game that I've worked on in my 15 years in the game industry.<br/><br/>Each entry is accompanied by some writings about the project`).component);
        break;
      case '/webapps':
        root.appendChild(new ProjectPanel('Web Apps',`Here you can find a collection of WebApps that I've created`).component);
        break;
      default:
        root.appendChild(new About().component);
    }
    root.appendChild(new Footer().component);
  }
}

module.exports = App;

},{"./About/About":1,"./Footer/Footer":4,"./Header/Header":6,"./Navigation/NavBar":7,"./ProjectPanel/ProjectPanel":9}],3:[function(require,module,exports){
class Component{
  constructor(elementType){
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

},{"../Component":3}],5:[function(require,module,exports){
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

},{"../Component":3,"../SkillTag/SkillTagBox":10}],6:[function(require,module,exports){
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

},{"../Component":3,"../Navigation/NavBar":7}],7:[function(require,module,exports){
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

},{"../Component":3,"./NavBarItem":8}],8:[function(require,module,exports){
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

},{"../Component":3}],9:[function(require,module,exports){
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
          html += new GameProject(project.imgsrc, project.title,  project.skillTags).getHTML();
        }
        this.component.innerHTML = html;
      });

  }
}

module.exports = ProjectPanel;

},{"../Component":3,"../GameProject/GameProject":5}],10:[function(require,module,exports){
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

},{"../Component":3}],11:[function(require,module,exports){
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

},{"./components/App":2}]},{},[11]);
