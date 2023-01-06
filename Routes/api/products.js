const express=require('express');

const router=express.Router();
const productModel=require('../../Models/productSchema');
router.get('/',async(req,res)=>{
    const products=await productModel.find();
    res.send(products);
})

router.get('/:id',async (req,res)=>{
    const product=await productModel.findById(req.params.id);
    res.send(product);
})

router.post('/:id',async (req,res)=>{
    const product=await productModel.findById(req.params.id);
    product.views++;
    await product.save();
    res.json({message:'View is successfully made'})
})



module.exports=router;