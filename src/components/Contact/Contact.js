const Component = require('../Component');

class Contact extends Component {
  constructor(){
    super('div');
    this.component.classList.add('contactContainer');
    const submitbtn = new Component('button');
    submitbtn.component.classList.add('contactSubmit');
    submitbtn.component.innerText = 'Submit';
    submitbtn.component.onclick = (event) =>{
      // console.log(BASE_ROUTE_URL);
      console.log('click', event, event.target, event.target.value);
      fetch(`http://localhost:3002/submitemail`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          email: 'email',
          message: 'message'
        })
      })
      .then(response => response.json())
      .then(data => {
        this.component.innerHTML = (`
          <div class=contactThanks>Thanks for reaching out!</br>I'll get back to you as soon as i can!</div>
          `);
      })
      .catch(err => console.log(err));

    };

    this.component.innerHTML = (`
      <form class="contactForm" onsubmit="return false">
        <label class="contactLabels" for="email"> Email </label>
        <input class="contactInput" id="email" type="email"/>
        </br>
        <label class="contactLabels" for="emailMessage"> Breif Message </label>
        <input class="contactInput" id="emailMessage" type="text"/>
        </br>

      </form>
    `);
    this.component.children[0].appendChild(submitbtn.component);
    // this.component.appendChild(submitbtn.component);

  }


}

module.exports = Contact;
