import React, { useState } from "react";
import { sendMessageToChatbot } from "../helpers/chatbotApi";
import "../css/chatbot.css";

const ChatbotScreen = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    try {
      const response = await sendMessageToChatbot(message, chatHistory);
      setChatHistory([
        ...chatHistory,
        { autor: "usuario", contenido: message },
        { autor: "bot", contenido: response.respuesta_bot },
      ]);
      setMessage("");
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  };

  return (
    <div className="chatbot-container mt-5">
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.autor}`}>
            {msg.autor === "usuario" ? "Tú: " : "Bot: "}
            {msg.contenido}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe tu mensaje..."
        className="chat-input"
      />
      <button onClick={handleSendMessage} className="send-button">
        Enviar
      </button>
    </div>
  );
};

export default ChatbotScreen;
