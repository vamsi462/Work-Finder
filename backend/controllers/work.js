const formidable = require('formidable');
const _ = require('lodash');
const Work = require('../models/work');
const fs = require('fs');
const {errorHandler} = require('../helpers/dbErrorHandlers');


exports.workById = (req, res, next, id) => {
  Work.findById(id)
    .populate('category')
    .exec((err, work) => {
      if (err || !work) {
        return res.status(400).json({
          error: "work not found"
        })
      }
      req.work = work
      next();
    })
}

exports.read = (req, res) => {
  req.work.photo = undefined
  return res.json(req.work)
}

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
      if (files.photo.size < 10000) {
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
exports.remove = (req, res) => {
  let work = req.work
  work.remove((err, deletedwork) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }

    res.json({

      "message": "work deleted successfully"
    })
  })
}

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "image could not uploaded",
      });
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
     if (!worktype || !address || !phone || !wage || !category || !reqWorkers)
     {
      return res.status(400).json({
        error: "all fields are required",
      });
    }

    let work = req.work
    work = _.extend(work, fields)

    if (files.photo) {
      // console.log("files:"+files.photo
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "image should  not be less than 1mb",
        });
      }
      work.photo.data = fs.readFileSync(files.photo.path);
      work.photo.contentType = files.photo.type;
    }

    work.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

//postedworks / newarrival 

//by accepted = /works?sortBy=posted&accepted=desc&limit=4
//by newPosted = /works?sortBy=createdAt&accepted=desc&limit=4
//if no params are sent , then all works are returned

exports.list = (req, res) => {
  let accepted = req.query.accepted ? req.query.accepted : 'asc'
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id'
  let limit = req.query.limit ? parseInt(req.query.limit) : 6

  Work.find()
    .select("-photo")
    .populate('category')
    .sort([
      [sortBy, accepted]
    ])
    .limit(limit)
    .exec((err, works) => {
      if (err) {
        return res.status(400).json({
          error: "works Not found"
        })
      }
      res.send(works)
    })
}

exports.listRelated = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6

  Work.find({
      _id: {
        $ne: req.work
      },
      category: req.work.category
    })
    .limit(limit)
    .populate('category', '_id name')
    .exec((err, works) => {
      if (err) {
        return res.status(400).json({
          error: "Related works Not found"
        })
      }

      res.json(works)

    })
}

exports.listCategories = (req, res) => {
  Work.distinct("category", {}, (err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "categories works Not found"
      })
    }

    res.json(categories)
  })
}




exports.listBySearch = (req, res) => {
  let accepted = req.query.accepted ? req.query.accepted : 'desc'
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id'
  let limit = req.query.limit ? parseInt(req.query.limit) : 100
  let skip = parseInt(req.body.skip);
  let findArgs = {};



  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "wage") {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1]
        }
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  Work.find(findArgs)
    .select("-photo")
    .populate('category')
    .sort([
      [sortBy, accepted]
    ])
    .skip(skip)
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: "works not found"
        })
      }
      res.json({
        size: data.length,
        data
      })
    })
}

exports.photo = (req, res, next) => {
  if (req.work.photo.data) {
    res.set('Content-Type', req.work.photo.contentType)
    return res.send(req.work.photo.data)
  }
  next()
}

exports.listSearch = (req, res) => {
  const query = {};
  if (req.query.search) {
    query.worktype = {
      $regex: req.query.search,
      $options: 'i'
    };
    // assigne category value to query.category
    if (req.query.category && req.query.category != 'All') {
      query.category = req.query.category;
    }
    Work.find(query, (err, works) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      }
      res.json(works);
    }).select('-photo');
  }
}
