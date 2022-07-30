import { Avatar } from '@mui/material';
import React from 'react'
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
        <Avatar></Avatar>
        <div className="sidebarChat__info">
            <h2>Nome</h2>
            <p>Messaggio</p>
        </div>
        
    </div>
  )
}

export default SidebarChat