import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 w-60 h-screen bg-card p-5 shadow-sm">
      <h1 className="text-xl font-bold mb-6"> User Vault</h1>

      <nav className="space-y-3">
        <Link to="/" className="block hover:bg-gray-100 p-1.5">Dashboard</Link>
        <Link to="/contacts" className="block hover:bg-gray-100 p-1.5">Contacts</Link>
        <Link to="/chat" className="block hover:bg-gray-100 p-1.5">Chat</Link>
        <Link to="/groups" className="block hover:bg-gray-100 p-1.5">Groups</Link>
      </nav>
    </div>
  );
}
