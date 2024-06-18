const { Router } = require("express");
const { addAdmin, loginAdmin, logoutAdmin, authAdmin } = require("../controllers/AdminControllers");
const { loginRole2User, addRole2User, logoutRole2User, authRole2 } = require("../controllers/role_2Controlles");
const { addRole3User, loginRole3User, logoutRole3User, authRole3 } = require("../controllers/role_3Controllers");
const { addRole4User, loginRole4User, logoutRole4User, authRole4 } = require("../controllers/role_4Controllers");

const router = Router()

router.post("/addAdmin", addAdmin)
router.post("/loginAdmin", loginAdmin)
router.post("/logoutAdmin", logoutAdmin)
router.post("/authAdmin", authAdmin)

router.post("/addRole2", addRole2User)
router.post("/loginRole2", loginRole2User)
router.post("/logoutRole2", logoutRole2User)
router.post("/authRole2", authRole2)

router.post("/addRole3", addRole3User)
router.post("/loginRole3", loginRole3User)
router.post("/logoutRole3", logoutRole3User)
router.post("/authRole3", authRole3)

router.post("/addRole4", addRole4User)
router.post("/loginRole4", loginRole4User)
router.post("/logoutRole4", logoutRole4User)
router.post("/authRole4", authRole4)


module.exports = router