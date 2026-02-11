import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/Contact";
import Chat from "./pages/Chat";
import Groups from "./pages/Groups";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthContext";
import Topbar from "./components/Topbar";

export default function App() {
  const { token } = useAuth();

  if (!token) return <Login />;

  return (
    <BrowserRouter>
      <Sidebar />
      <Topbar />

      <div className="ml-60 min-h-screen pt-14 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}
