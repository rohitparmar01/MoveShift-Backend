import '../models/connection.js';
import rs from 'randomstring';
import url from 'url';
import path from 'path';

import SubCategorySchemaModel from '../models/subCategoryModel.js';

// ---------------- SAVE SUBCATEGORY ----------------

export const save = async (req, res) => {
  try {
    // Auto-increment logic
    const lastRecord = await SubCategorySchemaModel.findOne().sort({ _id: -1 });
    const _id = lastRecord ? lastRecord._id + 1 : 1;
    // File exists check
    if (!req.files || !req.files.caticon) {
      return res.status(400).json({ status: false, msg: "Subcategory icon required" });
    }
    const caticon = req.files.caticon;
    const subcaticonnm = rs.generate() + "-" + Date.now() + "-" + caticon.name;
    const scDetails = {...req.body,_id, subcaticonnm};
    // Save record in DB
    await SubCategorySchemaModel.create(scDetails);
    // ---- FIX: Correct dirname resolution (NO INVALID URL ERROR) ----
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const uploadpath = path.join(__dirname,"../../Frontend/public/assets/uploads/subcaticons",subcaticonnm  );
    // Move file to upload folder
    await caticon.mv(uploadpath);
    res.status(201).json({ status: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, error });
  }
};


// ---------------- FETCH SUBCATEGORY ----------------

export const fetch = async (req, res) => {
  try {
    const condition_obj = url.parse(req.url, true).query;

    const scList = await SubCategorySchemaModel.find(condition_obj);

    if (scList.length > 0)
      return res.status(200).json(scList);

    return res.status(404).json({ status: "Resource not found" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false });
  }
};