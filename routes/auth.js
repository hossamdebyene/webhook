import express from 'express';
import members from '../memberDB';


const router = express.Router();

router.post('/Signup', async (req,res)=>{
    const Members = new members({
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Phone: req.body.Phone,
        City: req.body.City,
        DateofBirth: req.body.Age,
        Organization: req.body.Organization,
    });
    try{
        const savedUser = await Members.save()
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err)
    }
});

module.exports = router;