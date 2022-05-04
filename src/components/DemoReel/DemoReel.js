const Component = require('../Component');

class DemoReel extends Component {
  constructor(title='Demo Reel', description='Something about demo reel'){
    super('div');
    this.component.classList.add('demoReelContainer');
    this.component.innerHTML = (`
      <video class="demoReelVideo" controls>
        <source src="" type="video/mp4" alt="Demo Reel">
      </video>

    `);
    document.getElementById('Root').classList.add('dark');
  }

}

module.exports = DemoReel;
