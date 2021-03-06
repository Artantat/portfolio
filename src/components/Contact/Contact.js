const Component = require('../Component');
const BASE_URL = require('../../init');
const { validateEmail, validateFields } = require('../../utils');

class Contact extends Component {
  constructor(){
    super('div', {class:'contactContainer'});
    document.getElementById('Root').classList.add('dark');
    // document.getElementById('Root').classList.remove('dark');

    const submitbtn = new Component('button');
    submitbtn.component.classList.add('contactSubmit');
    submitbtn.component.id = 'submitbtn';
    submitbtn.component.innerText = 'Submit';
    submitbtn.component.onclick = (event) =>{

      const email = document.getElementById('email').value;
      const name = document.getElementById('contactName').value;
      const type = document.getElementById('contactType').value;
      const message = document.getElementById('contactMessage').value;

      const fields = [email, name, type, message];
      if (validateFields(fields) && validateEmail(email)){
        fetch(`${BASE_URL}/submitemail`, {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            name: name,
            email: email,
            type: type,
            message: message
          })
        })
        .then(response => {
          console.log(response);
          if (response.status === 200){
            return response.json();
          } else {
            throw new Error(`Error ${response.status} Please try again later.`);
          }

        })
        .then(data => {
          this.component.innerHTML = (`
            <div class="contactThanks">${data.email},</br></br>Thanks for reaching out! I'll get back to you as soon as i can.</br>In the mean time follow me on on my socials or check out my blog. </br></br>Regards,</br>William Castagna</div>
            `);
        })
        .catch(err => {
          this.component.innerHTML = (`
            <div class="contactThanks contactError">${err}</div>
          `);
        });
      } else if (!validateFields(fields)){
        document.getElementById('contactSubmitError').innerHTML = 'Some required fields are empty please ensure to fill all fields';
      } else if (!validateEmail(email)){
        document.getElementById('contactSubmitError').innerHTML = 'Please enter valid e-mail address.';
      }

    };

    this.component.innerHTML = (`
      <form class="contactForm" onsubmit="return false">
        <div class="contactLabels" for="contactName"> Name </div>
        <input class="contactName" id="contactName" type="text" required/>
        </br>
        <div class="contactLabels" for="email"> Email </div>
        <input class="contactInput" id="email" type="email" required/>
        <div class="contactValidError" id="emailValidation" for="email"></div>
        </br>
        <div class="contactLabels" for="contactType">Topic</div>
        <div class="wrapper">
          <select id="contactType" class="contactDropdown">
            <option value="jobgames">Game Gig</option>
            <option value="jobweb">Web Work</option>
            <option value="jobconsult">Consulting</option>
            <option value="collab">Collaboration</option>
          </select>
        </div>
        </br>
        <div class="contactLabels" for="contactMessage">Message</div>
        <textarea class="contactMessage" id="contactMessage" type="text" maxlength="250" required></textarea>
        <div class="contactValidError" id="contactMessageValid" for="contactMessage"></div>
        <div class="contactValidError" id="contactSubmitError" for="submitbtn"></div>
        </br>
      </form>
    `);
    this.component.children[0].appendChild(submitbtn.component);
    for (let child of this.component.children[0]){
      if (child.id === 'email'){
        child.oninput = (event) => {
          if (validateEmail(event.target.value)){
            document.getElementById('emailValidation').innerHTML = '';
          } else {
            document.getElementById('emailValidation').innerHTML = (`
              Emails should have @ and .com ex. test@test.com
              `);
          }
        };
      }
      if (child.id === 'contactMessage'){
        child.oninput = (event) =>{
          document.getElementById('contactMessageValid').innerHTML = (`
            message ${event.target.value.length} / 250
          `);
        }
      }
    }

  }


}

module.exports = Contact;
