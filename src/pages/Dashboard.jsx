import { useState } from "react";
import StatCard from "../components/StatCard";
import VaultItem from "../components/VaultItem";

export default function Dashboard() {
  const [vault, setVault] = useState([
    {
      id: 1,
      title: "Server Login",
      command: "ssh root@192.168.1.1",
    },
    {
      id: 2,
      title: "Mongo Backup",
      command: "mongodump --uri=XXXXX",
    },
  ]);

  const deleteItem = (id) => {
    setVault(vault.filter((v) => v.id !== id));
  };

  return (
    <div className="p-6 space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Personal Secure Dashboard</h1>
        <p className="text-gray-400 text-sm">
          All your contacts, credentials & chats in one place
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Contacts" value="12" />
        <StatCard title="Chats" value="3" />
        <StatCard title="Groups" value="2" />
        <StatCard title="Credentials" value={vault.length} />
      </div>

      {/* Vault Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Credentials & Commands Vault
        </h2>

        <div className="space-y-3">
          {vault.map((item) => (
            <VaultItem
              key={item.id}
              item={item}
              onDelete={deleteItem}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-5 rounded-md border border-gray-300">
          <p className="font-semibold">📇 Contacts</p>
          <p className="text-sm text-gray-400">
            Manage people you connect with
          </p>
        </div>

        <div className="bg-card p-5 rounded-md border border-gray-300">
          <p className="font-semibold">💬 Chats</p>
          <p className="text-sm text-gray-400">
            Private encrypted conversations
          </p>
        </div>

        <div className="bg-card p-5 rounded-md border border-gray-300">
          <p className="font-semibold">👥 Groups</p>
          <p className="text-sm text-gray-400">
            Create & manage private groups
          </p>
        </div>
      </div>

    </div>
  );
}
