import mongoose from 'mongoose';



const members = mongoose.Schema({
    Username: String,
    Password: String,
    Email: String,
    Firstname: String,
    Lastname: String,
    Phone: String,
    country:String,
    city: String,
    age: {type:Date},
    Organization: String,
});

export default mongoose.model('Members',members)