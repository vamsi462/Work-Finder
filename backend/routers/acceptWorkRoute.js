import express from 'express';
import AcceptWork from '../models/acceptWorkModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/",async(req,res)=> {
    const acceptedwork = await AcceptWork.find({});
    res.send(acceptedwork)
})

router.get('/:id', async (req, res) => {
    console.log("siddhu",req.params.id)
    const acceptwork = await AcceptWork.find({ accepteduserid: req.params.id });
    if (acceptwork) {
      res.send(acceptwork);
    } else {
      res.status(404).send({ message: 'work Not Found.' });
    }
  });

// router.post("/",isAuth,isAdmin,async (req, res) => {
    
//   const acceptwork= new AcceptWork({
//     accepteduserid: req.body.accepteduserid,
//     acceptedusername:req.body.acceptedusername,
//     address: req.body.address,
//     category: req.body.category,
//     description:req.body.description,
//     id: req.body.id,
//     name:req.body.name,
//     subCategory: req.body.subCategory,
//     wage:req.body.wage, 
//     phNumber:(req.body.phNumber===undefined)?'':req.body.phNumber
//   });
//   const newAcceptWork = await acceptwork.save();
//   if (newAcceptWork) {
//     return res
//       .status(201)
//       .send({ message: 'New Category Created', data: newAcceptWork });
//   }
//   return res.status(500).send({ message: ' Error in Creating Category.' });
// });






router.post("/",isAuth,isAdmin,async (req, res) => {
   
    
    const acceptwork= new AcceptWork({
      accepteduserid: req.body.accepteduserid,
      acceptedusername:req.body.acceptedusername,
      address: req.body.address,
      category: req.body.category,
      description:req.body.description,
      id: req.body.id,
      name:req.body.name,
      subCategory: req.body.subCategory,
      wage:req.body.wage, 
      phNumber:(req.body.phNumber===undefined)?'':req.body.phNumber
    });
    const newAcceptWork = await acceptwork.save();
    if (newAcceptWork) {
      return res
        .status(201)
        .send({ message: 'New Category Created', data: newAcceptWork });
    }
    return res.status(500).send({ message: ' Error in Creating Category.' });
  });
  

 export default router;