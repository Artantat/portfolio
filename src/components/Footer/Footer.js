const Component = require('../Component');

const footerIcons = [
  {
    name: '',
    src: '',
    link: ''
  }
];

const getFooterIcons = () =>{
  footerHtml = '';
  for (let icon of footerIcons){
    footerHtml += `<a href="${icon.link}"><img class="footerIcon" src="${icon.src}" alt="${icon.name}" /></a>`;
  }
  return footerHtml;
}

class Footer extends Component{
  constructor(){
    super('div');
    this.component.innerHTML = (`
      <div class='footer' id='footer'>
        ${getFooterIcons()}
      </div>
    `);

  }

}

module.exports = Footer;
