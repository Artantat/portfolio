// import "UIComponent";
const UIComponent = require('./UIComponent')

class UIGameCredit {
  constructor(imgsrc='default.jpg', title='Game Credit', id='game_id', tags=['art']){
    this.imgsrc = imgsrc;
    this.title = title;
    this.tags = tags;
    this.container = new UIComponent('div', {'class':'gameCreditContainer','id':id});
    this.component_box = new UIComponent('img', {'class':'gameBox', 'src':imgsrc});
    this.component_title = new UIComponent('div', {'class':'gameTitle'});
    this.component_title.component.innerText = title;
    this.component_tagbox = new UIComponent('div', {'class':'tagbox'});
    this.component_tags = [];
    for (let tag of tags){
      // console.log('tag',tag);
      let newtag = new UIComponent('div', {'class':'gameTag'});
      newtag.component.innerText = tag;
      this.component_tags.push(newtag);
    }
    console.log('tags',this.component_tags);
    this.component_tagbox.appendComponents(this.component_tags);
    this.container.appendComponents([
      this.component_box,
      this.component_title,
      this.component_tagbox
    ]);
  }

  attachContainer(selector){
    this.container.attachBySelector(selector);
  }
};

module.exports = UIGameCredit;
