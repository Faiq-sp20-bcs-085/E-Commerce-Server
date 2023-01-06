const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    },

    items:[
        {
            _id:{
                type:mongoose.Types.ObjectId,
                ref:'products'
            },
            qty:Number,
            name:String
        }
    ],

   bill:Number,
   orderDate:{
    type:Date,
    default:Date.now()
   },
   status:{
    type:String,
    default:'Pending'
   }

},{timeStamps:true})

const orderModel=mongoose.model('orders',orderSchema);

module.exports=orderModel;