import express from 'express';
import Category from '../models/categoryModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/",async(req,res)=> {
    const categories = await Category.find({});
    res.send(categories)
})

// router.get("/:id",async(req,res)=> {
//     const  id=req.params.id
//     const categories=await Category.findById(id);
//     res.send(categories)
// })

router.get('/:id', async (req, res) => {
    const category = await Category.findOne({ id: req.params.id });
    if (category) {
      res.send(category);
    } else {
      res.status(404).send({ message: 'work Not Found.' });
    }
  });

router.post("/",isAuth,isAdmin, async (req, res) => {
    // console.log("hi ====================================================================",req.body)
  const category = new Category({
    name: req.body.name,
    phNumber:req.body.phNumber,
    wage: req.body.wage,
    image: req.body.image,
    workersRequired:req.body.workersRequired,
    category: req.body.category,
    subCategory: req.body.subCategory,
    countInStock: req.body.countInStock,
    description: req.body.description,
    address:req.body.address,
    id:req.body.id,
  
  });
  const newCategory = await category.save();
  if (newCategory) {
    return res
      .status(201)
      .send({ message: 'New Category Created', data: newCategory });
  }
  return res.status(500).send({ message: ' Error in Creating Category.' });
});



router.put("/:id", isAuth, isAdmin, async (req, res) => {
    console.log(req.body)
    const categoryId=req.params.id;
    const category = await Category.findById({_id:categoryId});
    if(category){
        category.name=req.body.name;
        category.phNumber=req.body.phNumber;
        category.wage=req.body.wage;
        category.image=req.body.image;
        category.category=req.body.category;
        category.subCategory=req.body.subCategory;
        category.workersRequired=req.body.workersRequired;
        category.description=req.body.description;
        category.address=req.body.address;
        category.id =req.body.id

        const updateCategory = await Category.save();
        if (upadetedCategory) {
        return res
            .status(200)
            .send({ message: ' Category post Updated', data: updatedCategory });
             }
            return res.status(500).send({ message: ' Error in Upadating Category Post.' });
        };
    })



    router.delete("/:id ",isAuth,isAdmin,async(req,res)=>{
        const deletedCategory= await Category.findById(req.params.id);
        if(deletedCategory){
            await deletedCategory.remove();
            res.send({message:"Category Post Deleted"});
        }else{
        res.send("Error in Deletion")
        }
    })
 
  
export default router;