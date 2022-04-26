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
