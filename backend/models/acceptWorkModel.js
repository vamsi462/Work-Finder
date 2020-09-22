import mongoose from 'mongoose'


const accceptSchema = new mongoose.Schema({
    accepteduserid:{type:String,required:true},
    acceptedusername:{type:String,required:true},
    address:{type:String,required:true},
    category: { type: String, required: true },
    phNumber:{type: Number,required:false},
    subCategory: { type: String, required: true },
    wage: { type: Number, default: 0, required: true },
    description: { type: String, required: true },
    id:{type:String,required:true},
    name:{type:String,required:true},
  });


  const acceptWorkModel = mongoose.model('AcceptWork', accceptSchema);

  export default acceptWorkModel;