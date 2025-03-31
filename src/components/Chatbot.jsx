import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      const botReply = response.data.choices[0].message.content;
      setMessages([...messages, newMessage, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...messages, { text: "Oops! Something went wrong.", sender: "bot" }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChatbot}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        whileHover={{ scale: 1.1 }}
      >
        💬
      </motion.button>

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl p-4"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-bold text-gray-700">Chat with me!</h3>
            <button onClick={toggleChatbot} className="text-gray-500 hover:text-gray-700">
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto my-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto w-fit"
                    : "bg-gray-200 text-gray-700 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-lg p-2 text-sm"
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              ➤
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
