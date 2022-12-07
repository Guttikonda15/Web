const express = require('express');
const   User = require('../models/note');
const router = express.Router();
router
.get('/getnote', async (req, res) => {
    try {
      let noteget = await User.getnote(req.body);
      res.send(noteget)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/createnote', async (req, res) => {
    try {
      let notecreates = await User.createnote(req.body);
      res.send(notecreates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  

  .post('/deletenote', async (req, res) => {
    try {
      let noteupdates = await User.deletenote(req.body);
      res.send(noteupdates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/editnote', async (req, res) => {
    try {
      let noteedit= await User.editnote(req.body);
      res.send(noteedit)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  
module.exports=router;