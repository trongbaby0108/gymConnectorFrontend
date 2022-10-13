import express from "express";
import { createGym, deleteGym, getGym, getGyms, updateGym } from "../controllers/gym.js";
import Gym from "../models/Gym.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createGym)

//update
router.put("/:id", verifyAdmin, updateGym)

//delete
router.delete("/:id", verifyAdmin, deleteGym)

//get
router.get("/:id", getGym)

//get all
router.get("/", getGyms)

export default router