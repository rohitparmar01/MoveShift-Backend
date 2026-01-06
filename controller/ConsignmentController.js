import "../models/connection.js";

import ConsignmentSchemaModel from "../models/ConsignmentSchemaModel.js";

export const save=async(req,res)=>{
 var orderlist=await ConsignmentSchemaModel.find();
 var l=orderlist.length;
 var _id=l==0?1:orderlist[l-1]._id+1;
 var OrderDetails={...req.body,"_id":_id,"track":"Waiting for the Approval","status":0,"info":Date()};
 try{
  console.log(OrderDetails)
    await ConsignmentSchemaModel.create(OrderDetails);
    res.status(201).json({"status":true});
 }catch(error){
  console.log(error);
    res.status(500).json({"status":false});        
 };
};

export const fetch = async (req,res)=>{
  const OrderDetails= await ConsignmentSchemaModel.find(req.query);
  if(OrderDetails.length!=0){
    res.status(200).json(OrderDetails);
  }
  else{
    res.status(404).json({"status":"resource not found"})
  }
} 

   
export var deleteOrder=async(req,res)=>{
  try{
    let OrderDetails = await ConsignmentSchemaModel.findOne((req.body.condition_obj));
    if(OrderDetails){
      let Order=await ConsignmentSchemaModel.deleteOne((req.body.condition_obj));   
      if(Order)
        res.status(200).json({"status":"OK"});
      else
        res.status(500).json({"status": "Server Error"});
    }
    else
      res.status(404).json({"status":"Requested resource not available"});
  }catch(error){
    res.status(500).json({"status":false});        
  };
};  


export var update=async(req,res)=>{
  try{
    let OrderDetails = await ConsignmentSchemaModel.findOne((req.body.condition_obj));
    if(OrderDetails){
      let Order=await ConsignmentSchemaModel.updateMany((req.body.condition_obj),{$set:(req.body.content_obj)});   
      if(Order)
        res.status(200).json({"status":"OK"});
      else
        res.status(500).json({"status": "Server Error"});
    }
    else
      res.status(404).json({"status":"Requested resource not available"});
  }catch(error){
    res.status(500).json({"status":false});        
  };
};


