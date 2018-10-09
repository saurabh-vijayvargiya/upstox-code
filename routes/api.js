const express = require("express");
const router = express.Router();

const User = require("../model/User");

// Order Model
const Order = require("../model/Orders");

// @route GET api/orders
router.get('/', (req, res) => {
    User.find()
    .then(items => res.status(200).json(items))
});

router.post('/signup', (req, res) => {
   const { body } = req;
   const {
       username,
       password
   } = body;
   if (!username) {
       res.status(400).json({
           success: false,
           message: 'Error: Username cannot be blank'
       });
   }

   if (!password) {
       res.status(400).json({
           success: false,
           message: 'Error: Password cannot be blank'
       });
   }

   User.find({
       username: username
   }).then(previousUsers => {
     if (previousUsers.length > 0) {
        res.status(400).json({
            success: false,
            message: 'Error: User with this username is already registered'
        });
     }
     const newUser = new User();
     newUser.username = username;
     newUser.password = newUser.generateHash(password);
     newUser.save().then(user => {
        res.status(200).json({
            success: true,
            message: user
        });
     })
     .catch(err => {
       if (err) {
         console.log(err);
         res.status(400).json({
             success: false,
             message: 'Error: Server error'
         });
       }
     });
   })
   .catch(err => {
     if (err) {
          res.status(400).json({
              success: false,
              message: 'Error: Server error'
          });
     }
   });
});
module.exports = router;
