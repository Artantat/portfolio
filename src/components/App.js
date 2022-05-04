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
