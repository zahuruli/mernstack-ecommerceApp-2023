import express from "express";
import formidable from "express-formidable";

import { isAdmin, requireSignin } from "../middlewers/authMiddlewear.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  serchProductController,
  similarProductCotroller,
  updateProductController,
} from "../controllers/productController.js";

const router = express.Router();

//routes:
//Create product route:
router.post(
  "/create-product",
  requireSignin,
  isAdmin,
  formidable(),
  createProductController
);

//get products:
router.get("/get-product", getProductController);

//get single product:
router.get("/single-product/:id", getSingleProductController);

//get photo:
router.get("/product-photo/:pid", productPhotoController);

//delete product:
router.delete(
  "/delete-product/:pid",
  requireSignin,
  isAdmin,
  deleteProductController
);

//update product:
router.put(
  "/update-product/:pid",
  requireSignin,
  isAdmin,
  formidable(),
  updateProductController
);

//filter product:
router.post("/product-filters", productFilterController);

//product count:
router.get("/product-count", productCountController);

//product per page:
router.get("/product-list/:page", productListController);

//serach product:
router.get("/search/:keyword", serchProductController);

//similar product:
router.get("/similar-product/:pid/:cid", similarProductCotroller);

//get product by category  id:
router.get("/product-category/:cid", productCategoryController);

//payment route:
//token:
router.get("/braintree/token", braintreeTokenController);

//payment:
router.post("/braintree/payment", requireSignin, braintreePaymentController);

export default router;
