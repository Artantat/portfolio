const Component = require('./Component');

class GameTitle extends Component {
  constructor(title){
    super('div');
    this.component.classList.add('gameTitle');
    this.component.innerText = title;
  }
}

module.exports = GameTitle;
