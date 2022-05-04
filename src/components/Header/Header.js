const Component = require('../Component');
const NavBar = require('../Navigation/NavBar');

class Header extends Component {
  constructor(pic, name, navbar ){
    super('div');
    this.component.classList.add('header');
    this.component.id = 'header';
    this.component.innerHTML = (`
      <div class="banner" id='banner'>
        <img src="${pic}" alt="Picture" class="logo"/>
        <div>
          <div class='headerName'>${name}</div>
          <div class='headerPos'>VFX, Creative, & Code</div>
        </div>
      </div>
    `);
    this.component.children[0].appendChild(navbar.component);
    // this.component.appendChild(navbar.component);
  }
}

module.exports = Header;
