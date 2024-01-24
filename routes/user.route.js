const auth = require("../controllers/userController");
const authJwt = require("../middlewares/authJwt");
const { cpUpload0, upload, upload1, upload2, cpUpload, categoryUpload, subCategoryUpload } = require("../middlewares/imageUpload")
const express = require("express");
const router = express()

router.post("/user/forgetPassword", auth.forgetPassword);
router.post("/user/changePassword", auth.changePassword);
router.get("/user/allCategory/:gender", auth.getCategories);
router.get("/user/allSubcategoryById/:categoryId", auth.getSubCategoryByCategoryId);
router.get("/user/Product/list", auth.listProduct);
router.post("/product/createProductReview", authJwt.verifyToken, auth.createProductReview);
router.get("/product/getProductReviews/:id", auth.getProductReviews);
router.get("/user/listProductVarient", auth.listProductVarient);
router.post("/cart/addtocart", authJwt.verifyToken, auth.addtocart);
router.get("/cart/getCart", authJwt.verifyToken, auth.getCart);
router.delete("/cart/deleteCart", authJwt.verifyToken, auth.deleteCart);
router.put("/cart/deletecartItem/:id", authJwt.verifyToken, auth.deletecartItem);
router.put("/cart/addAdressToCart", [authJwt.verifyToken], auth.addAdressToCart);
router.put("/user/updateQuantity", [authJwt.verifyToken], auth.updateQuantity);
router.put("/cart/changePaymentOption", [authJwt.verifyToken], auth.changePaymentOption);
router.post("/cart/checkout", authJwt.verifyToken, auth.checkout);
router.post("/cart/placeOrder/:orderId", [authJwt.verifyToken], auth.placeOrder);
router.get("/cart/successOrder/:orderId", [authJwt.verifyToken], auth.successOrder);
router.get("/cart/successOrderwithWallet/:orderId", [authJwt.verifyToken], auth.successOrderwithWallet);
router.get("/cart/cancelOrder/:orderId", [authJwt.verifyToken], auth.cancelOrder);
router.put("/order/cancelReturnOrder/:id", [authJwt.verifyToken], auth.cancelReturnOrder);
router.get("/order/getcancelReturnOrder", [authJwt.verifyToken], auth.getcancelReturnOrder);
router.get("/order/allOrders", [authJwt.verifyToken], auth.getAllOrders);
router.get("/order/Orders", [authJwt.verifyToken], auth.getOrders);
router.get("/order/viewOrder/:id", [authJwt.verifyToken], auth.getOrderbyId);
router.get("/transaction/allTransactionUser", [authJwt.verifyToken], auth.allTransactionUser);
router.get("/transaction/allcreditTransactionUser", [authJwt.verifyToken], auth.allcreditTransactionUser);
router.get("/transaction/allDebitTransactionUser", [authJwt.verifyToken], auth.allDebitTransactionUser);
router.post("/wallet/addWallet", [authJwt.verifyToken], auth.addMoney);
router.get("/wallet/getwallet", [authJwt.verifyToken], auth.getWallet);
router.post("/wallet/sendMoney", [authJwt.verifyToken], auth.sendMoney);
router.post("/user/createWishlist/:id", [authJwt.verifyToken], auth.createWishlist);
router.post("/user/removeFromWishlist/:id", [authJwt.verifyToken], auth.removeFromWishlist);
router.get("/user/myWishlist", [authJwt.verifyToken], auth.myWishlist);
router.post("/user/ticket/createTicket", [authJwt.verifyToken], auth.createTicket);
router.get("/user/ticket/listTicket", [authJwt.verifyToken], auth.listTicket);
router.get('/user/ticket/:id', auth.getTicketbyId);
router.put('/user/replyOnTicket/:id', [authJwt.verifyToken], auth.replyOnTicket);
router.get("/user/product/getMostDemandedProducts", auth.getMostDemandedProducts);
router.get("/user/product/getNewArrivalProducts", auth.getNewArrivalProducts);

module.exports = router;