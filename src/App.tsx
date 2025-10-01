import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatWindow from "./pages/ChatWindow";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />} />
        <Route path="/chat/:id" element={<ChatWindow />} />
      </Routes>
    </BrowserRouter>
  );
}
