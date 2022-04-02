const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const gamecredits = [
  {
    imgsrc: '../src/assets/gameboxes/d2_blackarmory.jpg',
    title: 'Destiny 2: Black Armory',
    skillTags: ['VFX','Shader FX','Character FX']
  },
  {
    imgsrc: '../src/assets/gameboxes/thps.jpg',
    title: 'Tony Hawk 1 + 2: Remaster',
    skillTags: ['VFX','Shader FX','Character FX', 'Destruction', 'Houdini', 'Unreal 4']
  }
];

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

const port = 3002;

app.listen(port,()=>{
  console.log(`app is running on port ${port}`);
});
