const SkillTagBox = require('../SkillTag/SkillTagBox');
const Component = require('../Component');

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
