const Component = require('../Component');

class Sample extends Component{
  constructor(){
    super('div',{class:'sampleArea'});
    this.component.appendChild(new Component('div',{
      class:'sampleBox',
      innerHTML:(`
        <img src='' alt='' class='sampleImg'/>
        <div class='sampleTitle'>Title</div>
      `)
    }).component);

  }
}

module.exports = Sample;
