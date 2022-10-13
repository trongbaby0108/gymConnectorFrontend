import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Cảm ơn người dùng đã đăng nhập vào hệ thống của chúng tôi!");
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Cảm ơn người dùng đã đăng nhập vào hệ thống của chúng tôi!");
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Xin chào Admin!!!");
// })
//update
router.put("/:id", verifyUser, updateUser)

//delete
router.delete("/:id", verifyUser, deleteUser)

//get
router.get("/:id", verifyUser, getUser)

//get all
router.get("/", verifyAdmin, getUsers)
export default router