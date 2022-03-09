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
const Component = require('./Component');

class GameBoxImg extends Component {
  constructor(img, altTxt){
    super('img');
    this.component.classList.add('gameBox');
    this.component.setAttribute('alt', altTxt);
    this.component.setAttribute('src', img);
  }
}

module.exports = GameBoxImg;

},{"./Component":1}],3:[function(require,module,exports){
const SkillTagBox = require('./SkillTagBox');
const GameTitle = require('./GameTitle');
const GameBoxImg = require('./GameBoxImg');
const Component = require('./Component');

class GameCredit extends Component{
  constructor(imgsrc='default.jpg', title='Game Credit', skillTags=['art', 'banana','apple','squiggle','orange','zippy']){
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

},{"./Component":1,"./GameBoxImg":2,"./GameTitle":5,"./SkillTagBox":10}],4:[function(require,module,exports){
const GameCredit = require('./GameCredit');
const Component = require('./Component');

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

},{"./Component":1,"./GameCredit":3}],5:[function(require,module,exports){
const Component = require('./Component');

class GameTitle extends Component {
  constructor(title){
    super('div');
    this.component.classList.add('gameTitle');
    this.component.innerText = title;
  }
}

module.exports = GameTitle;

},{"./Component":1}],6:[function(require,module,exports){
const Component = require('./Component');

class NavBarItem extends Component {
  constructor(title, callback){
    super('div');
    this.component.classList.add('navBarItem');
    this.component.innerText = title;
    this.component.addEventListener('click', callback);
  }
}

module.exports = NavBarItem;

},{"./Component":1}],7:[function(require,module,exports){
const Component = require('./Component');
const ProjectTitle = require('./ProjectTitle');
const GameCreditBox = require('./GameCreditBox');

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

},{"./Component":1,"./GameCreditBox":4,"./ProjectTitle":8}],8:[function(require,module,exports){
const Component = require('./Component');

class ProjectTitle extends Component {
  constructor(title){
    super('div');
    this.component.classList.add('projectTitle');
    this.component.innerText = title;
  }
}

module.exports = ProjectTitle;

},{"./Component":1}],9:[function(require,module,exports){
const Component = require('./Component');

class SkillTag extends Component {
  constructor(tag){
    super('div');
    this.component.classList.add('skillTag');
    this.component.innerText = tag;
  }
}

module.exports = SkillTag;

},{"./Component":1}],10:[function(require,module,exports){
const SkillTag = require('./SkillTag');
const Component = require('./Component');

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

},{"./Component":1,"./SkillTag":9}],11:[function(require,module,exports){
class UIComponent {
  constructor(type='div', attrs={}){
    // this.parentNodeId = parentNodeId;
    this.type = type;
    this.attrs = attrs;
    this.getComponent = () => {
      const comp = document.createElement(this.type);
      for (let attr in this.attrs){
        comp.setAttribute(attr, this.attrs[attr]);
      }
      return comp;
    };
    this.component = this.getComponent();
  }

  attachToNode(node){
    return node?.appendChild(this.component);
  }

  attachToId(id){
    return document.getElementById(id)?.appendChild(this.component);
  }

  attachBySelector(selector){
    return document.querySelector(selector)?.appendChild(this.component);
  }

  attachToAllSelector(selector){
    const elements = document.querySelectorAll(selector)
    for (let element of elements){
      element.appendChild(this.component);
    }
  }

  appendComponents(components=[]){
    console.log('components', components);
    for(let component of components){
      // console.log('component', component);
      this.component.appendChild(component.component);
    }
  }

  static isUniqueId(id){
    if (document.getElementById(id)){
      return false;
    } else {
      return true;
    }
  }

  static clone(obj){
    const type = obj.type;
    const newAttrs = JSON.parse(JSON.stringify(obj.attrs));
    for (let attr in newAttrs){
      if(attr === 'id'){
        let counter = 1;
        let newId = '';
        do {
          newId = newAttrs[attr] + '_copy_' + counter++;
          // console.log(newId);
        } while (UIComponent.isUniqueId(newId) === false);
        newAttrs['id'] = newId;
        // console.log('newId',newId);
      }
    }
    const copy = new UIComponent(type,newAttrs);
    copy.component.innerText = obj.component.innerText;
    return copy;
  }

  static cloneToAllSelectors(selector, obj){
    const elements = document.querySelectorAll(selector);
    const cloned = [];
    for (let element of elements){
      const copy = UIComponent.clone(obj);
      // const copy = new UIComponent(obj.type, obj.attrs);
      element.appendChild(copy.component);
      cloned.push(copy);
    }
    return cloned;
  }

  detachComponent(parentNodeId){
    return this.component.parentElement.removeChild(this.component);
  }

  getComponent(){
    const comp = document.createElement(this.type);
    console.log(comp);
    for (let attr in this.attrs){
      console.log('attr',attr);
      comp.setAttribute(attr, this.attrs[attr]);
    }
    return comp;
  }

}

module.exports = UIComponent;

},{}],12:[function(require,module,exports){
// import "UIComponent";
const UIComponent = require('./UIComponent')

class UIGameCredit {
  constructor(imgsrc='default.jpg', title='Game Credit', id='game_id', tags=['art']){
    this.imgsrc = imgsrc;
    this.title = title;
    this.tags = tags;
    this.container = new UIComponent('div', {'class':'gameCreditContainer','id':id});
    this.component_box = new UIComponent('img', {'class':'gameBox', 'src':imgsrc});
    this.component_title = new UIComponent('div', {'class':'gameTitle'});
    this.component_title.component.innerText = title;
    this.component_tagbox = new UIComponent('div', {'class':'tagbox'});
    this.component_tags = [];
    for (let tag of tags){
      // console.log('tag',tag);
      let newtag = new UIComponent('div', {'class':'gameTag'});
      newtag.component.innerText = tag;
      this.component_tags.push(newtag);
    }
    console.log('tags',this.component_tags);
    this.component_tagbox.appendComponents(this.component_tags);
    this.container.appendComponents([
      this.component_box,
      this.component_title,
      this.component_tagbox
    ]);
  }

  attachContainer(selector){
    this.container.attachBySelector(selector);
  }
};

module.exports = UIGameCredit;

},{"./UIComponent":11}],13:[function(require,module,exports){
const UIComponent = require('./components/UIComponent');
const UIGameCredit = require('./components/UIGameCredit');

// const SkillTagBox = require('./components/SkillTagBox');
const GameCredit = require('./components/GameCredit');
const ProjectPanel = require('./components/ProjectPanel');
const NavBarItem = require('./components/NavBarItem');

console.log('uicomponent',UIComponent);
console.log('uigamecreit',UIGameCredit);

function sayHello() {
  console.log("Hello");
}

function multiply(a,b) {
  return a * b;
}
sayHello();
sayHello;

multiply(5,10);

var compTest = new UIComponent('div',{'name':'bob','class':'test','id':'banana'});
var compTest2 = new UIGameCredit('../src/assets/gameboxes/d2_blackarmory.jpg','Game Credit','monkey',['art', 'vfx','destruction']);
var compTest3 = new UIGameCredit('../src/assets/gameboxes/default.jpg','Game Credit','qui',['art', 'vfx','destruction','console','shaderFX','houdini']);
var compTest4 = new UIGameCredit('../src/assets/gameboxes/default.jpg','Game Credit','qui',['art', 'vfx','destruction','console','shaderFX','houdini']);

compTest2.attachContainer('body');
compTest.attachBySelector('body');
// console.log('compTest3',compTest3);
compTest3.attachContainer('body');
compTest4.attachContainer('body');
compTest4.attachContainer('body');

// var skillbox1 = new SkillTagBox(['art','vfx','monkey','abu','queen']);
// document.querySelector('body').appendChild(skillbox1.component);

var gamecred1 = new GameCredit('../src/assets/gameboxes/default.jpg','Test Game Credit', ['art', 'vfx','destruction','console','shaderFX','houdini'])
document.querySelector('body').appendChild(gamecred1.component);

console.log('gamecred1 JSON:', gamecred1.toJSON());
var gamecred2 = GameCredit.fromJSON(gamecred1.toJSON());
console.log('gamecred2',gamecred2.component);
gamecred2.component.classList.add('monkey');
console.log('gamecred2 class list:', gamecred2.component.classList);
document.querySelector('body').appendChild(gamecred2.component);

let testCreds = [gamecred1,gamecred2,gamecred1];
let testProjectPanel = new ProjectPanel('Projects',testCreds);
document.querySelector('body').appendChild(testProjectPanel.component);

let navitem = new NavBarItem('navbaritemtest', (()=>{
  console.log('monkey');
}));

document.querySelector('body').appendChild(navitem.component);

},{"./components/GameCredit":3,"./components/NavBarItem":6,"./components/ProjectPanel":7,"./components/UIComponent":11,"./components/UIGameCredit":12}]},{},[13]);
