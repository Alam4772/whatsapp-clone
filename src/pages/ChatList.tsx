import { useEffect, useState } from "react";
import ChatListItem from "../components/chat/ChatListItem";
import { getUsers } from "../services/userService";

const ChatList = () => {
  const [records, setRecords] = useState<any[]>([]);

  const getUserList = async () => {
    const users = await getUsers();    
    setRecords(users.data.data);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div>
      {records.map((record) => (
        <ChatListItem key={record.id} chat={record} />
      ))}
    </div>
  );
};

export default ChatList;
