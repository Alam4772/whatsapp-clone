import ChatListItem from "../components/chat/ChatListItem";
import { sampleChats } from "../utils/sampleChats";

const ChatList = () => {
  return (
    <div>
      {sampleChats.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;
