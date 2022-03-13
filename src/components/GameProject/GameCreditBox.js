const GameCredit = require('./GameCredit');
const Component = require('../Component');

class GameCreditBox extends Component{
  constructor(gameCredits=[]){
    super('div');
    this.component.classList.add('gameCreditBox');
    let html = '';
    for (let gameCredit of gameCredits){
      html += gameCredit.getHTML();
    }
    this.component.innerHTML = html;
  }
}

module.exports = GameCreditBox;
