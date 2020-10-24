const formidable = require('formidable');
const _ = require('lodash');
const Work = require('../models/work');
const fs = require('fs');
const {errorHandler} = require('../helpers/dbErrorHandlers');

exports.create = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "image could not uploaded"
      })
    }
    //check for all fileds
    const {
      worktype,
      address,
      phone,
      wage,
      category,
      reqWorkers,
    } = fields;
    if (!worktype || !address || !phone || !wage || !category || !reqWorkers) {
      return res.status(400).json({
        error: "all fields are required",
      });

    }

    let work = new Work(fields)

    if (files.photo) {
      // console.log("files:"+files.photo
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "image should  not be less than 1mb",
        });
      } 
      work.photo.data = fs.readFileSync(files.photo.path)
      work.photo.contentType = files.photo.type
    }
    work.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });

  })
}