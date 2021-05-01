import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import memberRoutes from './routes/members.js';
import bookRoutes from './routes/book.js';




const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use('/members', memberRoutes);
app.use('/books', bookRoutes);
const connection = 'mongodb+srv://Admin:admin@cluster0.dg7nr.mongodb.net/HoneycombBook?retryWrites=true&w=majority';
mongoose.connect(connection,{
    useNewUrlParser:true,
    useCreteIndes: true,
    useUnifiedTopology: true
})


app.listen(port,() => console.log(`Listening localhost:${port}`) );








