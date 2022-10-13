import Gym from "../models/Gym.js";

export const createGym = async (req, res, next) => {
    const newGym = new Gym(req.body)

    try {
        const savedGym = await newGym.save()
        res.status(200).json(savedGym)
    } catch (error) {
        next(error);
    }
}

export const updateGym = async (req, res, next) => {
    try {
        const updatedGym = await Gym.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })
        res.status(200).json(updatedGym)
    } catch (error) {
        next(error);
    }
}

export const deleteGym = async (req, res, next) => {
    try {
        await Gym.findByIdAndDelete(req.params.id);
        res.status(200).json("Thông tin về phòng gym này đã bị xóa!");
    } catch (error) {
        next(error);
    }
}

export const getGym = async (req, res, next) => {
    try {
        const gym = await Gym.findById(req.params.id);
        res.status(200).json(gym);
    } catch (error) {
        next(error);
    }
}

export const getGyms = async (req, res, next) => {
    try {
        const gyms = await Gym.find();
        res.status(200).json(gyms);
    } catch (error) {
        next(error);
    }
}