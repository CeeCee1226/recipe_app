import foodModel from "../models/foodModels.js";
import fs from 'fs'


// Хоол нэмэх
const addFood = async (req,res) => {
    let image_filename = `${req.file.filename}`

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"Food added"})
    }  catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addFood}