import { useEffect, useState } from "react";
import axios from 'axios';

export function useModels() {
  const [models, setModels] = useState<string[]>([]);
  
  useEffect(() => {
    axios.get("http://localhost:8000/v1/models/").then((res) => res.data ? setModels(res.data) : setModels([
        "openai/gpt-3.5",
        "anthropic/claude-v1",
        "gemini/gemini-alpha"
        ]));
  }, [])

// useEffect(() => {setModels([
//     "openai/gpt-3.5",
//     "anthropic/claude-v1",
//     "gemini/gemini-alpha"
//     ])}, [])

  return { models };
}