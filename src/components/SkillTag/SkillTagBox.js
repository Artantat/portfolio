// const SkillTag = require('./SkillTag');
const Component = require('../Component');

class SkillTagBox extends Component{
  constructor(skillTags=[]){
    super('div');
    this.component.classList.add('skillTagBox');
    let html = '';
    for (let skilltag of skillTags){
      html += `<div class="skillTag">${skilltag}</div>`;
    }
    this.component.innerHTML = html;
  }
}

module.exports = SkillTagBox;
