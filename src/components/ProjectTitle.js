const Component = require('./Component');

class ProjectTitle extends Component {
  constructor(title){
    super('div');
    this.component.classList.add('projectTitle');
    this.component.innerText = title;
  }
}

module.exports = ProjectTitle;
