export const sendMessage = (message) =>{
    return{
        type:'SEND',
        payload:message
    };
}
export const deleteMessage = (index) =>{
    return{
        type:'DELETE',
        payload:index
    };
}
export const getMessages = () =>{
    return{
        type:'DEFAULT'
    };
}