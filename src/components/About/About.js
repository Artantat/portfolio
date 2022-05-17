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
            <strong>Skills Developement:</strong> C++ From beginner to beyond, Complete webdev: zero to mastery, Etherium & smart contracts from scratch, Blockchain & Crypto currancy: Python & React
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
