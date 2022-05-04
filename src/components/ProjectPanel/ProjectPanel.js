const Component = require('../Component');
const GameProject = require('../GameProject/GameProject');
const Experience = require('../Experience/Experience');
const BASE_URL = require('../../init');

class ProjectPanel extends Component{
  constructor(
    title='Projects',
    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projectUrl=`${BASE_URL}/projectsgames`
  ){
    super('div');
    this.component.classList.add('projectPanel');
    this.component.appendChild(new Experience().component);
    fetch(projectUrl)
      .then(response => response.json())
      .then(projects =>{
        // let html = this.component.innerHTML;
        // html += (`
        //   <div class="projectCollectionHeader">
        //     <div class="projectCollectionTitle">${title}</div>
        //     <div class="projectCollectionDescription">${description}</div>
        //   </div>
        // `);
        // for (let project of projects){
        //   this.component.appendChild(new GameProject(project.imgsrc, project.title,  project.skillTags, project.description).component);
        // }
        // this.component.innerHTML = html;
      });
      document.getElementById('Root').classList.remove('dark');
  }
}

module.exports = ProjectPanel;
