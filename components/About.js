const Component = require('./Component');
// import './About.css
// require('./About.css');

class About extends Component{
  constructor(pic='default.jpg', name='Artantat', header='Healine', description='Something About me'){
    super('div');

    this.component.classList.add('about');


  }

}

module.exports = About;
