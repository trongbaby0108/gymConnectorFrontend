import mongoose from "mongoose";

const { Schema } = mongoose;

const GymSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    photos: {
        type: [String],
    },
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    trainers: {
        type: [String],
    },
    price: {
        type: Number,
        require: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
})

export default mongoose.model("Gym", GymSchema)
