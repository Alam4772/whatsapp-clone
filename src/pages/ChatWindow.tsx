import { useState } from "react";
import MessageBubble from "../components/chat/MessageBubble";
import { sampleMessages } from "../utils/sampleMessages";
import "../styles/pages/_chatWindow.scss";
import ChatHeader from "../components/chat/ChatHeader";

const ChatWindow = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        senderId: "me",
        content: input,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        outgoing: true,
      },
    ]);
    setInput("");
  };

  return (
    <div className="chat-window">
    <ChatHeader name="Alice" avatar="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" status="online" />
      <div className="messages">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>
            <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
