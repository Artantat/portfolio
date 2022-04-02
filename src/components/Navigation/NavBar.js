const Component = require('../Component');
const NavBarItem = require('./NavBarItem');

class NavBar extends Component{
  constructor(items=[]){
    super('nav');
    this.component.classList.add('navBar');
    for (let item of items){
      // console.log(item);
      this.component.appendChild(new NavBarItem(item.name, item.callback).component);
      // console.log(new NavBarItem(item, ()=>{console.log('bannana');}));
      // this.component.appendChild(new NavBarItem(item,()=>console.log(item)).component);
    }

  }
}

module.exports = NavBar;
