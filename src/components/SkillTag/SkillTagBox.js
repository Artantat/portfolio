const SkillTag = require('./SkillTag');
const Component = require('../Component');

class SkillTagBox extends Component{
  constructor(skillTags=[]){
    super('div');
    this.component.classList.add('skillTagBox');
    let skills = '';
    for (let skilltag of skillTags){
      skills += (new SkillTag(skilltag)).getHTML();
    }
    this.component.innerHTML = skills;
  }
}

module.exports = SkillTagBox;
