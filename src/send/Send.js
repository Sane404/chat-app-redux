import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../action';
import tlg from './telegram.png';
import './Send.css';
const Send = () => {
    const dispatch = useDispatch();
    const [message,setMessage] = useState('');
    const handleSend = () =>{
        if(message !== ''){
            let today = new Date();
            let time;
            if(today.getMinutes() < 10){
                time = today.getHours() + ":" + "0" + today.getMinutes();
            }else{
                time = today.getHours() + ":"  + today.getMinutes(); 
            }

            dispatch(sendMessage({message,time}))
            setMessage('')
        }
    }
    return (
        <div className='send'>
            <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} onKeyUp={(e)=>{
                if(e.key === 'Enter'){
                    handleSend();
                }
            }}/>
            <button type='submit' onClick={handleSend}>
                <img src={tlg} alt="send" />
            </button>
        </div>
    )
}

export default Send
