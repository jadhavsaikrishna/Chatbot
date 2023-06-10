import React, { useState } from "react";
import ChatBox from "./ChatBox";
import "./App.css";

function App() {
  const [chatBoxes, setChatBoxes] = useState([]);
  const [timestamp, setTimestamp] = useState(0);

  const handleAddChatBox = () => {
    setChatBoxes((prevChatBoxes) => [...prevChatBoxes, timestamp]);
    setTimestamp((prevTimestamp) => prevTimestamp + 1);
  };

  const handleCloseChatBox = (timestamp) => {
    setChatBoxes((prevChatBoxes) =>
      prevChatBoxes.filter((box) => box !== timestamp)
    );
  };

  return (
    <div className="app">
      <button onClick={handleAddChatBox}>Add Chat Box</button>
      <div className="chat-boxes">
        {chatBoxes.map((box) => (
          <ChatBox key={box} timestamp={box} handleCloseChatBox={handleCloseChatBox} />
        ))}
      </div>
    </div>
  );
}

export default App;
