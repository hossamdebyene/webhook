import express from 'express';

import {getMember, createMember, getMemberOrg, createMemberOrg} from '../controllers/members.js';

const router = express.Router();


router.get('/User', getMember);
router.post('/User', createMember);
router.get('/Org', getMemberOrg);
router.post('/Org', createMemberOrg);

export default router;