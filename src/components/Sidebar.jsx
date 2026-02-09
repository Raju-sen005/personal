import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 bg-card h-screen p-5">
      <h1 className="text-xl font-bold mb-6"> Vault</h1>

      <nav className="space-y-3">
        <Link to="/" className="block hover:text-accent">Dashboard</Link>
        <Link to="/contacts" className="block hover:text-accent">Contacts</Link>
        <Link to="/chat" className="block hover:text-accent">Chat</Link>
        <Link to="/groups" className="block hover:text-accent">Groups</Link>
      </nav>
    </div>
  );
}
