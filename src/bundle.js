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
    // this.component.classList.add('about');
    this.component.innerHTML = (`
      <div class='about' id='about'>
        <div class='aboutTitle'>
          <img src="${pic}" alt="Picture" class="profilePic"/>
          <div class='aboutName'>${name}</div>
        </div>
        <div class='description'>
          <p>
            Hi! Thanks for dropping by! I've been a Game Developer for ${new Date(new Date() - new Date(2006, 8, 1))} working at ${studios.length} studios. It's been a great pleasure working in this industry full of so many talented people and amazing teams.
          </p>
          <p>
            When I'm not working on making games, I spend most of my time learning new skills through a variety of resources such as Udemy, Linkedin Learn and tranditional classes. check out my learning section for resources i've found useful as well as tutorials and resources I've created.
          </p>
        </div>
      </div>
    `);

  }

}

module.exports = About;

},{"../Component":3}],2:[function(require,module,exports){
const About = require('./About/About');
const NavBar = require('./Navigation/NavBar');
const ProjectPanel = require('./ProjectPanel/ProjectPanel');
const Footer = require('./Footer/Footer');

class App{
  constructor(){
    this.state = {
      url: 'about'
    };
  }

  setState( url ){
    this.state.url = url;
    this.route();
  }

  route(){
    const root = document.getElementById('Root');
    root.innerHTML = '';
    root.appendChild(new NavBar(['About','Games','Personal Projects','Contact']).component);
    switch (this.state.url) {
      case 'about':
        root.appendChild(new About().component);
        break;
      case 'projectpanel':
        root.appendChild(new ProjectPanel().component);
        break;
      default:
        root.appendChild(new About().component);
    }
    root.appendChild(new Footer().component);
  }
}

module.exports = App;

},{"./About/About":1,"./Footer/Footer":4,"./Navigation/NavBar":9,"./ProjectPanel/ProjectPanel":11}],3:[function(require,module,exports){
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
    name: '',
    src: '',
    link: ''
  }
];

const getFooterIcons = () =>{
  footerHtml = '';
  for (let icon of footerIcons){
    footerHtml += `<a href="${icon.link}"><img class="footerIcon" src="${icon.src}" alt="${icon.name}" /></a>`;
  }
  return footerHtml;
}

class Footer extends Component{
  constructor(){
    super('div');
    this.component.innerHTML = (`
      <div class='footer' id='footer'>
        ${getFooterIcons()}
      </div>
    `);

  }

}

module.exports = Footer;

},{"../Component":3}],5:[function(require,module,exports){
const Component = require('../Component');

class GameBoxImg extends Component {
  constructor(img, altTxt){
    super('img');
    this.component.classList.add('gameBox');
    this.component.setAttribute('alt', altTxt);
    this.component.setAttribute('src', img);
  }
}

module.exports = GameBoxImg;

},{"../Component":3}],6:[function(require,module,exports){
const SkillTagBox = require('../SkillTag/SkillTagBox');
const GameTitle = require('./GameTitle');
const GameBoxImg = require('./GameBoxImg');
const Component = require('../Component');

class GameCredit extends Component{
  constructor(imgsrc='./src/assets/gameboxes/default.jpg', title='Game Credit', skillTags=['art', 'banana','apple','squiggle','orange','zippy']){
    super('div');

    this.component.classList.add('gameCreditContainer');
    let innerComponents = '';
    innerComponents += new GameBoxImg(imgsrc, `${title} image`).getHTML();
    innerComponents += new GameTitle(title).getHTML();
    innerComponents += new SkillTagBox(skillTags).getHTML();
    this.component.innerHTML = innerComponents;
  }

}

module.exports = GameCredit;

},{"../Component":3,"../SkillTag/SkillTagBox":14,"./GameBoxImg":5,"./GameTitle":8}],7:[function(require,module,exports){
const GameCredit = require('./GameCredit');
const Component = require('../Component');

class GameCreditBox extends Component{
  constructor(gameCredits=[]){
    super('div');
    this.component.classList.add('gameCreditBox');
    let html = '';
    for (let gameCredit of gameCredits){
      html += gameCredit.getHTML();
    }
    this.component.innerHTML = html;
  }
}

module.exports = GameCreditBox;

},{"../Component":3,"./GameCredit":6}],8:[function(require,module,exports){
const Component = require('../Component');

class GameTitle extends Component {
  constructor(title){
    super('div');
    this.component.classList.add('gameTitle');
    this.component.innerText = title;
  }
}

module.exports = GameTitle;

},{"../Component":3}],9:[function(require,module,exports){
const Component = require('../Component');
const NavBarItem = require('./NavBarItem');

class NavBar extends Component{
  constructor(items=[]){
    super('nav');
    this.component.classList.add('navBar');
    new NavBarItem(items[0], () => console.log('monkey'));
    for (let item of items){
      console.log(item);
      this.component.appendChild(new NavBarItem(item, () => console.log(item)).component);
      // console.log(new NavBarItem(item, ()=>{console.log('bannana');}));
      // this.component.appendChild(new NavBarItem(item,()=>console.log(item)).component);
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
    this.component.addEventListener('click', callback);
  }
}

module.exports = NavBarItem;

},{"../Component":3}],11:[function(require,module,exports){
const Component = require('../Component');
const ProjectTitle = require('./ProjectTitle');
const GameCreditBox = require('../GameProject/GameCreditBox');

class ProjectPanel extends Component{
  constructor(title='Projects', gameCredits=[]){
    super('div');
    this.component.classList.add('projectPanel');
    let html = `
      ${new ProjectTitle(title).getHTML()}
      ${new GameCreditBox(gameCredits).getHTML()}
    `;
    this.component.innerHTML = html;
  }
}

module.exports = ProjectPanel;

},{"../Component":3,"../GameProject/GameCreditBox":7,"./ProjectTitle":12}],12:[function(require,module,exports){
const Component = require('../Component');

class ProjectTitle extends Component {
  constructor(title){
    super('div');
    this.component.classList.add('projectTitle');
    this.component.innerText = title;
  }
}

module.exports = ProjectTitle;

},{"../Component":3}],13:[function(require,module,exports){
const Component = require('../Component');

class SkillTag extends Component {
  constructor(tag){
    super('div');
    this.component.classList.add('skillTag');
    this.component.innerText = tag;
  }
}

module.exports = SkillTag;

},{"../Component":3}],14:[function(require,module,exports){
const SkillTag = require('./SkillTag');
const Component = require('../Component');

class SkillTagBox extends Component{
  constructor(skillTags=[]){
    super('div');
    this.component.classList.add('skillTagBox');
    let skills = '';
    for (let skilltag of skillTags){
      skills += (new SkillTag(skilltag)).getHTML();
    }
    this.component.innerHTML = skills;
  }
}

module.exports = SkillTagBox;

},{"../Component":3,"./SkillTag":13}],15:[function(require,module,exports){
const gamecredits = [
  {
    imgsrc: '../src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'Destiny 2: Black Armory',
    skillTags: ['VFX','Shader FX','Character FX']
  },
  {
    imgsrc: '../src/assets/gameboxes/thps.jpg',
    title: 'Tony Hawk 1 + 2: Remaster',
    skillTags: ['VFX','Shader FX','Character FX', 'Destruction', 'Houdini', 'Unreal 4']
  }
];

module.exports = gamecredits;

},{}],16:[function(require,module,exports){
const GameCredit = require('./components/GameProject/GameCredit');
const ProjectPanel = require('./components/ProjectPanel/ProjectPanel');
const NavBar = require('./components/Navigation/NavBar');
const gamecredits = require('./data/data_gamecredits');
const About = require('./components/About/About');
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

},{"./components/About/About":1,"./components/App":2,"./components/GameProject/GameCredit":6,"./components/Navigation/NavBar":9,"./components/ProjectPanel/ProjectPanel":11,"./data/data_gamecredits":15}]},{},[16]);
