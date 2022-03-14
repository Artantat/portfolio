const Component = require('../Component');

const footerIcons = [
  {
    name: 'GitHub',
    src: './src/assets/icons/github_icon.png',
    link: 'https://github.com/Artantat'
  },
  {
    name: 'LinkedIn',
    src: './src/assets/icons/linkedin_icon.png',
    link: 'https://www.linkedin.com/in/wcastagna/'
  },
  {
    name: 'OpenSea',
    src: './src/assets/icons/opensea_icon.svg',
    link: 'https://opensea.io/Artantat'
  },
  {
    name: 'Email',
    src: './src/assets/icons/email_icon.png',
    link: 'mailto: wcastagna@gmail.com'
  },
  {
    name: 'Redbubble',
    src: './src/assets/icons/redbubble_icon.png',
    link: 'https://www.redbubble.com/people/Artantat/shop'
  },
  {
    name: 'Twitter',
    src: './src/assets/icons/twitter_icon.png',
    link: 'https://twitter.com/Artantat'
  }
];

const getFooterIcons = () =>{
  footerHtml = '';
  for (let icon of footerIcons){
    console.log(icon);
    footerHtml += `<a href="${icon.link}" class="footerIcon"><img class="footerIconImg" src="${icon.src}" alt="${icon.name}" /></a>`;
  }
  console.log(footerHtml);
  return footerHtml;
}

class Footer extends Component{
  constructor(){
    super('div');
    this.component.classList.add('footer');
    this.component.id = 'footer';
    this.component.innerHTML = (`
      <div class="footerBlock">
        ${getFooterIcons()}
      </div>
      <p class="copywrite">\xA9 copyright William Castagna 2022. All rights reserved.</p>
    `);

  }

}

module.exports = Footer;
