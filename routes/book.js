import express from 'express';
import {getBook, getBookOrg, createBook, createBookOrg} from '../controllers/books.js';



const router = express.Router();

router.get('/user', getBook);
router.post ('/user', createBook);
router.get('/org', getBookOrg);
router.post('/org', createBookOrg);

export default router;