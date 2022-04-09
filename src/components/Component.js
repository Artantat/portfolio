class Component{
  constructor(elementType='div'){
    this.component = document.createElement(elementType);
  }

  getHTML(){
    return this.component.outerHTML;
  }

  toJSON(){
    let obj = {
      elementType: this.component.nodeName,
      attributes: {},
      innerHTML: this.component.innerHTML
    };
    for (let attr of this.component.getAttributeNames()){
      obj.attributes[attr] = this.component.getAttribute(attr);
    }
    return JSON.stringify(obj);
  }

  static fromJSON(obj){
    obj = JSON.parse(obj);
    let newComp = new Component(obj.elementType);
    for (let attr in obj.attributes){
      newComp.component.setAttribute(attr,obj.attributes[attr]);
    }
    newComp.component.innerHTML = obj.innerHTML;
    return newComp;
  }
}

module.exports = Component;
