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
        '/blog',
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
          id:'nav_about',
          callback: () => this.setState.bind(this, '/about')
        },
        {
          name:'Demo Reel',
          id:'nav_demoreel',
          callback: () => this.setState.bind(this, '/demoreel')
        },
        {
          name:'Blog',
          id:'nav_blog',
          callback: () => this.setState.bind(this, '/blog')
        },
        {
          name:'Contact',
          id:'nav_contact',
          callback: () => this.setState.bind(this, '/contact')
        }
      ])).component);
    // root.appendChild(new NavBar(['About','Games','Personal Projects','Contact']).component);
    switch (this.state.url) {
      case '/about':
        document.getElementById('nav_about').classList.add('activeNavBarItem');
        root.appendChild(new About().component);
        break;
      case '/blog':
        document.getElementById('nav_blog').classList.add('activeNavBarItem');
        root.appendChild(new ProjectPanel('GAMES',`Below you will find each game that I've worked on in my 15 years in the game industry.<br/><br/>Each entry is accompanied by some writings about the project`).component);
        break;
      case '/demoreel':
        document.getElementById('nav_demoreel').classList.add('activeNavBarItem');
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
