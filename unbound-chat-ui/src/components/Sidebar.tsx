import { useModels } from "../hooks/useModels";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const { models } = useModels();

  return (
    <div className="sidebar">
      {/* <h2>Models</h2>
      <ul>
        {models.map((model, index) => (
          <li key={index}>{model}</li>
        ))}
      </ul> */}
    </div>
  );
}