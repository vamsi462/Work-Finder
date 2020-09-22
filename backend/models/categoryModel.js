import mongoose from 'mongoose';

// const reviewSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     rating: { type: Number, default: 0 },
//     comment: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );
const categorySchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  phNumber:{type: Number,required:true},
  image: { type: String, required: false },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
    wage: { type: Number, default: 0, required: true },
  workersRequired: { type: Number, default: 1, required: true },
  description: { type: String, required: true },
  address:{type:String,required:true},
  id:{type:Number,required:false}
  
});

const categoryModel = mongoose.model('Category', categorySchema);

export default categoryModel;