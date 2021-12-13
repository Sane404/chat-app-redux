const messages = (state = [], action)=>{
    switch(action.type){
        case "SEND":
            return [...state,action.payload]
        case "DEFAULT":
            return [...state];
        case "DELETE":
            const newState = state.filter((item, index)=> index !== action.payload)
            return newState;
        default: return state;
    }
}
export default messages;