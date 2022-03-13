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
