const Component = require('../Component');
const GameProject = require('../GameProject/GameProject');
const exp = require('./Experience_data.js');

// refactor this component to be more procedural.

class Experience extends Component{
  constructor(){
    super('div',{class:'exp',id:'exp'});
    // this.component.classList.add('exp');
    // this.component.id = 'exp';
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
        // console.log('project', project);
        const entry = new Component('div',{class:'expEntry', id:`entry_${project.id}`});
        const expand = new Component('div', {class:'expExpand', id:project.id}, {
            click: (event) => {
            const target = event.target;
            console.log('target',target);
            target.toggleAttribute('expanded');
            if(target.attributes.expanded){
              target.parentElement.appendChild(new GameProject(project.imgsrc, project.title,  project.skillTags, project.description,{id:`full_${project.id}`}).component);
            } else {
              const remove = document.getElementById(`full_${project.id}`);
              target.parentElement.removeChild(remove);
            }
          }
        });

        const position = new Component('div',{class:'expPos'});
        const title = new Component('div',{class:'expTitle'});
        // console.log('expand',expand.events);
        position.component.innerHTML = project.position;
        title.component.innerHTML = project.title;

        expand.component.appendChild(position.component);
        expand.component.appendChild(title.component);

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

    // const biowareCreds = new Component('div',{class:'expStudio',id:'Bioware'});
    // const vvCreds = new Component('div',{class:'expStudio',id:'Vicarious'});
    // const edgeCreds = new Component('div',{class:'expStudio',id:'Edge'});
    //
    // biowareCreds.component.innerHTML = (`
    //   <div class='expStudioHeader'>
    //     <div class='expStudio'>Bioware - Austin TX</div>
    //     <div class='expStudioTime'>Sept 2020 - Present</div>
    //   </div>
    // `);
    //
    // vvCreds.component.innerHTML = (`
    //   <div class='expStudioHeader'>
    //     <div class='expStudio'>Vicarius Visions - Albany NY</div>
    //     <div class='expStudioTime'>Sept 2008 - Sept 2020</div>
    //   </div>
    // `);
    //
    // edgeCreds.component.innerHTML = (`
    //   <div class='expStudioHeader'>
    //     <div class='expStudio'>Edge of Reality - Austin TX</div>
    //     <div class='expStudioTime'>Mar 2007 - Sept 2008</div>
    //   </div>
    // `);
    //
    // const box = new Component('div',{class:'expBox'});
    //
    // for (let project of bioware){
    //   // console.log('project', project);
    //   const entry = new Component('div',{class:'expEntry', id:`entry_${project.id}`});
    //   const expand = new Component('div', {class:'expExpand', id:project.id}, {click: (event) => {
    //     const target = event.target;
    //     console.log('target',target);
    //     target.toggleAttribute('expanded');
    //     if(target.attributes.expanded){
    //       target.parentElement.appendChild(new GameProject(project.imgsrc, project.title,  project.skillTags, project.description,{id:`full_${project.id}`}).component);
    //     } else {
    //       const remove = document.getElementById(`full_${project.id}`);
    //       target.parentElement.removeChild(remove);
    //     }
    //   }});
    //
    //   const position = new Component('div',{class:'expPos'});
    //   const title = new Component('div',{class:'expTitle'});
    //   // console.log('expand',expand.events);
    //   position.component.innerHTML = project.position;
    //   title.component.innerHTML = project.title;
    //
    //   expand.component.appendChild(position.component);
    //   expand.component.appendChild(title.component);
    //
    //   entry.component.appendChild(expand.component);
    //   box.component.appendChild(entry.component);
    //   biowareCreds.component.appendChild(box.component);
    // }
    // console.log(biowareCreds.component);
    // box.component.appendChild(biowareCreds)

    // this.component.appendChild(biowareCreds.component);
    // this.component.appendChild(vvCreds.component);
    // this.component.appendChild(edgeCreds.component);

    this.component.appendChild(constructExp('Bioware - Austin TX','Sept 2020 - Present',bioware).component);
    this.component.appendChild(constructExp('Vicarius Visions - Albany NY','Sept 2008 - Sept 2020',vv).component);
    this.component.appendChild(constructExp('Edge of Reality - Austin TX','Mar 2007 - Sept 2008',edge).component);
    // this.component.innerHTML = (`
    //   <div class='description'>
    //     <div id='descriptionBox' class='descriptionBox'>
    //     <div class='expGames'>
    //       <div id='expGamesTitle' class='expGamesTitle'>Experience</div>
    //       <div id='bioware'>
    //         <div class='expStudioHeader'>
    //           <div class='expStudio'>Bioware - Austin TX</div>
    //           <div class='expStudioTime'>Sept 2020 - Present</div>
    //         </div>
    //         <div class='aboutGameBox'>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Lead</div>
    //             <div class='aboutGameTitle'>SWTOR - Legacy of the Sith</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Artist</div>
    //             <div class='aboutGameTitle'>SWTOR - The Dark Descent</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div id='vv'>
    //         <div class='expStudioHeader'>
    //           <div class='expStudio'>Vicarious Visions - Albany NY</div>
    //           <div class='expStudioTime'>Sept 2008 - Sept 2020</div>
    //         </div>
    //         <div class='aboutGameBox'>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Artist</div>
    //             <div class='aboutGameTitle'>Tony Hawk Pro Skater: 1+2 Remaster</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Artist</div>
    //             <div class='aboutGameTitle'>Destiny 2 - Black Armory</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Artist</div>
    //             <div class='aboutGameTitle'>Destiny 2 - War Mind</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior VFX Artist</div>
    //             <div class='aboutGameTitle'>Skylanders: Imaginators - Crash Action Pack</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Senior Artist</div>
    //             <div class='aboutGameTitle'>Skylanders: Trap Team Tablet</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Lead Artist</div>
    //             <div class='aboutGameTitle'>Skylanders: Lost Islands</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Environment Artist</div>
    //             <div class='aboutGameTitle'>Sklanders: Spyro's Adventure 3ds</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Environment Artist</div>
    //             <div class='aboutGameTitle'>DJ Hero 3ds</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Environment Artist</div>
    //             <div class='aboutGameTitle'>Band Hero</div>
    //           </div>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Environment Artist</div>
    //             <div class='aboutGameTitle'>Marvel Ultimate Alliance 2</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div id='edge'>
    //         <div class='expStudioHeader'>
    //           <div class='expStudio'>Edge of Reality - Austin TX</div>
    //           <div class='expStudioTime'>Mar 2007 - Sept 2008</div>
    //         </div>
    //         <div class='aboutGameBox'>
    //           <div class='aboutGame'>
    //             <div class='aboutGamePos'>Environment Artist</div>
    //             <div class='aboutGameTitle'>The Incredible Hulk</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // `);

  }

}

module.exports = Experience;
