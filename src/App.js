import React, {useEffect,useState }  from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';
import Pusher from 'pusher-js';
import axios from "./axios";


function App() {

  const [messages,setMessages]=useState([]);

   //prende tutti i dati e le stampa tutte
  useEffect(()=>{
    axios.get("/api/v1/messages/synch").then((response)=>{
      console.log(response.data);
      setMessages(response.data);
    }).catch();
  },[])


  useEffect(()=>{
    console.log("Effect APP");

    var pusher = new Pusher('6d3739549315b9cae674', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(data));
      //con ...messages andiamo a recuperare tutti i messaggi e far accodare quelli nuovi
      // se omettiamo ... riceveremo un messaggio per volta
      setMessages([...messages,newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();

    }

  },[messages]);

  return (
    <div className="app">
      <div class="app__body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
