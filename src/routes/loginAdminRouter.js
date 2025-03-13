const express = require("express");
const { loginAccAdmin, registerAccAdmin, logoutAdmin, doiThongTinAdmin } = require("../controllers/Login/login.admin.controller");


const router = express.Router();

// route đăng nhập kh
router.post("/login-admin", loginAccAdmin);
// route register KH
router.post("/register-admin", registerAccAdmin);
// route logout  KH
router.post("/logout-admin", logoutAdmin);

// router.post("/quen-mat-khau", quenMatKhauKH);
router.put("/doi-thong-tin-admin", doiThongTinAdmin)


module.exports = router;
