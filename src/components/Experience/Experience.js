const Component = require('../Component');
const GameProject = require('../GameProject/GameProject');
const ProjectPost = require('../ProjectPost/ProjectPost');
const exp = require('./Experience_data.js');

class Experience extends Component{
  constructor(){
    super('div',{class:'exp',id:'exp'});

    const constructExp = (studio, studioTime, projects) =>{
      const creds = new Component('div',{class:'expStudio',id:studio});
      creds.component.innerHTML = (`
        <div class='expStudioHeader'>
          <div class='expStudio'>${studio}</div>
          <div class='expStudioTime'>${studioTime}</div>
        </div>
      `);

      const box = new Component('div',{class:'expBox'});

      for (let project of projects){

        const entry = new Component('div',{class:'expEntry', id:`entry_${project.id}`});
        const expand = new Component('div', {class:'expExpand', id:project.id}, {
            click: (event) => {
            const target = event.target;
            target.toggleAttribute('expanded');
            if(target.attributes.expanded){
              target.parentElement.appendChild(new ProjectPost(project.imgsrc,  project.skillTags, project.description,{id:`full_${project.id}`}).component);
            } else {
              const remove = document.getElementById(`full_${project.id}`);
              target.parentElement.removeChild(remove);
            }
            document.getSelection().removeAllRanges();
          }
        });

        const position = new Component('div',{class:'expPos'});
        const title = new Component('div',{class:'expTitle'});

        position.component.innerHTML = project.position;
        title.component.innerHTML = project.title;

        expand.component.appendChild(title.component);
        expand.component.appendChild(position.component);

        entry.component.appendChild(expand.component);
        box.component.appendChild(entry.component);
        creds.component.appendChild(box.component);
      }

      return creds;
    }

    const bioware = [];
    const vv = [];
    const edge = [];

    for (let project of exp){
      if (project.studio === 'Bioware'){
        bioware.push(project);
      } else if (project.studio === 'Vicarious Visions'){
        vv.push(project);
      } else if (project.studio === 'Edge of Reality'){
        edge.push(project);
      }
    }

    this.component.appendChild(constructExp('Bioware - Austin TX','Sept 2020 - Present',bioware).component);
    this.component.appendChild(constructExp('Vicarius Visions - Albany NY','Sept 2008 - Sept 2020',vv).component);
    this.component.appendChild(constructExp('Edge of Reality - Austin TX','Mar 2007 - Sept 2008',edge).component);


  }

}

module.exports = Experience;
