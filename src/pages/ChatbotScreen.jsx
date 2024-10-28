import React, { useState } from "react";
import { sendMessageToChatbot } from "../helpers/chatbotApi.js";
import "../css/chatbot.css"; // Si necesitas algún estilo, puedes crear el archivo CSS

const ChatbotScreen = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    try {
      // Llama a la función sendChatbotMessage de helpers/chatbotApi
      const botResponse = await sendMessageToChatbot(message);

      // Actualiza el historial del chat con el mensaje del usuario y la respuesta del bot
      setChatHistory([
        ...chatHistory,
        { sender: "user", text: message },
        { sender: "bot", text: botResponse },
      ]);

      setMessage(""); // Limpia el mensaje después de enviarlo
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  };

  return (
    <div className="chatbot-container mt-5">
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.sender === "user" ? "Tú: " : "Bot: "}
            {msg.text}
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
