import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { deleteMessage } from '../action';
import './Chat.css';
const Chat = () => {
    const messages = useSelector(state => state); 
    const dispatch = useDispatch();
    const handleDelete = (i) =>{
        dispatch(deleteMessage(i));
    }
    return (
        <div className='chat'>
           {messages.map((m,index)=>{
               return (
                    <div key={index} onClick={()=>handleDelete(index)} className='message'>
                     <p className='m'>{m.message}</p>
                     <p className='t'>{m.time}</p>
                    </div>
               )
           })}
        </div>
    )
}

export default Chat
