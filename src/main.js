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
