import { useState } from "react";
import axios from "axios";

export default function useChat() {
  const [messages, setMessages] = useState<string[]>([]);

  async function sendMessage(prompt: string, model: string) {
    if (!prompt.trim()) return;

    const provider = model.includes("openai")
      ? "openai"
      : model.includes("anthropic")
      ? "anthropic"
      : "gemini";

      const requestBody = {
        provider,
        model: model.split('/')[1], // Explicit key "model"
        prompt,
      };
      

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/v1/chat/completions/",
        requestBody,
      );

      const botResponse = response.data.response || "No response received.";
      setMessages((prevMessages) => [
        ...prevMessages,
        `You: ${prompt}`,
        `Bot: ${botResponse}`,
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        `You: ${prompt}`,
        "Bot: Failed to respond",
      ]);
    }
  }

  return { messages, sendMessage };
}
