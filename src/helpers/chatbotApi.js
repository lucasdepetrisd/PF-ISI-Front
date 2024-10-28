import axios from "axios";

const API_BASE_URL = "http://lucasdepetris.duckdns.org:8080";

export const sendMessageToChatbot = async (message) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/chatbot/`,
      {
        historial: [], // Puedes enviar un array vacío o un historial, si tienes uno
        mensaje: message, // Pasa el mensaje aquí
        message, // Si `message` también es necesario, inclúyelo
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al enviar un mensaje al chatbot:", error);
    throw error;
  }
};

export const queryChatbotDatabase = async (query) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/chatbot/query`,
      {
        query,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al consultar en la base de datos:", error);
    throw error;
  }
};

export const getDocumentById = async (documentId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/chatbot/document/${documentId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al consultar un documento por ID:", error);
    throw error;
  }
};
