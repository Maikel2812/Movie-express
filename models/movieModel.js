import { Schema, model } from "mongoose";
import UserModel from "../model.js";

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
    },
    
    // START: Bagian yang diupdate/ditambahkan
    createdBy: {
        type: mongoose.Types.ObjectId, // Tipe data untuk ID MongoDB
        ref: UserModel, // Merujuk ke model User
    },
    // END: Bagian yang diupdate/ditambahkan
}, {
    timestamps: true,
});

const movieModel = mongoose.model("movies",MovieSchema);

export default movieModel;