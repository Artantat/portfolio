const Component = require('../Component');
const ProjectTitle = require('./ProjectTitle');
const GameCreditBox = require('../GameProject/GameCreditBox');

class ProjectPanel extends Component{
  constructor(title='Projects', gameCredits=[]){
    super('div');
    this.component.classList.add('projectPanel');
    fetch('http://localhost:3002/projectsgames')
      .then(response => response.json())
      .then(games =>{
        let html = `
          ${new ProjectTitle(title).getHTML()}
          ${new GameCreditBox(games).getHTML()}
        `;
        this.component.innerHTML = html;
      });

  }
}

module.exports = ProjectPanel;
