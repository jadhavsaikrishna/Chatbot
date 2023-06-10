import React, { useState, useContext } from "react";
import { MessageContext } from "./MessageContext";
import "./ChatBox.css";

function ChatBox({ timestamp, handleCloseChatBox }) {
  const { messages, addMessage } = useContext(MessageContext);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      addMessage({ timestamp, message });
      setMessage("");
    }
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg) => (
          <div
            key={msg.timestamp}
            className={`message ${
              msg.timestamp === timestamp ? "self" : "other"
            }`}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div className="input-area">
        <textarea
          className="message-input"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
      <button
        className="close-button"
        onClick={() => handleCloseChatBox(timestamp)}
      >
        Close
      </button>
    </div>
  );
}

export default ChatBox;
