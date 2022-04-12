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
      // console.log('click', event, event.target, event.target.value);
      const email = document.getElementById('email').value;
      const name = document.getElementById('contactName').value;
      const type = document.getElementById('contactType').value;
      fetch(`http://localhost:3002/submitemail`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          name: name,
          email: email,
          type: type
        })
      })
      .then(response => {
        console.log(response);
        if (response.status === 200){
          return response.json();
        } else {
          throw new Error('Squiggle');
        }

      })
      .then(data => {

        this.component.innerHTML = (`
          <div class=contactThanks>${data.email},</br></br>Thanks for reaching out! I'll get back to you as soon as i can. In the mean time check out the rest of the site or the blog. </br></br>Regards,</br>William Castagna</div>
          `);


      })
      .catch(err => console.log(err));

    };

    this.component.innerHTML = (`
      <form class="contactForm" onsubmit="return false">
        <div class="contactLabels" for="contactName"> Name </div>
        <input class="contactName" id="contactName" type="text"/>
        </br>
        <div class="contactLabels" for="email"> Email </div>
        <input class="contactInput" id="email" type="email"/>
        </br>
        <div class="contactLabels" for="contactType">Reason to get in touch</div>
        <div class="wrapper">
          <select id="contactType" class="contactDropdown">
            <option value="jobgames">Hire me for Games</option>
            <option value="jobweb">Hire me for Web</option>
            <option value="jobconsult">Hire for consultations</option>
            <option value="collab">Collaborate on personal project</option>
          </select>
        </div>
        </br>

      </form>
    `);
    this.component.children[0].appendChild(submitbtn.component);
    // this.component.appendChild(submitbtn.component);

  }


}

module.exports = Contact;
