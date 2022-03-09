const Component = require('./Component');
const ProjectTitle = require('./ProjectTitle');
const GameCreditBox = require('./GameCreditBox');

class ProjectPanel extends Component{
  constructor(title='Projects', gameCredits=[]){
    super('div');
    this.component.classList.add('projectPanel');
    let html = `
      ${new ProjectTitle(title).getHTML()}
      ${new GameCreditBox(gameCredits).getHTML()}
    `;
    this.component.innerHTML = html;
  }
}

module.exports = ProjectPanel;
