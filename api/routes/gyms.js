import express from "express";
import { createGym, deleteGym, getGym, getGyms, updateGym } from "../controllers/gym.js";
import Gym from "../models/Gym.js";

const router = express.Router();

//create
router.post("/", createGym)

//update
router.put("/:id", updateGym)

//delete
router.delete("/:id", deleteGym)

//get
router.get("/:id", getGym)

//get all
router.get("/", getGyms)

export default router