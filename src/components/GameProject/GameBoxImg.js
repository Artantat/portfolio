const Component = require('../Component');

class GameBoxImg extends Component {
  constructor(img, altTxt){
    super('img');
    this.component.classList.add('gameBox');
    this.component.setAttribute('alt', altTxt);
    this.component.setAttribute('src', img);
  }
}

module.exports = GameBoxImg;
