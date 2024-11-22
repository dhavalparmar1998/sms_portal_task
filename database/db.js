import mongoose from "mongoose";

async function dbconnect(){
    await mongoose.connect('mongodb+srv://admin:admin@cluster1.3xukv.mongodb.net/smsdb'
    //     , {
    //     useNewUrlParser: true,
    // useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 60000 
    //     })
)}

export default dbconnect