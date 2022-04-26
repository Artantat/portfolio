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
