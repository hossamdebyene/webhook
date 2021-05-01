import mongoose from 'mongoose';



const books = mongoose.Schema({
    BCID: String,
    Title: String,
    Author: String,
    RegDate: Date,
    Category: String,
    Location: String,
    Status: String,
    ISBN: String,
    Membername: String,
    Forum: String,
    Quantity: String,
    Condition: String,
});
export default mongoose.model('Books',books)