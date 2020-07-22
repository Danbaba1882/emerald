const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const moment = require('moment');
const multer = require('multer');
const fs = require('fs');
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const emerald = express();
const database = require('./models/database');
const Message = require('./models/message')
const Project = require('./models/project')


emerald.use(bodyparser.json());
emerald.use(bodyparser.urlencoded({extended: true}));
emerald.use(express.static(__dirname+'/emerald/dist'));
emerald.use('/*', express.static(__dirname+'/emerald/dist/index.html'));

emerald.post('/api/message', (req,res)=>{
    console.log(req.body)
    const messages = new Message({
        name: req.body.name,
        mobile: req.body.mobile,
        email:req.body.email,
        message:req.body.message
       
    })

    const auth = {auth: {
        api_key:'77a1d7ffd22352ace81b6d8b157c2685-46ac6b00-ac16df5a',
        domain:'sandbox6b9442a86ae346899583077bfd8228fa.mailgun.org'
    }}
    
        var transporter = nodemailer.createTransport(mailGun(auth));
           const mailOptions = {
            from: req.body.email+ ' '+req.body.mobile, // sender address
            to: 'emeraldstechub@gmail.com', // list of receivers
            subject: 'Subject of your email', // Subject line
            html: req.body.message+' <p>Your html here</p>'// plain text body
          };
   
    Message.create(messages).then((savedMessage)=>{
        console.log('Saved '+ savedUser.username)
    }).catch((err)=>{
        if (err){
            res.send(err)
        }

        else{
            transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                  res.send(err)
                else
                  console.log(info);
                  res.send('email sent and database has been updated')
             }); 
        }
    })
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'filesuploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
 // upload.single('file')
  var upload = multer({ storage: storage })

emerald.post('/api/project', upload.array('file'), async (req,res)=>{
    console.log(req.files)
    const projects = new Project({
        name: req.body.name,
        mobile: req.body.mobile,
        email:req.body.email,
        ptype:req.body.ptype,
        project:req.body.project,
        file: req.files
    })

    const auth = {auth: {
        api_key:'77a1d7ffd22352ace81b6d8b157c2685-46ac6b00-ac16df5a',
        domain:'sandbox6b9442a86ae346899583077bfd8228fa.mailgun.org'
    }}
    
        var transporter = nodemailer.createTransport(mailGun(auth));
           const mailOptions = {
            from: req.body.email + ' '+req.body.mobile , // sender address
            to: 'emeraldstechub@gmail.com', // list of receivers
            subject: 'Subject of your email', // Subject line
            html: req.body.project+' <p>Your html here</p>'// plain text body
          };
   
    await Project.create(projects).then((savedProject)=>{
        console.log('Saved '+ savedUser.username)
    }).catch((err)=>{
        if (err){
            res.send(err)
        }

        else{
            transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                  res.send(err)
                else
                  console.log(info);
                  res.send('email sent and project database has been updated')
             }); 
        }
    })
})

emerald.listen(process.env.PORT || 3000)
console.log('server is listening at port 3000');