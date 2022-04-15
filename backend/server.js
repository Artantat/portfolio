const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const gamecredits = require('./data/data_gamecredits.js');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.MAILSERVICE,
  auth: {
    user: process.env.MAILUSER,
    pass: process.env.MAILPASS
  }
});
// const gamecredits = [
//   {
//     imgsrc: '../src/assets/gameboxes/d2_blackarmory.jpg',
//     title: 'Destiny 2: Black Armory',
//     skillTags: ['VFX','Shader FX','Character FX']
//   },
//   {
//     imgsrc: '../src/assets/gameboxes/thps.jpg',
//     title: 'Tony Hawk 1 + 2: Remaster',
//     skillTags: ['VFX','Shader FX','Character FX', 'Destruction', 'Houdini', 'Unreal 4']
//   }
// ];

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
  console.log('working');
  return res.status(200).json('root hook ok!');
});

app.get('/projectsgames', (req, res)=>{
  return res.status(200).json(gamecredits);
});

app.post('/submitemail', (req, res)=>{
  setTimeout(() => {
    const { name, email, type, message } = req.body;
    const mail = {
      from: process.env.MAILUSER,
      to: process.env.MAILUSER,
      subject: `Web Contact From Portfolio For:${type}`,
      text: (`
        Name: ${name}
        From: ${email}
        Message: ${message}
      `)
    };
    // console.log(mail);
    // console.log(mail);
    // console.log(transporter);
    // return res.status(400).json('something');
    return res.status(200).json({email: email});
    transporter.sendMail(mail, (err,info)=>{
      if(err){
        console.log(err);
        console.log('error sending mail. make all env variables are set properly and @gmail.com is part of username');

        return res.status(400).json(err);
      } else {
        return res.status(200).json({email: email});
      }
    });

  },500);

});

const port = 3002;

app.listen(port,()=>{
  console.log(`app is running on port ${port}`);
});
