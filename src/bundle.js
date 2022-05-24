(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Component = require('../Component');



class About extends Component{
  constructor(pic='./src/assets/profile/profile.jpeg', name='Artantat', header='Healine', description='Something About me'){
    super('div');
    this.component.classList.add('about');
    this.component.id = 'about';

    const expTimeSeconds = ((new Date() - new Date(2007, 2, 1))/1000);
    const expTimeMinutes = expTimeSeconds / 60;
    const expTimeHours = expTimeMinutes / 60;
    const expTimeDays = Math.floor(expTimeHours / 24);
    const expTimeYears = Math.floor(expTimeDays / 365.25);
    const expTimeMonths = Math.floor(12 * (expTimeDays / 365.25)-(expTimeYears * 12));
    const expTimeDaysRemaining = Math.floor(expTimeDays - ((expTimeYears * 365.25) + (expTimeMonths * 30.417)));

    this.component.innerHTML = (`
      <div class='aboutheader'>

      </div>
      <div class='description'>
        <div id='descriptionBox' class='descriptionBox'>
        <img src="${pic}" alt="Picture" class="profilePic"/>
          <p>
            Hi! Thanks for dropping by!
          </p>
          <p>
            I absolutely LOVE making video games! I've been a Game Developer for ${expTimeYears}y ${expTimeMonths}m ${expTimeDaysRemaining}d working at 3 studios in that time. It's been a great pleasure working in this industry full of so many talented people and amazing teams. Something that I've really enjoyed in my time as a developer, is that every project I've worked on has had such a unique set of problems to solve. I've probably worked in as many engines as projects i've been apart of. It's a blast to experiment and collaborate on the quest for the best experience for the players.
          </p>
          <p>
            Super Metroid is hands down my favorite game. I love the whole metroidvania genre, it hits the sweet spot of exploration, platformning and theme. Samus is a badass and the metroid series really captured my imagination. While it came out nearly 30 years ago it still holds up, heck I want to play it just writing about it. It really comes down the purity of the experience for me. You can spend less than a couple of hours playing if you are speed running or as much as 10 if you are just exploring but the true magic is that it is incredibly replayable. I can't tell you how many times I've beaten this game but ever time it's just as good as the first. It's amazingly captivating both visually and mechanically. It's straightforward yet always bettering yourself or solving problems with new mechanics. All in all I'd love to work on a presonal project as an homage to this great title.
          </p>
          <p>
            Great communication, process and clear direction are essential for a good development cycle. Having a collaborative team with a solid vision is a powerful thing. I've had the pleasure of working on a few titles that were a perfect mix of small team dynamics, having great trust and respect for one another which added to a highly collaborative atmosphere. Everyone was excited and had fun making the game. It was one of the best experiences in my career. One thing that I enjoy about game jams and rapid devlopment is that you don't have time to be indecisive. That's not to say that decisions should be made carelessly or without proper investigation but more that you don't want to feel like you are a flag blowing in a tornado. Having a strong vision and developing great process around that vision can really give you a leg up when you hit full production. If preproduction is utilized properly the team should be coming into production knowing exactly what is being made and how it's going to be made. It's one of the reason that I focus on making sure I am organized, plan and document as much as possible.
          </p>
          <p>
            Aside from games I love learning. Even at my busiest I always find time to continue my development. I typically use platforms such as Udemy or CG circuit but also go through tutorials anywhere i can find them. I enjoy series like that of Udemy because they are split into bite size chunks which allow me to get through even the longest courses a little bit at a time. It's amazing what you can achieve even just focusing an hour every few days on. I've taken courses for all manner of things including blockchain development, python, c++, web development (created this site after that one), Houdini, leadership, communication and whatever peaks my interest. That's not even including the skills development I do in my day to day work making games. Learning is a passion of mine and I will be doing it until the day I die.
          </p>
          <p>
            Here is a quick break down of my skills and experience. Check out the experience tab for more indepth detail on projects and work I've done.
          </p>
          <strong>Development Software</strong>
          <hr>
          <p class='bioSkills'>
            <strong>Game Engines:</strong> Unity, Unreal 4, and about a dozen proprietary engines
            </br>
            <strong>Content Software:</strong> Photoshop, Illustrator, AfterFX, Substance Designer, Substance Painter, 3dsmax, Maya, Blender, Houdini, Unreal, Z-Brush
            </br>
            <strong>Production Software:</strong> Jira, Confluence, Perfoce, Git, DevTrack, Excel/Sheets, Power point, OBS
            </br>
            <strong>Programming:</strong> Javascript(including NodeJS & React), C++, C#, Python
          </p>
          <strong>Skills & Expertise</strong>
          <hr>
          <p class='bioSkills'>
            <strong>Leadership:</strong> Career Management, Career Goal Development, Mentorship & Coaching, Scope & Task Planning, Roadmapping
            </br>
            <strong>Communication:</strong> Modern Remote Practices, Zoom, Slack, Miro, Robust Documentation
            </br>
            <strong>Pipelines:</strong> Material & Shader Development, VFX, Static Destruction, Simulated Destruction, Environment Art, Rapid Prototyping, Functional Focused Development, Proceduralization, Modular Design, Feature Development, Workflow Improvement & Modernization
          </p>
          <strong>Work History</strong>
          <hr>
          <p class='bioSkills'>
            <strong>Bioware</strong> | Sept 2020 - Present
            </br>
            <strong>Vicarious Visions</strong> | Sept 2008 - Sept 2020
            </br>
            <strong>Edge of Reality</strong> | Mar 2007 - Sept 2008
          </p>
          <strong>Training & Development</strong>
          <hr>
          <p class='bioSkills'>
            <strong>Management & Leadership:</strong> Crucial Conversations, Active Listening, Digital Body Language, Management L1, Building Inclusive teams, Various Internal Training Modules
            </br>
            <strong>Skills Developement:</strong> C++ From beginner to beyond, Complete webdev: zero to mastery, Etherium & smart contracts from scratch, Blockchain & Crypto currancy: Python & React, How to Program Games: Tile Classics in JS for HTML5 Canvas
          </p>
          <strong>Education</strong>
          <hr>
          <p class='bioSkills'>
            <strong>Bachelor's Computer Science: Game Art & Design</strong> | Art Institute: San Diego, CA
          <p class='bioSign'>
            Regards,
          </br>
            William Castagna
          </p>
        </div>
      </div>
    `);
    document.getElementById('Root').classList.remove('dark');
  }

}

module.exports = About;

},{"../Component":3}],2:[function(require,module,exports){
const About = require('./About/About');
const Header = require('./Header/Header');
const NavBar = require('./Navigation/NavBar');
const ProjectPanel = require('./ProjectPanel/ProjectPanel');
const Footer = require('./Footer/Footer');
const DemoReel = require('./DemoReel/DemoReel');
const Contact = require('./Contact/Contact');

class App{
  constructor(){
    this.state = {
      url: '/work',
      validUrls: [
        '/bio',
        '/exp',
        '/work',
        '/contact'
      ]
    };
  }

  setState( url ){
    if(this.state.validUrls.find(element => element === url)){
      this.state.url = url;
      this.route();
    } else {
      console.log('no such url');
    }

  }

  route(){
    const root = document.getElementById('Root');
    root.innerHTML = '';
    root.classList.add('main');
    root.appendChild(new Header(
      './src/assets/profile/profile.jpeg',
      'William Castagna',
      new NavBar([
        {
          name:'Work',
          id:'nav_work',
          callback: () => this.setState.bind(this, '/work')
        },
        {
          name:'Bio',
          id:'nav_bio',
          callback: () => this.setState.bind(this, '/bio')
        },
        {
          name:'Experience',
          id:'nav_exp',
          callback: () => this.setState.bind(this, '/exp')
        },
        {
          name:'Contact',
          id:'nav_contact',
          callback: () => this.setState.bind(this, '/contact')
        }
      ])).component);
    // root.appendChild(new NavBar(['About','Games','Personal Projects','Contact']).component);
    switch (this.state.url) {
      case '/bio':
        document.getElementById('nav_bio').classList.add('activeNavBarItem');
        root.appendChild(new About().component);
        break;
      case '/exp':
        document.getElementById('nav_exp').classList.add('activeNavBarItem');
        root.appendChild(new ProjectPanel('GAMES',`Below you will find each game that I've worked on in my 15 years in the game industry.<br/><br/>Each entry is accompanied by some writings about the project`).component);
        break;
      case '/work':
        document.getElementById('nav_work').classList.add('activeNavBarItem');
        root.appendChild(new DemoReel().component);
        break;
      case '/contact':
        document.getElementById('nav_contact').classList.add('activeNavBarItem');
        root.appendChild(new Contact().component);
        break;
      default:
        root.appendChild(new About().component);
    }
    root.appendChild(new Footer().component);
  }
}

module.exports = App;

},{"./About/About":1,"./Contact/Contact":4,"./DemoReel/DemoReel":5,"./Footer/Footer":8,"./Header/Header":10,"./Navigation/NavBar":11,"./ProjectPanel/ProjectPanel":13}],3:[function(require,module,exports){
// NOTE: when using the events addEventlistener it seems if you later manipulate
// the innerHTML on the component the listener is then lost... this may be from
// the id missing? I wonder if this would happen if i supplied an id: for the expand

class Component{
  constructor(elementType='div', attrs={}, events={}){
    this.elementType = elementType;
    this.attrs = attrs;
    if(!this.attrs.class){
      this.attrs.class = 'default';
    }
    this.events = events;

    this.component = document.createElement(this.elementType);
    this.component.classList.add(this.attrs.classes);
    for(let attr in this.attrs){
      if(attr === 'innerHTML'){
        this.component.innerHTML = this.attrs[attr];
      }else{
        this.component.setAttribute(attr,this.attrs[attr]);
      }

    }
    for(let evnt in this.events){
      this.component.addEventListener(evnt, this.events[evnt]);
    }

  }

  getHTML(){
    return this.component.outerHTML;
  }

  toJSON(){
    return JSON.stringify({
      elementType: this.elementType,
      attrs: this.attrs
    });
  }

  getEventNames(){
    const eventNames = [];
    for (let evnt in this.events){
      eventNames.push(evnt);
    }
    return eventNames;
  }
}

module.exports = Component;

},{}],4:[function(require,module,exports){
const Component = require('../Component');
const BASE_URL = require('../../init');
const { validateEmail, validateFields } = require('../../utils');

class Contact extends Component {
  constructor(){
    super('div', {class:'contactContainer'});
    document.getElementById('Root').classList.add('dark');
    // document.getElementById('Root').classList.remove('dark');

    const submitbtn = new Component('button');
    submitbtn.component.classList.add('contactSubmit');
    submitbtn.component.id = 'submitbtn';
    submitbtn.component.innerText = 'Submit';
    submitbtn.component.onclick = (event) =>{

      const email = document.getElementById('email').value;
      const name = document.getElementById('contactName').value;
      const type = document.getElementById('contactType').value;
      const message = document.getElementById('contactMessage').value;

      const fields = [email, name, type, message];
      if (validateFields(fields) && validateEmail(email)){
        fetch(`${BASE_URL}/submitemail`, {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            name: name,
            email: email,
            type: type,
            message: message
          })
        })
        .then(response => {
          console.log(response);
          if (response.status === 200){
            return response.json();
          } else {
            throw new Error(`Error ${response.status} Please try again later.`);
          }

        })
        .then(data => {
          this.component.innerHTML = (`
            <div class="contactThanks">${data.email},</br></br>Thanks for reaching out! I'll get back to you as soon as i can.</br>In the mean time follow me on on my socials or check out my blog. </br></br>Regards,</br>William Castagna</div>
            `);
        })
        .catch(err => {
          this.component.innerHTML = (`
            <div class="contactThanks contactError">${err}</div>
          `);
        });
      } else if (!validateFields(fields)){
        document.getElementById('contactSubmitError').innerHTML = 'Some required fields are empty please ensure to fill all fields';
      } else if (!validateEmail(email)){
        document.getElementById('contactSubmitError').innerHTML = 'Please enter valid e-mail address.';
      }

    };

    this.component.innerHTML = (`
      <form class="contactForm" onsubmit="return false">
        <div class="contactLabels" for="contactName"> Name </div>
        <input class="contactName" id="contactName" type="text" required/>
        </br>
        <div class="contactLabels" for="email"> Email </div>
        <input class="contactInput" id="email" type="email" required/>
        <div class="contactValidError" id="emailValidation" for="email"></div>
        </br>
        <div class="contactLabels" for="contactType">Topic</div>
        <div class="wrapper">
          <select id="contactType" class="contactDropdown">
            <option value="jobgames">Game Gig</option>
            <option value="jobweb">Web Work</option>
            <option value="jobconsult">Consulting</option>
            <option value="collab">Collaboration</option>
          </select>
        </div>
        </br>
        <div class="contactLabels" for="contactMessage">Message</div>
        <textarea class="contactMessage" id="contactMessage" type="text" maxlength="250" required></textarea>
        <div class="contactValidError" id="contactMessageValid" for="contactMessage"></div>
        <div class="contactValidError" id="contactSubmitError" for="submitbtn"></div>
        </br>
      </form>
    `);
    this.component.children[0].appendChild(submitbtn.component);
    for (let child of this.component.children[0]){
      if (child.id === 'email'){
        child.oninput = (event) => {
          if (validateEmail(event.target.value)){
            document.getElementById('emailValidation').innerHTML = '';
          } else {
            document.getElementById('emailValidation').innerHTML = (`
              Emails should have @ and .com ex. test@test.com
              `);
          }
        };
      }
      if (child.id === 'contactMessage'){
        child.oninput = (event) =>{
          document.getElementById('contactMessageValid').innerHTML = (`
            message ${event.target.value.length} / 250
          `);
        }
      }
    }

  }


}

module.exports = Contact;

},{"../../init":16,"../../utils":18,"../Component":3}],5:[function(require,module,exports){
const Component = require('../Component');

class DemoReel extends Component {
  constructor(title='Demo Reel', description='Something about demo reel'){
    super('div');
    this.component.classList.add('demoReelContainer');
    this.component.innerHTML = (`
      <iframe class='demoReelVideo' src="https://www.youtube.com/embed/WbH-3z306Bs?&hd=1" title="Demo Reel 2020" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `);
    document.getElementById('Root').classList.add('dark');
  }

}

module.exports = DemoReel;

},{"../Component":3}],6:[function(require,module,exports){
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

},{"../Component":3,"../GameProject/GameProject":9,"../ProjectPost/ProjectPost":14,"./Experience_data.js":7}],7:[function(require,module,exports){
const exp = [
  {
    id:'SWTOR-LegacySith',
    imgsrc: './src/assets/gameboxes/swtor_7_0_legacy_of_sith.jpg',
    title: 'Star Wars the Old Republic - Legacy of the Sith',
    position: 'Lead VFX Artist',
    studio: 'Bioware',
    skillTags: ['VFX','Leadership','Shader FX','Ability FX', 'Env FX', 'Skyboxes','Tech/Tools Improvements', 'Proprietary Engine','Houdini'],
    description: (`
      <em><strong>Legacy of the Sith (7.0)</strong></em> is the largest release I've been a part of since joining <strong>Bioware</strong>. This release celebrates SWTOR's 10th anniversary and takes place on the water planet Manaan during a raging storm. In addition there is a <em>flashpoint</em> which takes place on Elom. 2 planets with distinct aesthetic and vfx needs.
      </br></br><em>Manaan</em> posed an interesting challenge, it is a water world and we wanted to do a stormy sea and skybox, two things that are very difficult to pull off on a 10 year old engine. Using my Unreal knowledge I prototyped a new VFX shader and worked closely with tech art to implement what would soon become our swiss army knife. Sporting modern features such as uv distortion, tri-planar projection and texture layering it opened the doors to try some previously impossible visuals. Not having texture driven vertex displacement I had to get creative to make a storming ocean. I utilized the newly created shader's triplanar projection with mesh particles to create a series emitters to drop into the world. Couple this with a base plane and you have a poor mans ocean. The final result is pretty convincing especially taking into account the shader itself is unlit.
      </br></br><em>Elom</em> was a smokey, rocky planet with some cool ruins. I was again able to utilize the new found power to create a nice skybox with an eclipse and subtle environment FX. The showdown with the mighty Darth Malgus takes place on this planet as well. Malgus' abilities were an interesting blend of old and new in terms of mechanics and aesthetically pushed into a more modern realm.
      </br></br>It was a good mix of content, <em>Manaan</em> I focused more on Environmental FX and solving the oceans and storming sky while <em>Elom</em> was much heavier in Boss and Creature FX. Both had their own challenges but both were a blast to work on.
      </br></br>During the developement I transitioned from <strong>Senior VFX Artist</strong> to <strong>Lead VFX Artist</strong>. With this transition i began managing 1 VFX Artist and 1 Animator. As a people leader at EA in addition to creating content I also work with my team on their goals and career development and manage our schedule. It's been a great honor to take on this role. The team has been awesome, super collaborative and open to new ideas. It's also a blast working on Star Wars which has such a rich and deep universe.
    `)
  },
  {
    id:'SWTOR-Descent',
    imgsrc: './src/assets/gameboxes/swtor_6_3_dark_descent.png',
    title: 'Star Wars the Old Republic - The Dark Descent',
    position: 'Senior VFX Artist',
    studio: 'Bioware',
    skillTags: ['VFX','Shader FX','Ability FX','Character FX','Environment FX','Skyboxes','Tech/Tools Improvements','Proprietary Engine'],
    description: (`
      <strong>Dark Descent</strong> was the release that I started at Bioware. I worked on 2 updates for this release, <em><strong>Spirit of Vengence (6.2)</strong></em> which was Manolorian themed and <em><strong>Secrets of the Enclave (6.3)</strong></em> taking place on Dantooine uncovering the secrets of the ruined jedi enclave.
      </br></br>These updates are described as <em>flashpoints</em>. The best way to think of the type and size of a flashpoint is that of a dungeon in another MMO such as World of Warcraft. They have some story points with crafted but mechanically straight forward bosses. Typically they can be finished within an hour or two without the need of an experienced group.
      </br></br><em><strong>Spirit of Vengence</strong></em> consisted of a lot of ramp up in the toolset and experimentation with some Houdini integration experiments. I worked on FX for anything from ship battles, boss abilities, in game cinematics as well as the skybox. Being only 1 of 2 VFX artists required me to jump into every workflow and pipeline that VFX touch which is well... all of them so it was a great learning experience.
      </br></br><em><strong>Secrets of the Enclave</strong></em> was a little bit larger than <em><strong>Spirit of Vengence</strong></em>. In this update we split our VFX task ownership up allowing for better focus and specialization in workflows. I focused on Abilities while my partner focused on the in game cinematic needs while we collaborated on the environment tasks. This was the first update that I started experimenting with redifining the player communication for the game while diving deeper into the tools capabilities and limitations.
      </br></br>Overall these two smaller releases acted as a great spring board into our next release, informing workflow and process updates. It was this release that it was clear that there was a lot of lost knowledge over the years. I began putting a lot of focus on improving our documentation by reorganizing our existing confluence and writing new documentation when needed. It's always a challenge learning a new tool when documentation is lacking and knowledge holders have left over the lifecylce of a project.
      </br></br>One tech improvement that I created during this release was a destruction tool using the houdini engine to help the environment team break up assets and for me to make destruction chunks for various fx.
    `)
  },
  {
    id:'THPS',
    imgsrc: './src/assets/gameboxes/thps.jpg',
    title: 'Tony Hawk Pro Skater: 1+2 Remaster',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Environment FX', 'Destruction', 'Houdini', 'Unreal 4', 'Material Creation', 'Pipeline R&D and Implementation'],
    description: (`
      <strong><em>THPS</em></strong> was such a fun project to work on! Though our team was relatively small we were able to do a lot. It's not every day that you get to work in a game that you played nonstop for much of your childhood. The original THPS captured so many and helped bring skating to the mainstream. I am really proud of this game and how we both improved it while also keeping it true to it's roots.
      </br></br>
      My main focus on this project was destruction. I used Houdini to bake simulation data into textures and use that data for events in the game both large and small. We were pushing for a consistent 60fps which requires some creative problem solving to keep the framerate while also having awesome visuals.
      </br></br>
      Modularity and Houdini helped keep the scope managable, we had a small in house team with a sister studio helping as well. Efficiency was key to getting the results we needed in the time we had. Houdini's procedural workflow allowed me to quickly setup asset pipelines to use and reuse for desturction content. The great thing about Houdini is that the workflow is non-destructive so in changing anything in the pipeline you preserve the work you have done and simply reprocess the assets. Without Houdini, I have no idea how we would have gotten half of what we did done.
      </br></br>
      In all honesty using Unreal 4 was a game changer. Up until this point many of the engines we used at VV were proprietary. While those engines have their pros it's hard to compare with a toolset that has thousands of projects being created with it. The workflows were fast and efficient. That coupled with the fact that UE is very well documented it made ramp up a breeze and experimentation incredibly fun. Unreal's material pipeline was also really cool to dive into. I had a ton of fun crafting the materials for the destruction pipeline and figuring out fun and creative solutions to adding visual interest without adding too much expense.
      `)
  },
  {
    id:'Destiny-Penumbra',
    imgsrc: './src/assets/gameboxes/d2Penumbra.png',
    title: 'Destiny 2 - Forsaken',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX','Environment FX','Raid Content'],
    description: (`
      Code named <strong><em>Penumbra</em></strong> this was the last colloration with Bungie that we did at VV. Our involvement in this release was cut short due to the Activision Bungie split around that time. We mainly focused on the raid content in this release. It was sad to say goodbye to all of the great teamates we worked closely with at Bungie.
      </br></br>
      While working on Penumbra I was able to experiment with raid communication and mechanic effects. Working on bosses is always a fun time. I also had the opportunity to do some previs work for a shattered world and nightmareish realm.
    `)
  },
  {
    id:'Destiny-Armory',
    imgsrc: './src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'Destiny 2 - Black Armory',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX', 'Weapon FX', 'Reticles'],
    description: (`
      I was only on <strong><em>Black Armory</em></strong> for a short while as i was finishing up the previous release and then jumped on pre-vis for Penumbra before coming back and helping close out this release.
      </br></br>
      My focus was mainly weapons, secrets and reticles to help with the hidden secret mechanics. This included setup for the reticles as well as shader work to work properly. There were a lot of weapons to go through so as soon as i was done with one I was on to another!
      </br></br>
      Working with Bungie was a really interesting experience coming from VV where there is so much overlap in influence and responsibility. Bungie on the other hand was a team of specialists with an area of focus and expertise like a well oiled machine. One draw back of this model though is that knowledge can become tribal and then potentially lost if a member leaves and hasn't documented it well. On the other hand it is incredibly difficult to know anything about everything all the time. These projects really reinforced my methodology around robust and clear documentation.
    `)
  },
  {
    id:'Destiny-Warmind',
    imgsrc: './src/assets/gameboxes/destiny-2-warmind.jpg',
    title: 'Destiny 2 - War Mind',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Boss FX','Character FX'],
    description: (`
      <strong><em>War Mind</em></strong> was an awesome release to work on. I had the pleasure of doing all of the FX for the wurm god Xol which was a badass worm looking monster. While working on Xol I crafted ambient ash fx and prototyped some interesting pealing skin fx.
      </br></br>
      It was really awesome working with Bungie, we were able to visit their studio and do some in person training for a few weeks before bringing it back to the rest of the team to ramp up on. Their tools were powerful and it was fun to dive into the shader system which drove the particle system. The VFX team at Bungie was really awesome to work with, both collaborative and imaginative. Through the training of our team at VV I created a good amount of detailed documentation to help us transition into the Bungie toolset and hit the ground running.
      </br></br>
      The engine was well optimized and powerful. We were able to create a lot of really awesome FX and materials. Their engine was one of the better ones that i've worked with albiet a bit cumbersome at times.
    `)
  },
  {
    id:'Skylanders:Imaginators-Crash',
    imgsrc: './src/assets/gameboxes/Skylanders_Crashedition.jpg',
    title: 'Skylanders: Imaginators - Crash Action Pack',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['Solo VFX Artist','VFX','Character FX', 'Ability FX', 'Environment FX', 'Visual Scripting', 'Boss FX', 'Proprietary Engine', 'Mini-Games'],
    description: (`
      This has to be one of my favorite projects to work on! It was a perfect storm of small tight knit team, mature workflows and expertise in the franchise. It was a fantastic project!
      </br></br>
      I think the thing i enjoyed the most was the trust and impact that everyone on the team was able to have. It was incredibly smooth from a production standpoint and well scoped. The collaboration with the other disciplines such as design was a dream. This was one of those projects that everyone is there to make the best product and work together like a well oiled machine. A real testiment to what the right team makeup can look like. VV went on to make the Crash Remakes after this project which, in my opinion had a great deal to do with the groundwork and quality we presented on this project.
      </br></br>
      In addition to great team dynamics, this project allowed me to jump into almost every aspect of the game whether it was bosses, environments, player abilities or even mini-games. If every project was like this one I'd be very happy.
    `)
  },
  {
    id:'Skylanders:SuperChargers',
    imgsrc: './src/assets/gameboxes/skylanders_superchargers.jpeg',
    title: 'Skylanders: Super Chargers',
    position: 'Senior VFX Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Character FX','Vehicle FX','Environment FX', 'Proprietary Engine'],
    description: (`
      <strong><em>SuperChargers</em></strong> took the original toys to life franchise and added vehicles to it as this editions innovation. What was once only characters that you could collect you now had matching vehicles along with a crew of both old and new faces.
      </br></br>
      This was my first project that I did solely VFX and what better way to kick that off than with fire tornados and rocking vehicles! There were a lot of really interesting visual challenges to solve. For example <em>Dark Driver</em> had kind of a shadow tenticle kind of hair which needed to flow and be used as part of her ability kit. I also experimented with some neat locomotion where she walked on the hair using bezier curves. <em>Nitro</em> was also a cool character to work on being a fire dragon and all.
      </br></br>
      Collaboration with Design on the character ability and FX was really great. We informed eachother and made the overall experience that much better. We had been working on our workflows and toolset as well which really opened up the possibilities of what we could create. Having expertise in a toolset and having created a similar game already in it goes a long way. Prototyping was streamlined and we could really bend the engine to our will.
      </br></br>
      An interesting tidbit about Skylanders is that our engine was PBR which helped keep the visuals consistent, we had a separate pass for fx so we could make fantastical things as well :D.
    `)
  },
  {
    id:'Skylanders:TrapTeam',
    imgsrc: './src/assets/gameboxes/Skylanders_TT_Art.jpg',
    title: 'Skylanders: Trap Team Tablet',
    position: 'Senior Artist - Generalist',
    studio: 'Vicarious Visions',
    skillTags: ['Generalist', 'Console Port', 'Proprietary Engine', 'Tablet', 'Mobile', 'Solo Artist', 'Environment Art', 'Character Art'],
    description: (`
      <strong><em>Trap Team Tablet</em></strong> was a port project. It made sense for me to be on it given that I had been doing mobile on my last project. The idea here was to take the full console version of the game and get it to run on tablet. OH yeah and it had to look good too, which it did.
      </br></br>
      I spent a lot of time making solutions to convert the existing assets to work with the mobile hardware. This included cleanup, recreation and optimization. I also worked with the engineering team crafting materials that would work well with the game. Mostly though it was trying to get the best quality with the least amount of hand crafted work. Ultimately we were able to create a great product utilizing many procedural processes.
    `)
  },
  {
    id:'Skylanders:LostIslands',
    imgsrc: './src/assets/gameboxes/Skylanders_Lost_Islands.jpg',
    title: 'Skylanders: Lost Islands',
    position: 'Senior Artist - Generalist & Lead',
    studio: 'Vicarious Visions',
    skillTags: ['Mobile', 'Art', 'Lead', 'Outsourcing', 'Resource Managment Game','Live Ops','Proprietary Engine'],
    description: (`
      <strong><em>Lost Islands</em></strong> was an interesting project to work on. Mobile was blowing up at the time with games like <em>dragonville</em> hitting the top of the charts. The main idea was to take Skylanders and convert it into a mobile viable product, complete with the whole toys to life integration. VV did some other titles at this time as well. <em>Lost Islands</em> ended up being the most successful and sustainable of those released. The team itself was relatively small with only a couple of us on the art side. I split the leadership between myself and our UI artist.
      </br></br>
      Team worked well together and we tried our best to "do no evil". I remember another game having a wounded deer in the beginning asking you to save it, I'm glad we never did anything like that!
      </br></br>
      It was interesting jumping into mobile. The desire to be able to run on a toaster makes it a bit difficult to do any highend graphics so we created a process to render out 3d assets and pull them into the game and clean them up. We leaned on outsourcing to get the shear quantity of assets required for this type of game. While helpful to get quantity we always ran into a cycle of asset quality, it would start poor and improve while we trained outsources and then reset once it was solid because the teams would shift and move on to other areas in the outsource house. Managing Outsourcing is definitely a full time job.
      </br></br>
      Once we shipped the base game we continued development in LiveOps. each week we would analyze trends and do our best to create assets that people would want. One of our most successful campaigns was 'Alter Egos' where we took traditional skylander characters and made new skins for them.
      </br></br>
      Ultimately this was a long tailed project and profitable as well. From a craft standpoint it was challenging and isolating. Overall I am happy with what we created and I gained valuable experience. When looking to do a live game I think it's important to look at cadiance and scope as well as look for signs of developer burn out/fatigue.
    `)
  },
  {
    id:'Skylanders:Spyro3ds',
    imgsrc: './src/assets/gameboxes/Skylanders_Spyro_Adventure_box_art.jpg',
    title: `Sklanders: Spyro's Adventure 3ds`,
    position: 'Environment Artist',
    studio: 'Vicarious Visions',
    skillTags: ['Shaders','Environment Art', 'Proprietary Engine'],
    description: (`
      <strong><em>Spyro's Adventure</em></strong> was a really engaging project. I had the opportunity to work on Shaders for the first time in engine. This project really scratched my technical and creative itch. Being a Platformer it really appealed to me.
      </br></br>
      We crafted spyro's adventure 3ds in tandum with the game of the same name on console. It was however it's own and completely different game. It's what won us partnership in the Skylander's franchise.
      </br></br>
      It was fun and interesting developing for the Nintendo 3ds. Having a fix shader pipeline we were able to craft interesting materials for our environments. I fell in love making shaders and cool things to use in our game. things like lava with a crust where it cooled. It was a great opportunity to further stretch outside Environments. Don't get me wrong i love Environment Art but more and more I found myself interested in tech, scripting, shaders and pipeline.
      </br></br>
      I have a lot of fond memories from this project and still have my signed box on display. In writing this I feel a lot of nestalgia and want to go back and play it :D.
    `)
  },
  {
    id:'DJHero',
    imgsrc: './src/assets/gameboxes/dj_hero_3ds.jpg',
    title: 'DJ Hero 3ds',
    position: 'Environment Artist',
    studio: 'Vicarious Visions',
    skillTags: ['Environment Art', 'VFX'],
    description: (`
      DJ was a cool project to work on. Unfortunately it was cancelled before release but we showed the game at E3 along with other launch titles for the Nintendo 3ds. To be honest I liked playing this handheld version more than the base game. It just felt natural and really good to play.
      </br></br>
      The Environments themselves were interesting as well, experimenting with a graphitti like style. I worked on environments primarily as well as the lightshows for the environments.
      </br></br>
      There isn't a lot out there showing what we made but here are a couple screenshots!
      <div class='postImages'>
        <img class='postPic' src='./src/assets/games/djhero/dj01.jpg' alt='dj01'/>
        <img class='postPic' src='./src/assets/games/djhero/dj02.jpg' alt='dj02'/>
        <img class='postPic' src='./src/assets/games/djhero/dj03.jpg' alt='dj03'/>
      </div>
    `)
  },
  {
    id:'BandHero',
    imgsrc: './src/assets/gameboxes/Wii_bandhero.jpg',
    title: 'Band Hero',
    position: 'Environment Artist',
    studio: 'Vicarious Visions',
    skillTags: ['Environment Art', 'Instrument', 'Port'],
    description: (`
      <strong><em>Band Hero</em></strong> was a short port project. After MUA2 a bunch of us piled on to help knock it out. I helped out with the instruments for he game mostly, utilizing my scripting knowledge to make the process faster and more efficient for myself and anyone else dealing with the instrument pipeline.
    `)
  },
  {
    id:'MUA2',
    imgsrc: './src/assets/gameboxes/Marvel_Ultimate_Alliance_2.jpg',
    title: 'Marvel Ultimate Alliance 2',
    position: 'Environment Artist',
    studio: 'Vicarious Visions',
    skillTags: ['Environment Art', 'Destruction', 'Props', 'Skybox'],
    description: (`
      <strong><em>Marvel Ultimate Alliance 2</em></strong> or <em>MUA2</em> was the first project that I worked on at VV. It was a fun project full of a really cool cast of characters, I mean who wouldn't want to work on a Marvel game ;).
      </br></br>
      I worked on a mix of props, environments, destruction and skyboxes. Really anything that needed something done. We made a helicopter crash in one level which as soon as we finished it the desire to have helicopter crashes in every other level popped up. The running joke was to see when we would be putting in another crash lol.
      </br></br>
      This project was a great extension and utilization of the skills and experience I had working on Hulk.
    `)
  },
  {
    id:'Hulk',
    imgsrc: './src/assets/gameboxes/IncredibleHulk.jpg',
    title: 'The Incredible Hulk',
    position: 'Environment Artist',
    studio: 'Edge of Reality',
    skillTags: ['Environment Art','Props','Modular Assets', 'Destruction', 'Mel Script'],
    description: (`
      <strong><em>Hulk</em></strong> was my first game ever! It was a great learning experience and had a lot of great industry vets to learn from.
      </br></br>
      I started working on props and then shifted over to creating destruction assets. I wrote some Mel scripts to help with the setup for the rigid bodies but the asset break up was all by hand, these were the days before Houdini and procedural pipelines, so the destruction pipeline was a destructive one.
      </br></br>
      When I wasn't working on destruction I was helping build storefronts. Hulk was set in Manhatten so there was no shortage of storefronts to create. The team had gone to NYC and collected tons of great reference and we tried our best to be pretty true to the neighborhoods and general layout of the iconic Island. We even created specific landmarks such as Rockefellar center and Time Square which really helped ground the game in some sense of reality.
      </br></br>
      We did a lot on Hulk but we also crunched a lot to get it all done. All in all though it was a fun project with a lot of great people working on it.
    `)
  }

];

module.exports = exp;

},{}],8:[function(require,module,exports){
const Component = require('../Component');

const footerIcons = [
  {
    name: 'GitHub',
    src: './src/assets/icons/github_icon.png',
    link: 'https://github.com/Artantat'
  },
  {
    name: 'LinkedIn',
    src: './src/assets/icons/linkedin_icon.png',
    link: 'https://www.linkedin.com/in/wcastagna/'
  },
  {
    name: 'OpenSea',
    src: './src/assets/icons/opensea_icon.svg',
    link: 'https://opensea.io/Artantat'
  },
  {
    name: 'Redbubble',
    src: './src/assets/icons/redbubble_icon.png',
    link: 'https://www.redbubble.com/people/Artantat/shop'
  },
  {
    name: 'Twitter',
    src: './src/assets/icons/twitter_icon.png',
    link: 'https://twitter.com/Artantat'
  }
];

const getFooterIcons = () =>{
  footerHtml = '';
  for (let icon of footerIcons){
    footerHtml += `<a href="${icon.link}" class="footerIcon"><img class="footerIconImg" src="${icon.src}" alt="${icon.name}" /></a>`;
  }

  return footerHtml;
}

class Footer extends Component{
  constructor(){
    super('div');
    this.component.classList.add('footer');
    this.component.id = 'footer';
    this.component.innerHTML = (`
      <div class="footerBlock">
        ${getFooterIcons()}
      </div>
      <p class="copywrite">\xA9 copyright William Castagna 2022. All rights reserved.</p>
    `);

  }

}

module.exports = Footer;

},{"../Component":3}],9:[function(require,module,exports){
const SkillTagBox = require('../SkillTag/SkillTagBox');
const Component = require('../Component');

class GameProject extends Component{
  constructor(imgsrc='../../assets/gameboxes/default.jpg', title='Game Credit', skillTags=['art', 'banana','apple','squiggle','orange','zippy'], description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',attrs={},events={}){
    super('div',attrs);
    this.component.classList.add('gameContainer');
    this.component.innerHTML = (`
      <div class="gameTitle">${title}</div>
      <div class="gameContent">
        <img
          src="${imgsrc}"
          alt="${title} image"
          class="gameImg"
        />
        ${description}
      </div>
      ${new SkillTagBox(skillTags).getHTML()}

    `);

  }

}

module.exports = GameProject;

},{"../Component":3,"../SkillTag/SkillTagBox":15}],10:[function(require,module,exports){
const Component = require('../Component');
const NavBar = require('../Navigation/NavBar');

class Header extends Component {
  constructor(pic, name, navbar ){
    super('div');
    this.component.classList.add('header');
    this.component.id = 'header';
    this.component.innerHTML = (`
      <div class="banner" id='banner'>
        <img src="${pic}" alt="Picture" class="logo"/>
        <div>
          <div class='headerName'>${name}</div>
          <div class='headerPos'>VFX, Creative, & Code</div>
        </div>
      </div>
    `);
    this.component.children[0].appendChild(navbar.component);
    // this.component.appendChild(navbar.component);
  }
}

module.exports = Header;

},{"../Component":3,"../Navigation/NavBar":11}],11:[function(require,module,exports){
const Component = require('../Component');
const NavBarItem = require('./NavBarItem');

class NavBar extends Component{
  constructor(items=[]){
    super('nav');
    this.component.classList.add('navBar');
    for (let item of items){
      this.component.appendChild(new NavBarItem(item.name,item.id, item.callback).component);
    }

  }
}

module.exports = NavBar;

},{"../Component":3,"./NavBarItem":12}],12:[function(require,module,exports){
const Component = require('../Component');

class NavBarItem extends Component {
  constructor(title,id, callback){
    super('div');
    this.component.classList.add('navBarItem');
    this.component.id = id;
    this.component.innerText = title;
    this.component.addEventListener('click', callback());

  }
}

module.exports = NavBarItem;

},{"../Component":3}],13:[function(require,module,exports){
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

},{"../../init":16,"../Component":3,"../Experience/Experience":6,"../GameProject/GameProject":9}],14:[function(require,module,exports){
const SkillTagBox = require('../SkillTag/SkillTagBox');
const Component = require('../Component');

// Refactor to accept either image or video... or maybe only video...

class ProjectPost extends Component{
  constructor(imgsrc='../../assets/gameboxes/default.jpg', skillTags=['art', 'banana','apple','squiggle','orange','zippy'], description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',attrs={},events={}){
    super('div',attrs);
    this.component.classList.add('postContainer');
    const postContent = new Component('div',{class:'postContent'});
    postContent.component.appendChild(new Component('img',{src:imgsrc,alt:'postImage',class:'postImg'}).component);
    postContent.component.innerHTML += description;

    this.component.appendChild(postContent.component);
    this.component.appendChild(new SkillTagBox(skillTags).component);

  }

}

module.exports = ProjectPost;

},{"../Component":3,"../SkillTag/SkillTagBox":15}],15:[function(require,module,exports){
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

},{"../Component":3}],16:[function(require,module,exports){
 const BASE_URL = "https://will-cast-portfolio.herokuapp.com";

 module.exports = BASE_URL;

},{}],17:[function(require,module,exports){
const App = require('./components/App');

const app = new App();
app.route();

},{"./components/App":2}],18:[function(require,module,exports){


const validateEmail = (email) => {
  const regEx = /^[0-9a-zA-Z]+$/;
  const at = email.indexOf('@');
  const com = email.lastIndexOf('.com');
  if(at === -1 || com === -1){
    return false;
  } else if (at > com){
    return false;
  }
  return true;
}

const validateFields = (fields) => {
  for (field of fields){
    if (field.length === 0){
      return false;
    }
  }
  return true;
}

module.exports = { validateEmail, validateFields };

},{}]},{},[17]);
