import bookDB from '../bookDB.js';
import bookOrgDB from '../bookOrgDB.js';



export const getBook = async (req,res)=>{
    try {
        const Books = await bookDB.find();
        res.status(200).json(Books);
       
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}
export const createBook = async (req,res)=>{
    const postBook = req.body;
    console.log(postBook);
    const newBook = new bookDB(postBook)

    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.Status(409).json({message: error.message});
    }
}
export const getBookOrg = async (req,res)=>{
    try {
        const BooksOrg = await bookOrgDB.find();
        res.status(200).json(BooksOrg);
       
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}
export const createBookOrg = async (req,res)=>{
    const postBookOrg = req.body;
    console.log(postBookOrg);
    const newBookOrg = new bookOrgDB(postBookOrg)

    try {
        await newBookOrg.save();
        res.status(201).json(newBookOrg);
    } catch (error) {
        res.Status(409).json({message: error.message});
    }
}