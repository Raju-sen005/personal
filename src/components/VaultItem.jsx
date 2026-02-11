import { MdContentCopy } from "react-icons/md";

export default function VaultItem({ item, onDelete }) {
  const copyData = () => {
    navigator.clipboard.writeText(item.command);
    alert("Copied securely");
  };

  return (
    <div className="bg-card p-4 rounded-md flex justify-between items-center border border-gray-300">
      <div>
        <p className="font-semibold">{item.title}</p>
        <p className="text-xs text-gray-400">Encrypted Data</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={copyData}
          className="px-3 py-1 text-sm bg-accent text-black rounded"
        >
          <MdContentCopy />
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="px-3 py-1 text-sm text-red-500 bg-white border rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
