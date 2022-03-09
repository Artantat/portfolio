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
