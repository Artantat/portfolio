const Component = require('../Component');
const GameProject = require('../GameProject/GameProject');

class ProjectPanel extends Component{
  constructor(
    title='Projects',
    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projectUrl='http://localhost:3002/projectsgames'
  ){
    super('div');
    this.component.classList.add('projectPanel');
    fetch(projectUrl)
      .then(response => response.json())
      .then(projects =>{
        let html = '';
        html += (`
          <div class="projectCollectionHeader">
            <div class="projectCollectionTitle">${title}</div>
            <div class="projectCollectionDescription">${description}</div>
          </div>
        `);
        for (let project of projects){
          html += new GameProject(project.imgsrc, project.title,  project.skillTags, project.description).getHTML();
        }
        this.component.innerHTML = html;
      });

  }
}

module.exports = ProjectPanel;
