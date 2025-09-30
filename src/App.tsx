import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ChatList from "./pages/ChatList";
import HeaderTabs from "./components/common/HeaderTabs";
import ChatWindow from "./pages/ChatWindow";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderTabs />} />
        <Route path="/chat/:id" element={<ChatWindow />} />
      </Routes>
    </BrowserRouter>
  );
}
