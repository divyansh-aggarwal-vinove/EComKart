const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require('../config');
const User = require("../models/User");

exports.user_signup = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              name: req.body.name,
              age: req.body.age,
              contactno: req.body.contactno,
              address: req.body.address,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
};

exports.user_all = (req, res, next) => {
  User.find()
    .select("name age contactno address email")
    .exec()
    .then(docs => {
      const response = {
        users: docs.map(doc => {
          return {
            name: doc.name,
            age: doc.age,
            contactno: doc.contactno,
            email: doc.email,
            address: doc.address
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.user_login = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id
            },
            config.jwtkey,
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token
          });
        }
        res.status(401).json({
          message: "Auth failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.user_delete = (req, res, next) => {
  User.remove({ email: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.user_edit = async (req, res, next) => {
  const id = req.params.userId;
  const email = req.body.email;
  const user = await User.findById({
    _id: id
  });
  const emailExist = await User.findOne({
    "req.body.email": email
  })
  try {
    if (emailExist && emailExist.local.email !== user.local.email) {
      console.log('email exists and its not mine')
      res.status(200).json({
        error: "Email already registered",
        user: user
      })
    } else {
      if (!emailExist || emailExist.local.email === user.local.email) {
        console.log("email doesnt exist or email exist and it's current user")
        const currUser = await User.findByIdAndUpdate({
          _id: id
        }, req.body);
        if (!currUser) {
          console.log('cannot fin user')
          return res.status(400).json({
            errorMessage: "Could not find user"
          })
        } else {
          console.log('====edit user====')
          res.status(200).json({
            message: "Successfully edit user",
            user: currUser
          })
        }
      }
    }
  } catch (error) {
    console.log('is there a problem')
    res.json({
      errorMessage: error
    })
  }
}
exports.curr_User = async (req, res, next) => {
  let id = req.params.id
  try {
    const user = await User.findById({
      _id: id
    })
    if (!user) {
      res.status(400).send({
        success: false,
        message: "User not found"
      });
    } else {
      res.status(200).json({
        user
      })
    }
  } catch (error) {
    res.json(error)
  }

}