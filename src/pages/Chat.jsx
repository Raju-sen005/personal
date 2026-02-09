import { useState, useRef, useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "them",
      text: "🔒 Encrypted hello message",
      time: "10:30 AM",
    },
  ]);

  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: input,
      time: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-6 h-full flex flex-col">

      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">💬 Private Chat</h1>
        <p className="text-sm text-gray-400">
          End-to-end encrypted (backend ready)
        </p>
      </div>

      {/* Chat Box */}
      <div className="flex-1 bg-card p-4 rounded-xl border border-gray-800 overflow-y-auto space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 rounded-xl text-sm ${
                msg.sender === "me"
                  ? "bg-accent text-black"
                  : "bg-dark border border-gray-700"
              }`}
            >
              <p>{msg.text}</p>
              <span className="block text-[10px] mt-1 text-right opacity-60">
                {msg.time}
              </span>
            </div>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      {/* Input Box */}
      <div className="mt-4 flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type encrypted message..."
          className="flex-1 p-3 rounded-l-xl bg-dark border border-gray-700 outline-none"
        />
        <button
          onClick={sendMessage}
          className="px-6 bg-accent text-black rounded-r-xl"
        >
          Send
        </button>
      </div>

    </div>
  );
}
