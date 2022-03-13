const Component = require('../Component');
const NavBarItem = require('./NavBarItem');

class NavBar extends Component{
  constructor(items=[]){
    super('nav');
    this.component.classList.add('navBar');
    new NavBarItem(items[0], () => console.log('monkey'));
    for (let item of items){
      console.log(item);
      this.component.appendChild(new NavBarItem(item, () => console.log(item)).component);
      // console.log(new NavBarItem(item, ()=>{console.log('bannana');}));
      // this.component.appendChild(new NavBarItem(item,()=>console.log(item)).component);
    }

  }
}

module.exports = NavBar;
