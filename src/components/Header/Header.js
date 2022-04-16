const Component = require('../Component');
const NavBar = require('../Navigation/NavBar');

class Header extends Component {
  constructor(pic, name, navbar ){
    super('div');
    this.component.classList.add('header');
    this.component.id = 'header';
    this.component.innerHTML = (`
      <div class="banner">
        <div class='headerName'>${name}</div>
      </div>
    `);
    this.component.appendChild(navbar.component);
  }
}

module.exports = Header;
