const SkillTagBox = require('../SkillTag/SkillTagBox');
const Component = require('../Component');

class GameProject extends Component{
  constructor(imgsrc='../../assets/gameboxes/default.jpg', title='Game Credit', skillTags=['art', 'banana','apple','squiggle','orange','zippy'], description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',attrs={},events={}){
    super('div',attrs);
    this.component.classList.add('gameContainer');
    this.component.innerHTML = (`
      <div class="gameTitle">${title}</div>
      <div class="gameContent">
        <img
          src="${imgsrc}"
          alt="${title} image"
          class="gameImg"
        />
        ${description}
      </div>
      ${new SkillTagBox(skillTags).getHTML()}

    `);

  }

}

module.exports = GameProject;
