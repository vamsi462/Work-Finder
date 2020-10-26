
const {
    errorHandler
} = require('../helpers/dbErrorHandler');
const { AcceptWork } = require('../models/acceptWork');

exports.acceptWorkById = (req, res, next, id) => {
    AcceptWork.findById(id)
        .populate('works.work', 'name price')
        .exec((err, acceptWork) => {
            if (err || !acceptWork) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            req.acceptWork = acceptWork;
            next();
        });
};


exports.create = (req, res) => {
    //console.log('acceptWork created',req.body)

    req.body.acceptWork.user = req.profile;
    const acceptWork = new AcceptWork(req.body.acceptWork);
    acceptWork.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }
        res.json(data)
    })
}


exports.listAcceptWorks = (req, res) => {
    AcceptWork.find()
        .populate('user', '_id name address')
        .sort('-created')
        .exec((err, acceptWorks) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(error)
                });
            }
            res.json(acceptWorks);
        });
};

exports.getStatusValues = (req, res) => {
    res.json(acceptWork.schema.path('status').enumValues);
};

exports.updateWorkStatus = (req, res) => {
    AcceptWork.update({
        _id: req.body.acceptWorkId
    }, {
        $set: {
            status: req.body.status
        }
    }, (err, acceptWork) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(acceptWork);
    });
};