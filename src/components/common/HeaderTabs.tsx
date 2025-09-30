import { Tabs } from "antd";
import ChatList from "../../pages/ChatList";
import CallList from "../../pages/CallList";
import "../../styles/components/_headerTabs.scss";

const HeaderTabs = () => {
  return (
    <div className="header-tabs">
      <div className="main-header">
        <h3>Whatsapp</h3>
        <span>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-ellipsis-vertical"></i>
        </span>
      </div>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Chats",
            children: <ChatList />,
          },
          {
            key: "2",
            label: "Calls",
            children: <CallList />,
          },
        ]}
      />
    </div>
  );
};

export default HeaderTabs;
