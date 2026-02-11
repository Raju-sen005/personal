export default function StatCard({ title, value }) {
  return (
    <div className="bg-card p-5 rounded-md border border-gray-400">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
