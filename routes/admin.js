const express = require("express");
const router = express.Router();

const { getAdmin, getAdmin_Content, postAdmin, getAdminList, getAdminListById, editAdminListById, deleteAdminById } = require("../controllers/admin/adminController");

router.get('/admin', getAdmin); 
router.post('/postcall', postAdmin);
router.get('/admin_d', getAdmin_Content);
router.get('/getAdminList', getAdminList);
router.get('/getAdminList/:id', getAdminListById);
router.put('/editAdminList', editAdminListById);
router.delete('/deleteAdmin/:id', deleteAdminById);

module.exports = router;