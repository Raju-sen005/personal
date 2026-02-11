import { useState } from "react";
import { Search, ChevronDown, User, Key, LogOut } from "lucide-react";

export default function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-60 right-0 h-14 bg-white border-b border-gray-400 z-20">
      <div className="h-full flex items-center justify-between px-6">
        
        {/* Search Bar */}
        <div className="relative w-[380px]">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className="
              w-full pl-9 pr-3 py-1.5 text-sm
              border border-gray-300 rounded-md
              outline-none
              focus:border-blue-500 focus:ring-1 focus:ring-blue-500
            "
          />
        </div>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-8 h-8 rounded-full border"
            />
            <span className="text-sm text-gray-700 font-medium">
              Raju
            </span>
            <ChevronDown size={16} className="text-gray-500" />
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-52 bg-white border rounded-md shadow-lg text-sm">
              <a
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <User size={16} />
                My Profile
              </a>

              <a
                href="/change-password"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <Key size={16} />
                Change Password
              </a>

              <div className="border-t" />

              <button
                onClick={() => alert("Logout logic here")}
                className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
