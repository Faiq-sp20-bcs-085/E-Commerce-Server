const express=require('express');

const router=express.Router()
const orderModel=require('../../Models/orderSchema');

const userModel=require('../../Models/userSchema');



router.get('/',async(req,res)=>{
    const orders=await orderModel.find();
    res.send(orders);
})





router.post('/:uId',async(req,res)=>{
    const {cart,bill}=req.body;
 
const user=await userModel.findById(req.params.uId);
if(!user) return res.status(500).send('User is not registered with us.');
const order= new orderModel();
order.user=user;
order.bill=bill;

let item=[]

for (let i=0;i<cart.length;i++){
  
    let{_id,qty,name}=cart[i];
   


    item[i]={_id,qty,name};


}

order.items=item;
await order.save();
// await order.save();
res.send('yeah')

})

module.exports=router;