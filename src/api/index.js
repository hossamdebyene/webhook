import axios from 'axios';


const urlMember = 'http://localhost:5000/members/user';

export const fetchMembers = () => axios.get(urlMember);
export const createMember = (newMember) => axios.post(urlMember, newMember);

const urlMemberOrg = 'http://localhost:5000/members/org';

export const fetchMembersOrg = () => axios.get(urlMemberOrg);
export const createMemberOrg = (newMemberOrg) => axios.post(urlMemberOrg, newMemberOrg);


const urlBook = 'http://localhost:5000/books/user';

export const fetchBooks = () => axios.get(urlBook);
export const createBook = (newBook) => axios.post(urlBook, newBook); 

const urlBookOrg = 'http://localhost:5000/books/org';

export const fetchBooksOrg = () => axios.get(urlBookOrg);
export const createBookOrg = (newBookOrg) => axios.post(urlBookOrg, newBookOrg); 