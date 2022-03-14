const Component = require('../Component');
const NavBar = require('../Navigation/NavBar');

class Header extends Component {
  constructor(pic='./src/assets/profile/profile.png', name='Artantat' ){
    super('div');
    this.component.classList.add('header');
    this.component.id = 'header';
    this.component.innerHTML = (`
      <div class="banner">
        <img src="${pic}" alt="Picture" class="profilePic"/>
        <div class='headerName'>${name}</div>
      </div>
    `);
    this.component.appendChild(new NavBar(['About','Games','Personal Projects','Contact']).component);
  }
}

module.exports = Header;
