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
            Hi, thanks for dropping by!
          </p>
          <p>
            I absolutely love making games! I've been a Game Developer for ${expTimeYears} years ${expTimeMonths} months and ${expTimeDaysRemaining} days. In my career I've worked at three studios, I cherish the time at each. It's been awesome working with so many talented people while working on such a diverse and extraordinary set of projects. Each project has had their own challenges and triumphs but all have made me better for it.
          </p>
          <p>
            I believe that clear direction and great communication are the cornerstones of successful developement. When you have a collaborative team with a solid vision it is an unstoppable force. Luckily, both collaborative culture and strong vision are within our power as leaders to create and cultivate.
          </p>
          <p>
            I love learning, whether or not it's game related. Even at my busiest I always find time to continue my development. I typically try to do some manner of training for an hour or so a few times a week, keeping the commitment relatively small and managable while chipping away at a larger goal or skill improvment. Learning and development are passions of mine, not only for myself but also to teach and share the expertise and knowledge I've aquired.
          </p>
          <p>
            Here is a quick breakdown of my skills and experience:
            </br>
          </p>
          <strong>Development Software</strong>
          <hr>
          <p class='bioSkills'>
            <strong>Game Engines:</strong> Unreal 4, and about a dozen proprietary engines
            </br>
            <strong>Content Software:</strong> Substance Designer, 3dsmax, Maya, Houdini, Unreal, Z-Brush, Photoshop, Illustrator, AfterFX
            </br>
            <strong>Production Software:</strong> Jira, Confluence, Perforce, Git, DevTrack, Excel/Sheets, Power point
            </br>
            <strong>Programming:</strong> Javascript(including NodeJS & React), Python, dabbled in C# & C++
            </br>
            <strong>Active Training:</strong> Blender, Unreal 5, Embergen
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
          <strong>Game Credits</strong>
          <hr>
            <p class='bioSkills'>
              Star Wars: The Old Republic (PC) - Showdown on Ruhnuk (7.2)</br>
              Star Wars: The Old Republic (PC) - Digging Deeper (7.1)</br>
              Star Wars: The Old Republic (PC) - Legacy of the Sith (7.0)</br>
              Star Wars: The Old Republic (PC) - Secrets of the Enclave (6.3)</br>
              Star Wars: The Old Republic (PC) - Spirit of Vengeance (6.2)</br>
              Tony Hawk Pro Skater 1+ 2 remaster (Console)</br>
              Destiny 2: Black Armory (Console)</br>
              Destiny 2: Warmind (Console)</br>
              Skylanders: Imaginators (Crash Action Pack) (Xbone, Ps4)</br>
              Skylanders: Superchargers (Xbone,Ps4,PS3,Xb360, WiiU, iOS)</br>
              Skylanders: Trap Team (Tablet)</br>
              Skylanders: Lost Islands (Mobile, Main Development and LiveOps.)</br>
              Skylanders: Spyro's Adventure (Nintendo 3ds)</br>
              DJ Hero 3DS (Nintendo 3ds)(Announced and shown at E3, not released)</br>
              Band Hero (Console)</br>
              Marvel Ultimate Alliance 2 (Console)</br>
              The Incredible Hulk (Console)</br>
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
