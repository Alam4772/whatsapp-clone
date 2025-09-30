import { FC } from "react";
import { Chat } from "../../types/chat";
import "../../styles/components/_chatListItem.scss";
import { useNavigate } from "react-router-dom";

interface Props {
  chat: Chat;
}

const ChatListItem: FC<Props> = ({ chat }) => {

  const navigate = useNavigate();

  return (
    <div className="chat-list-item" onClick={() => navigate(`/chat/${chat.id}`)}>
      <img src={chat.avatar} alt={chat.name} className="avatar" />
      <div className="chat-info">
        <div className="chat-header">
          <span className="chat-name">{chat.name}</span>
          <span className="chat-time">{chat.time}</span>
        </div>
        <div className="chat-message">
          <span>{chat.lastMessage}</span>
          {chat.unread && <span className="chat-unread">{chat.unread}</span>}
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
