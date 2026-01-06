
import "../models/connection.js";


import TrackingSchemaModel from '../models/TrackingSchemaModel.js';



export const save = async (req, res) => {
    const trackinglist = await TrackingSchemaModel.find();
    const l = trackinglist.length;
    const _id = l == 0 ? 1 : trackinglist[l - 1]._id + 1;
    const trackingDetails = { ...req.body, "info": Date() };
    try {
        await TrackingSchemaModel.create(trackingDetails);
         
        res.status(201).json({ "status": true});
    } catch (error) {
        res.status(500).json({ "status": false });
        console.log(error)
    }
};

// ------------------------------------------------------------------------------------------------------------------------------------


 // ------------------------------------------------------------------------------------------------------------------------------------export const fetch=async(req,res)=>{
 export const fetch=async(req,res)=>{
  var trackinglist=await TrackingSchemaModel.find(req.query);
  if(trackinglist.length!=0)
    res.status(200).json(trackinglist);
  else
    res.status(404).json({"status":"Resource not found"});    
 };

// ------------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------------------------------------


export var update=async(req,res)=>{
  try{
    let TrackingDetails = await TrackingSchemaModel.findOne(req.body.condition_obj);
    if(TrackingDetails){
      let tracking=await TrackingSchemaModel.updateMany(req.body.condition_obj,{$set:req.body.content_obj});   
      if(tracking)
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