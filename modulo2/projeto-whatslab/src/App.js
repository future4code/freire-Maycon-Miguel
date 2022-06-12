import React from "react";
import './App.css';
import Header from "./components/header/index.js";
import Chat from "./components/chat";
import Button from "./components/buttons";



export default function App(){
  return(
    <div className="root">
      <div>
          <Header nome= 'CHAT'></Header>
      </div>
      <div>
          <Chat></Chat>
      </div>
      <div>
        <Button></Button>
      </div>
    </div>
  )
}
