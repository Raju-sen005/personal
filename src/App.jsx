import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/Contact";
import Chat from "./pages/Chat";
import Groups from "./pages/Groups";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { token } = useAuth();

  if (!token) return <Login />;

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
