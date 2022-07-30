import React from 'react'
import './Sidebar.css';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SeachOutlined from "@material-ui/icons/SearchOutlined";
import {Avatar, IconButton} from "@material-ui/core"
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <div className="sidebar__header__left">
            <IconButton>
                <Avatar src=""></Avatar>
            </IconButton>
            </div>
            <div className="sidebar__header__right">
                <IconButton>
                   <DonutLargeIcon></DonutLargeIcon>
                </IconButton>
                <IconButton>
                   <ChatIcon></ChatIcon>
                </IconButton>
                <IconButton>
                   <MoreVertIcon></MoreVertIcon>
                </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__search__container">
                <SeachOutlined></SeachOutlined>
                <input type="text" placeholder="Cerca o inizia una nuova Chat"></input>

            </div>
        </div>
        <div className="sidebar__chat">
            <SidebarChat></SidebarChat>
            <SidebarChat></SidebarChat>
            <SidebarChat></SidebarChat>
            <SidebarChat></SidebarChat>
        </div>
    </div>
  )
}

export default Sidebar