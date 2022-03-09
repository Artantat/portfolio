const Component = require('./Component');

class SkillTag extends Component {
  constructor(tag){
    super('div');
    this.component.classList.add('skillTag');
    this.component.innerText = tag;
  }
}

module.exports = SkillTag;
