// NOTE: when using the events addEventlistener it seems if you later manipulate
// the innerHTML on the component the listener is then lost... this may be from
// the id missing? I wonder if this would happen if i supplied an id: for the expand

class Component{
  constructor(elementType='div', attrs={}, events={}){
    this.elementType = elementType;
    this.attrs = attrs;
    if(!this.attrs.class){
      this.attrs.class = 'default';
    }
    this.events = events;

    this.component = document.createElement(this.elementType);
    this.component.classList.add(this.attrs.classes);
    for(let attr in this.attrs){
      if(attr === 'innerHTML'){
        this.component.innerHTML = this.attrs[attr];
      }else{
        this.component.setAttribute(attr,this.attrs[attr]);
      }

    }
    for(let evnt in this.events){
      this.component.addEventListener(evnt, this.events[evnt]);
    }

  }

  getHTML(){
    return this.component.outerHTML;
  }

  toJSON(){
    return JSON.stringify({
      elementType: this.elementType,
      attrs: this.attrs
    });
  }

  getEventNames(){
    const eventNames = [];
    for (let evnt in this.events){
      eventNames.push(evnt);
    }
    return eventNames;
  }
}

module.exports = Component;
