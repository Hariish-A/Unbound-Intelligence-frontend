import { useState } from "react";
import Message from "./Message";
import useChat from "../hooks/useChat";
import { uploadFile } from "../services/uploadFile"; // Import file upload service
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ChatWindow.css";

interface ChatWindowProps {
  selectedModel: string;
}

export default function ChatWindow({ selectedModel }: ChatWindowProps) {
  const { messages, sendMessage } = useChat();
  const [input, setInput] = useState("");

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      await uploadFile(event.target.files[0]); // Call API to upload file
    }
  };

  return (
    <div className="chat-window">
      <ToastContainer position="top-right" autoClose={3000} />
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
            <input id="file-upload" type="file" onChange={handleFileChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
