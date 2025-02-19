// import { useState } from "react";
// import { useModels } from "../hooks/useModels";
// import "../styles/Dropdown.css";

// export default function Dropdown() {
//   const { models } = useModels();
//   const [selectedModel, setSelectedModel] = useState(models[0]);

//   return (
//     <div className="dropdown-container">
//       <label htmlFor="model-select">Model:</label>
//       <select
//         id="model-select"
//         value={selectedModel}
//         onChange={(e) => setSelectedModel(e.target.value)}
//       >
//         {models.map((model, index) => (
//           <option key={index} value={model}>
//             {model}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

import { useState } from "react";
import { useModels } from "../hooks/useModels";
import "../styles/Dropdown.css";

interface DropdownProps {
  onSelectModel: (model: string) => void;
}

export default function Dropdown({ onSelectModel }: DropdownProps) {
  const { models } = useModels();
  const [selectedModel, setSelectedModel] = useState(models[0] || "");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = e.target.value;
    setSelectedModel(model);
    onSelectModel(model);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="model-select">Model:</label>
      <select id="model-select" value={selectedModel} onChange={handleChange}>
        {models.map((model, index) => (
          <option key={index} value={model}>
            {model}
          </option>
        ))}
      </select>
    </div>
  );
}
