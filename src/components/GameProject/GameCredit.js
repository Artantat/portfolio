const SkillTagBox = require('../SkillTag/SkillTagBox');
const GameTitle = require('./GameTitle');
const GameBoxImg = require('./GameBoxImg');
const Component = require('../Component');

class GameCredit extends Component{
  constructor(imgsrc='./src/assets/gameboxes/default.jpg', title='Game Credit', skillTags=['art', 'banana','apple','squiggle','orange','zippy']){
    super('div');

    this.component.classList.add('gameCreditContainer');
    let innerComponents = '';
    innerComponents += new GameBoxImg(imgsrc, `${title} image`).getHTML();
    innerComponents += new GameTitle(title).getHTML();
    innerComponents += new SkillTagBox(skillTags).getHTML();
    this.component.innerHTML = innerComponents;
  }

}

module.exports = GameCredit;