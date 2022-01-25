import mongoose from "mongoose";

const {Schema} = mongoose;
const {model} = mongoose; 

const taskSchema = new Schema(
  {
    title: {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    description: {
        type:String,
        required:true,
        trim:true
    },
    done: {
        type:Boolean,
        default:false
    },
  },
  {
    timestamps: true,
  }
);

export default model("Task", taskSchema);
