import ChatListItem from "../components/chat/ChatListItem";
import { sampleChats } from "../utils/sampleChats";
import "../styles/pages/_chatList.scss";

const ChatList = () => {
  return (
    <div className="chat-list">
      {sampleChats.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;
