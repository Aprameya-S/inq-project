const { Router } = require("express");
const { addAdmin, loginAdmin, logoutAdmin, authAdmin } = require("../controllers/AdminControllers")

const router = Router()

router.post("/addAdmin", addAdmin)
router.post("/loginAdmin", loginAdmin)
router.post("/logoutAdmin", logoutAdmin)
router.post("/authAdmin", authAdmin)

module.exports = router