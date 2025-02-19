// import ChatWindow from "./components/ChatWindow";
// import Sidebar from "./components/Sidebar";
// import Dropdown from "./components/Dropdown";
// import "./styles/App.css";

// export default function App() {
//   return (
//     <div className="app-container">
//       <nav className="navbar">
//         <h1>Chat App</h1>
//         <Dropdown />
//       </nav>
//       <div className="content">
//         {/* <Sidebar /> */}
//         <ChatWindow />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import Dropdown from "./components/Dropdown";

export default function App() {
  const [selectedModel, setSelectedModel] = useState("openai/gpt-3.5");

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>Chat App</h1>
        <Dropdown onSelectModel={setSelectedModel} />
      </nav>
      <div className="content">
        {/* <Sidebar /> */}
        <ChatWindow selectedModel={selectedModel} />
      </div>
    </div>
  );
}
