(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"../Component":1}],3:[function(require,module,exports){
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

},{"../Component":1,"../SkillTag/SkillTagBox":11,"./GameBoxImg":2,"./GameTitle":5}],4:[function(require,module,exports){
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

},{"../Component":1,"./GameCredit":3}],5:[function(require,module,exports){
const Component = require('../Component');

class GameTitle extends Component {
  constructor(title){
    super('div');
    this.component.classList.add('gameTitle');
    this.component.innerText = title;
  }
}

module.exports = GameTitle;

},{"../Component":1}],6:[function(require,module,exports){
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

},{"../Component":1,"./NavBarItem":7}],7:[function(require,module,exports){
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

},{"../Component":1}],8:[function(require,module,exports){
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

},{"../Component":1,"../GameProject/GameCreditBox":4,"./ProjectTitle":9}],9:[function(require,module,exports){
const Component = require('../Component');

class ProjectTitle extends Component {
  constructor(title){
    super('div');
    this.component.classList.add('projectTitle');
    this.component.innerText = title;
  }
}

module.exports = ProjectTitle;

},{"../Component":1}],10:[function(require,module,exports){
const Component = require('../Component');

class SkillTag extends Component {
  constructor(tag){
    super('div');
    this.component.classList.add('skillTag');
    this.component.innerText = tag;
  }
}

module.exports = SkillTag;

},{"../Component":1}],11:[function(require,module,exports){
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

},{"../Component":1,"./SkillTag":10}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
const GameCredit = require('./components/GameProject/GameCredit');
const ProjectPanel = require('./components/ProjectPanel/ProjectPanel');
const NavBar = require('./components/Navigation/NavBar');
const gamecredits = require('./data/data_gamecredits');

const root = document.getElementById('Root');
const nav = new NavBar(['About','Games','Personal Projects','Contact']);
// console.log(nav);
root.appendChild(nav.component);

var gamecred1 = new GameCredit('./src/assets/gameboxes/default.jpg','Test Game Credit', ['art', 'vfx','destruction','console','shaderFX','houdini']);
var gamecred2 = GameCredit.fromJSON(gamecred1.toJSON());
var gamecred3 = new GameCredit();

let testCreds = [gamecred1,gamecred2,gamecred1,gamecred3];


root.appendChild(new ProjectPanel('Projects',testCreds).component);

let testCreds2 = [];
for (let credit of gamecredits){
  testCreds2.push(new GameCredit(credit.imgsrc,credit.title, credit.skillTags));
}

root.appendChild(new ProjectPanel('Projects 2',testCreds2).component);

// let navitem = new NavBarItem('navbaritemtest', (()=>{
//   console.log('monkey');
// }));

// document.querySelector('body').appendChild(navitem.component);

},{"./components/GameProject/GameCredit":3,"./components/Navigation/NavBar":6,"./components/ProjectPanel/ProjectPanel":8,"./data/data_gamecredits":12}]},{},[13]);
