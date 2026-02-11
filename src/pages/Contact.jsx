import { useState } from "react";
import { MdContentCopy } from "react-icons/md";


export default function Contacts() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Ramesh Kumar",
      phone: "9876543210",
      email: "ramesh@mail.com",
      credentials: "ssh root@192.168.1.10",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    credentials: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveContact = () => {
    if (!form.name) return alert("Name required");

    if (editingId) {
      setContacts(
        contacts.map((c) =>
          c.id === editingId ? { ...c, ...form } : c
        )
      );
      setEditingId(null);
    } else {
      setContacts([
        ...contacts,
        { ...form, id: Date.now() },
      ]);
    }

    setForm({ name: "", phone: "", email: "", credentials: "" });
  };

  const editContact = (contact) => {
    setForm(contact);
    setEditingId(contact.id);
  };

  const deleteContact = (id) => {
    if (confirm("Delete this contact?")) {
      setContacts(contacts.filter((c) => c.id !== id));
    }
  };

  const copyCredentials = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied securely");
  };

  return (
    <div className="p-6 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Contacts Vault</h1>
        <p className="text-sm text-gray-400">
          Store people, credentials & commands securely
        </p>
      </div>

      {/* Add / Edit Form */}
      <div className="bg-card p-5 rounded-md border border-gray-300 space-y-4">
        <h2 className="font-semibold">
          {editingId ? "Edit Contact" : "Add New Contact"}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-2 rounded-sm bg-dark border border-gray-400"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="p-2 rounded-sm bg-dark border border-gray-400"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 rounded-sm bg-dark border border-gray-400"
          />
        </div>

        <textarea
          name="credentials"
          value={form.credentials}
          onChange={handleChange}
          placeholder="Credentials / Commands (encrypted later)"
          className="w-full p-2 rounded-sm bg-dark border border-gray-400 h-24"
        />

        <button
          onClick={saveContact}
          className="bg-white text-black px-4 py-1.5 rounded border border-gray-400"
        >
          {editingId ? "Update Contact" : "Save Contact"}
        </button>
      </div>

      {/* Contacts List */}
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-card p-4 rounded-md border border-gray-300 flex flex-col md:flex-row justify-between gap-4"
          >
            <div>
              <p className="font-semibold">{contact.name}</p>
              <p className="text-sm text-gray-400">
                {contact.phone} • {contact.email}
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => copyCredentials(contact.credentials)}
                className="px-3 py-1 text-sm bg-accent text-black rounded"
              >
                <MdContentCopy />

              </button>
              <button
                onClick={() => editContact(contact)}
                className="px-3 py-0 text-sm bg-white text-black rounded border"
              >
                Edit
              </button>
              <button
                onClick={() => deleteContact(contact.id)}
                className="px-3 py-0 text-sm text-red-500 bg-white border rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
