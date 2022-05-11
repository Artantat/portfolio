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
      My focus was mainly weapons, secrets and reticles to help with the hidden secret mechanics.
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
      It was really awesome working with Bungie, we were able to visit their studio and do some in person training for a few weeks before bringing it back to the rest of the team to ramp up on. Their tools were powerful and it was fun to dive into the shader system which drove the particle system. The VFX team at Bungie was really awesome to work with, both collaborative and imaginative.
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
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'BandHero',
    imgsrc: './src/assets/gameboxes/Wii_bandhero.jpg',
    title: 'Band Hero',
    position: 'Environment Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'MUA2',
    imgsrc: './src/assets/gameboxes/Marvel_Ultimate_Alliance_2.jpg',
    title: 'Marvel Ultimate Alliance 2',
    position: 'Environment Artist',
    studio: 'Vicarious Visions',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:'Hulk',
    imgsrc: './src/assets/gameboxes/IncredibleHulk.jpg',
    title: 'The Incredible Hulk',
    position: 'Environment Artist',
    studio: 'Edge of Reality',
    skillTags: ['VFX','Shader FX','Character FX'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },

];

module.exports = exp;
