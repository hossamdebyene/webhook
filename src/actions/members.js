import * as api from '../api';


export const getMember = () => async(dispatch) => {
    try {
        const {data}= await api.fetchMembers();
        dispatch({ type: 'GET_MEMBER', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createMember = (member) => async(dispatch) => {
    try {
        const {data} = await api.createMember(member);
        debugger
        console.log(data);
        dispatch({type: 'CREATE_MEMBER', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
export const getMemberOrg = () => async(dispatch) => {
    try {
        const {data}= await api.fetchMembersOrg();
        dispatch({ type: 'GET_MEMBERORG', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createMemberOrg = (member) => async(dispatch) => {
    try {
        const {data} = await api.createMemberOrg(member);
        debugger
        console.log(data);
        dispatch({type: 'CREATE_MEMBERORG', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}