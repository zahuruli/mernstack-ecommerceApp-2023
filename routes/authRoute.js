import express from "express";
import {
  forgotPasswordController,
  getAdminOrdersController,
  getOrdersController,
  loginController,
  orderStatusController,
  registerControler,
  testController,
  updateProfileController,
} from "../controllers/AuthController.js";
import { isAdmin, requireSignin } from "../middlewers/authMiddlewear.js";

//router object:
const router = express.Router();

//routing:
//REGISTER || POST
router.post("/register", registerControler);

//LOGIN || POST
router.post("/login", loginController);

//forgot password || Post :

router.post("/forgot-password", forgotPasswordController);

//test route:
router.get("/test", requireSignin, isAdmin, testController);

//protected user route auth:
router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected admin route auth:
router.get("/admin-auth", requireSignin, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile:
router.put("/profile", requireSignin, updateProfileController);

//orders:
router.get("/orders", requireSignin, getOrdersController);

//orders:
router.get("/all-orders", requireSignin, isAdmin, getAdminOrdersController);

//update order status:

router.put(
  "/order-status/:orderId",
  requireSignin,
  isAdmin,
  orderStatusController
);

export default router;
