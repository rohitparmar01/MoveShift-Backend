import '../models/connection.js';
import CategorySchemaModel from '../models/categoryModel.js';
import rs from 'randomstring';
import url from 'url';
import path from 'path';

export var save =async (req,res)=>{
  console.log("CATEGORY SAVE CALLED");

try{
     const lastObject= await CategorySchemaModel.findOne().sort({"_id":-1});
    //console.log(lastObject);
    const _id = lastObject==null?1:lastObject._id+1; 
    if(!req.files||!req.files.caticon)
    {
        res.status(404).json({"status":false,"message":"Category icon is required"});
        return;
    }
    const caticon = req.files.caticon;
    const caticonnm = rs.generate()+"-"+Date.now()+"-"+caticon.name; 
    let cDetails  = {...req.body,"caticonnm":caticonnm,"_id":_id};
    //console.log(cDetails);
    await CategorySchemaModel.create(cDetails);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const uploadpath = path.join(__dirname,'../../Frontend/public/assets/uploads/caticons',caticonnm);
    await caticon.mv(uploadpath);
    res.status(200).json({"status":true}); 
}
catch(err)
{
    console.log(err);
    res.status(500).json({"status":false});
}
    
}
export const fetch = async (req, res) => {
  try {
    const condition = req.query; // cleaner than url.parse
    const cList = await CategorySchemaModel.find(condition);
    if (cList.length === 0) {
      return res.status(404).json({ status: false, msg: "Resource not found" });
    }
    res.status(200).json(cList);//array pass
  } catch (error) {
    console.error("FETCH ERROR:", error);
    res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
};
