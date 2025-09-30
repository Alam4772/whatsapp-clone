import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/_chatHeader.scss";

interface Props {
  name: string;
  avatar: string;
  status?: string;
}

const ChatHeader: FC<Props> = ({ name, avatar, status }) => {
  const navigate = useNavigate();

  return (
    <div className="chat-window-header">
      <div className="left">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <img src={avatar} alt={name} className="avatar" />
        <div className="contact-info">
          <span className="name">{name}</span>
          {status && <span className="status">{status}</span>}
        </div>
      </div>
      <div className="right">
        <i className="fa-solid fa-video"></i>
        <i className="fa-solid fa-phone"></i>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  );
};

export default ChatHeader;
