const Component = require('./Component');

class NavBar extends Component{
  constructor(items=[]){
    super('nav');
    this.component.classList.add('navBar');

    let html = '';
    for (let item of items){

    }
    this.component.innerHTML = html;
  }
}

module.exports = NavBar;
