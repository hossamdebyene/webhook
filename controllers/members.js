import memberDB from '../memberDB.js';
import memberOrgDB from '../memberOrgDB.js';



export const getMember = async (req,res)=>{
    try {
        const members = await memberDB.find();
        res.status(200).json(members);
       
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}
export const createMember = async (req,res)=>{
    const post = req.body;
    console.log(post);
    const newMember = new memberDB(post)

    try {
        await newMember.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.Status(409).json({message: error.message});
    }
}
export const getMemberOrg = async (req,res)=>{
    try {
        const memberOrg = await memberOrgDB.find();
        res.status(200).json(memberOrg);
       
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}
export const createMemberOrg = async (req,res)=>{
    const postOrg = req.body;
    console.log(postOrg);
    const newMemberOrg = new memberOrgDB(postOrg)

    try {
        await newMemberOrg.save();
        res.status(201).json(newMemberOrg);
    } catch (error) {
        res.Status(409).json({message: error.message});
    }
}

