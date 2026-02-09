import { useState } from "react";

export default function Groups() {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Dev Team",
      members: ["Ramesh", "Suresh", "Mahesh"],
    },
  ]);

  const [groupName, setGroupName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [activeGroup, setActiveGroup] = useState(null);

  const createGroup = () => {
    if (!groupName.trim()) return alert("Group name required");

    setGroups([
      ...groups,
      { id: Date.now(), name: groupName, members: [] },
    ]);
    setGroupName("");
  };

  const deleteGroup = (id) => {
    if (confirm("Delete this group?")) {
      setGroups(groups.filter((g) => g.id !== id));
      setActiveGroup(null);
    }
  };

  const addMember = (groupId) => {
    if (!memberName.trim()) return;

    setGroups(
      groups.map((g) =>
        g.id === groupId
          ? { ...g, members: [...g.members, memberName] }
          : g
      )
    );
    setMemberName("");
  };

  const removeMember = (groupId, member) => {
    setGroups(
      groups.map((g) =>
        g.id === groupId
          ? {
              ...g,
              members: g.members.filter((m) => m !== member),
            }
          : g
      )
    );
  };

  return (
    <div className="p-6 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">👥 Groups</h1>
        <p className="text-sm text-gray-400">
          Create & manage your private groups
        </p>
      </div>

      {/* Create Group */}
      <div className="bg-card p-5 rounded-xl border border-gray-800 flex gap-3">
        <input
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="New group name"
          className="flex-1 p-2 rounded bg-dark border border-gray-700"
        />
        <button
          onClick={createGroup}
          className="bg-accent text-black px-5 rounded"
        >
          Create
        </button>
      </div>

      {/* Groups List */}
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-card p-5 rounded-xl border border-gray-800 space-y-4"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{group.name}</h2>
              <button
                onClick={() => deleteGroup(group.id)}
                className="text-sm text-red-500"
              >
                Delete
              </button>
            </div>

            <p className="text-sm text-gray-400">
              Members ({group.members.length})
            </p>

            {/* Members */}
            <div className="space-y-2">
              {group.members.map((member, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-dark p-2 rounded"
                >
                  <span>{member}</span>
                  <button
                    onClick={() => removeMember(group.id, member)}
                    className="text-xs text-red-400"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Add Member */}
            <div className="flex gap-2">
              <input
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                placeholder="Member name"
                className="flex-1 p-2 rounded bg-dark border border-gray-700"
              />
              <button
                onClick={() => addMember(group.id)}
                className="bg-accent text-black px-4 rounded"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
