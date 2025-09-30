import { FC } from "react";
import { Call } from "../../types/call";
import "../../styles/components/_callListItem.scss";
import { PhoneOutlined, VideoCameraOutlined } from "@ant-design/icons";

interface Props {
  call: Call;
}

const CallListItem: FC<Props> = ({ call }) => {
  return (
    <div className="call-list-item">
      <img src={call.avatar} alt={call.name} className="avatar" />
      <div className="call-info">
        <span className="name">{call.name}</span>
        <span className={`call-type ${call.type}`}>
          {call.type === "incoming" && "Incoming"}
          {call.type === "outgoing" && "Outgoing"}
          {call.type === "missed" && "Missed"}
          • {call.time}
        </span>
      </div>
      <div className="call-icon">
        {call.video ? <VideoCameraOutlined /> : <PhoneOutlined />}
      </div>
    </div>
  );
};

export default CallListItem;
