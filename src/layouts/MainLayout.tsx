import { useState } from "react";
import { Tabs } from "antd";
import ChatList from "../pages/ChatList";
import CallList from "../pages/CallList";
import styles from "./style.module.scss";

export interface IMainLayoutProps {}

export default function MainLayout(props: IMainLayoutProps) {
  const [activeKey, setActiveKey] = useState("1");

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h3>Whatsapp</h3>
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </span>
      </div>
      <Tabs
        defaultActiveKey="1"
        onChange={handleTabChange}
        items={[
          { key: "1", label: "Chats" },
          { key: "2", label: "Calls" },
        ]}
      />
      <div className={styles.main}>
        {activeKey === "1" && <ChatList />}
        {activeKey === "2" && <CallList />}
      </div>
    </div>
  );
}
