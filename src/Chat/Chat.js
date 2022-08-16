import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import axios from "../axios";
import React, {useState} from 'react'
import "./Chat.css";

function Chat({messages}) {

  const [input,setInput] = useState("");

  const sendMessage = async (e) =>{
        e.preventDefault();
        
        await axios.post("/api/v1/messages",{
          message : input,
          name : "Author Name",
          timestamp : "now",
          received : false
        }).then();
        
        setInput("");
  
      };
      
  return (
    <div className="chat">
        <div className="chat__header">
           <Avatar></Avatar>
           <div className="chat__header_info">
                <h3> Chat Name</h3>
                <p>Visto l'ultima....</p>
           </div>
           <div className="chat__header_right">
               <IconButton>
                 <SearchOutlined></SearchOutlined>
               </IconButton>
               <IconButton>
                 <AttachFile></AttachFile>
               </IconButton>
               <IconButton>
                 <MoreVert></MoreVert>
               </IconButton>
           </div>
        </div>
        <div className="chat__body">
          {messages.map((message) => (
               <p key={message._id} class={`chat__message ${message.received && "chat__receiver"}`}>
               <span className="chat__name">{message.name}</span>
                     {message.message}
               <span className="chat__timestamp">{message.timestamp}</span>
               </p>
          ))}
        </div>
        <div className="chat__footer">
           <IconButton> 
              <InsertEmoticon></InsertEmoticon>
           </IconButton>
           <form>
              <input value={input}
                onChange={(e)=> setInput(e.target.value)}
              placeholder='Scrivi un messaggio...' type='text'></input>
              <button onClick={sendMessage} type="submit">Invia</button>
           </form>
        </div>
    </div>
  )
}

export default Chat;