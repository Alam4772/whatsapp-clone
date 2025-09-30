import { FC } from "react";
import { Message } from "../../types/message";
import "../../styles/components/_messageBubble.scss";

interface Props {
  message: Message;
}

const MessageBubble: FC<Props> = ({ message }) => {
  return (
    <div className={`message-bubble ${message.outgoing ? "outgoing" : "incoming"}`}>
      <p>{message.content}</p>
      <span className="timestamp">{message.timestamp}</span>
    </div>
  );
};

export default MessageBubble;
