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
