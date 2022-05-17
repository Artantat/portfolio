const Component = require('../Component');

class DemoReel extends Component {
  constructor(title='Demo Reel', description='Something about demo reel'){
    super('div');
    this.component.classList.add('demoReelContainer');
    this.component.innerHTML = (`
      <iframe class='demoReelVideo' src="https://www.youtube.com/embed/WbH-3z306Bs?&hd=1" title="Demo Reel 2020" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `);
    document.getElementById('Root').classList.add('dark');
  }

}

module.exports = DemoReel;
