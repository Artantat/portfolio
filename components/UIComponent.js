class UIComponent {
  constructor(type='div', attrs={}){
    // this.parentNodeId = parentNodeId;
    this.type = type;
    this.attrs = attrs;
    this.getComponent = () => {
      const comp = document.createElement(this.type);
      for (let attr in this.attrs){
        comp.setAttribute(attr, this.attrs[attr]);
      }
      return comp;
    };
    this.component = this.getComponent();
  }

  attachToNode(node){
    return node?.appendChild(this.component);
  }

  attachToId(id){
    return document.getElementById(id)?.appendChild(this.component);
  }

  attachBySelector(selector){
    return document.querySelector(selector)?.appendChild(this.component);
  }

  attachToAllSelector(selector){
    const elements = document.querySelectorAll(selector)
    for (let element of elements){
      element.appendChild(this.component);
    }
  }

  appendComponents(components=[]){
    console.log('components', components);
    for(let component of components){
      // console.log('component', component);
      this.component.appendChild(component.component);
    }
  }

  static isUniqueId(id){
    if (document.getElementById(id)){
      return false;
    } else {
      return true;
    }
  }

  static clone(obj){
    const type = obj.type;
    const newAttrs = JSON.parse(JSON.stringify(obj.attrs));
    for (let attr in newAttrs){
      if(attr === 'id'){
        let counter = 1;
        let newId = '';
        do {
          newId = newAttrs[attr] + '_copy_' + counter++;
          // console.log(newId);
        } while (UIComponent.isUniqueId(newId) === false);
        newAttrs['id'] = newId;
        // console.log('newId',newId);
      }
    }
    const copy = new UIComponent(type,newAttrs);
    copy.component.innerText = obj.component.innerText;
    return copy;
  }

  static cloneToAllSelectors(selector, obj){
    const elements = document.querySelectorAll(selector);
    const cloned = [];
    for (let element of elements){
      const copy = UIComponent.clone(obj);
      // const copy = new UIComponent(obj.type, obj.attrs);
      element.appendChild(copy.component);
      cloned.push(copy);
    }
    return cloned;
  }

  detachComponent(parentNodeId){
    return this.component.parentElement.removeChild(this.component);
  }

  getComponent(){
    const comp = document.createElement(this.type);
    console.log(comp);
    for (let attr in this.attrs){
      console.log('attr',attr);
      comp.setAttribute(attr, this.attrs[attr]);
    }
    return comp;
  }

}

module.exports = UIComponent;
