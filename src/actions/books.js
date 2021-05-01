import * as api from '../api';


export const getbook = () => async(dispatch) => {
    try {
        const {data}= await api.fetchBooks();
        dispatch({ type: 'GET_BOOK', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createBook = (book) => async(dispatch) => {
    try {
        const {data} = await api.createBook(book);
        debugger
        console.log(data);
        dispatch({type: 'CREATE_BOOK', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
export const getbookOrg = () => async(dispatch) => {
    try {
        const {data}= await api.fetchBooksOrg();
        dispatch({ type: 'GET_BOOKORG', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createBookOrg = (book) => async(dispatch) => {
    try {
        const {data} = await api.createBookOrg(book);
        debugger
        console.log(data);
        dispatch({type: 'CREATE_BOOKORG', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}