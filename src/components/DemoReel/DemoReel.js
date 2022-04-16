const Component = require('../Component');

class DemoReel extends Component {
  constructor(title='Demo Reel', description='Something about demo reel'){
    super('div');
    this.component.classList.add('demoReelContainer');
    this.component.innerHTML = (`
      <div class="demoHeader">
        <div class="demoReelTitle">${title}</div>
        <div class="demoDescription">${description}</div>
      </div>
      <video class="demoReelVideo" controls>
        <source src="https://www.dropbox.com/s/43ojs5t1fud8gmt/wcastagna_demoreel.mp4" type="video/mp4" alt="Demo Reel">
      </video>

    `);
  }

}

module.exports = DemoReel;
