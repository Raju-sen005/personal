export default function StatCard({ title, value }) {
  return (
    <div className="bg-card p-5 rounded-2xl border border-gray-800">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
