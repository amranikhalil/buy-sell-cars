const express = require("express")
const multer= require("multer")
const userModel =require('../model/user')

const router = express.Router();

router.post('/subscribe',(req,res)=>{
    userModel.create(req.body)
    .then(user=>res.json(user))
    .catch(error=>res.json(error))
})

router.get('/get-active-users', (req, res) => {
  userModel.find({ active: 'active' }).then(data => {
    res.send(data);
  });
});

router.get('/get-notactive-users', (req, res) => {
  userModel.find({ active: 'not_active' }).then(data => {
    res.send(data);
  });
});

router.get('/block', async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.json("It should have the id");
    }

    const blockedUser = await userModel.findByIdAndUpdate(
      id,
      { active: 'not_active', },
      { new: true }
    );

    if (blockedUser) {
      res.json("The user is successfully blocked");
    } else {
      res.json("User not found");
    }
  } catch (error) {
    res.json(error);
  }
});


router.get('/unblock', async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.json("It should have the id");
    }

    const blockedUser = await userModel.findByIdAndUpdate(
      id,
      { active: 'active' },
      { new: true }
    );

    if (blockedUser) {
      res.json("The user is successfully unblocked");
    } else {
      res.json("User not found");
    }
  } catch (error) {
    res.json(error);
  }
});

router.post('/Login', (req, res) => {
  const { email, password } = req.body;
	
  userModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          if (user.active === 'active') {
            res.json({
              success: true,
              userId: user._id,
              name:user.name,
              userType: user.userType,
            });
          } else {
            res.status(403).json({ message: 'Your account is blocked' });
          }
        } else {
          res.status(401).json({ message: 'Incorrect password' });
        }
      } else {
        res.status(404).json({ message: 'No record exists with this email' });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports= router
