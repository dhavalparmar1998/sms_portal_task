import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const homeSchema = new Schema({
    userName: String,
    userPhone: Number,
    userEmail: String,
    userMsg: String
})

const homeModel = mongoose.model("home", homeSchema);
export default homeModel;