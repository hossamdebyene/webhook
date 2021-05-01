// eslint-disable-next-line import/no-anonymous-default-export
export default (DATA = [], action) => {
    switch(action.type){
        case 'GET_MEMBER':
            return action.payload;
        case 'CREATE_MEMBER' :
            return [...DATA, action.payload];
        case 'GET_BOOK':
            return action.payload;
        case 'CREATE_BOOK' :
            return [...DATA, action.payload];
        case 'GET_MEMBERORG':
            return action.payload;
        case 'CREATE_MEMBERORG' :
            return [...DATA, action.payload];
        case 'GET_BOOKORG':
            return action.payload;
        case 'CREATE_BOOKORG' :
            return [...DATA, action.payload];       
        default:
            return DATA;
    }
}
