import { useState } from "react";
import Message from "./Message";
import useChat from "../hooks/useChat";
import "../styles/ChatWindow.css";

interface ChatWindowProps {
  selectedModel: string;
}

export default function ChatWindow({ selectedModel }: ChatWindowProps) {
  const { messages, sendMessage } = useChat();
  const [input, setInput] = useState("");

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <div className="chat-input" style={{ width: "100%" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          
          <button
            className="send-button"
            onClick={() => {
              sendMessage(input, selectedModel);
              setInput("");
            }}
          >

            🚀
          </button>
          <div className="file-upload">
            <label htmlFor="file-upload">📎</label>
            <input id="file-upload" type="file" />
          </div>
        </div>
      </div>
    </div>
  );
}
