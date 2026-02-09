export default function VaultItem({ item, onDelete }) {
  const copyData = () => {
    navigator.clipboard.writeText(item.command);
    alert("Copied securely");
  };

  return (
    <div className="bg-card p-4 rounded-xl flex justify-between items-center border border-gray-800">
      <div>
        <p className="font-semibold">{item.title}</p>
        <p className="text-xs text-gray-400">Encrypted Data</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={copyData}
          className="px-3 py-1 text-sm bg-accent text-black rounded"
        >
          Copy
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="px-3 py-1 text-sm bg-red-600 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
