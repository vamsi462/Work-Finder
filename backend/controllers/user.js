 const express = require('express');
 const User = require('../models/user');
 const router = express.Router()

 exports.userById = (req, res, next, id) => {
     User.findById(id).exec((err, user) => {
         if (err || !user) {
             return res.status(400).json({
                 error: "User not found"
             });
         }

         req.profile = user;
         next();
     })
 }

 exports.read = (req, res) => {
     req.profile.hashed_password = undefined;
     req.profile.salt = undefined;
     return res.json(req.profile)

 }


 exports.update = (req, res) => {
     // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
     const {
         name,
         password
     } = req.body;

     User.findOne({
         _id: req.profile._id
     }, (err, user) => {
         if (err || !user) {
             return res.status(400).json({
                 error: 'User not found'
             });
         }
         if (!name) {
             return res.status(400).json({
                 error: 'Name is required'
             });
         } else {
             user.name = name;
         }

         if (password) {
             if (password.length < 6) {
                 return res.status(400).json({
                     error: 'Password should be min 6 characters long'
                 });
             } else {
                 user.password = password;
             }
         }

         user.save((err, updatedUser) => {
             if (err) {
                 console.log('USER UPDATE ERROR', err);
                 return res.status(400).json({
                     error: 'User update failed'
                 });
             }
             updatedUser.hashed_password = undefined;
             updatedUser.salt = undefined;
             res.json(updatedUser);
         });
     });
 };


 exports.addAcceptWorkToUserHistory = (req, res, next) => {
     let history = [];

     req.body.acceptWork.products.forEach(item => {
         history.push({
             _id: item._id,
             worktype: item.worktype,
             address: item.address,
             category: item.category,
             reqWorkers: item.count
         });
     });

     User.findOneAndUpdate({
         _id: req.profile._id
     }, {
         $push: {
             history: history
         }
     }, {
         new: true
     }, (error, data) => {
         if (error) {
             return res.status(400).json({
                 error: 'Could not update Accepted History'
             });
         }
         next();
     });
 };