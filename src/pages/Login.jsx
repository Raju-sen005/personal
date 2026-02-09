import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-card p-8 rounded-xl w-96">
        <h2 className="text-2xl mb-4 font-bold">Secure Vault Login</h2>

        <input
          className="w-full mb-3 p-2 rounded bg-dark border border-gray-700"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full mb-4 p-2 rounded bg-dark border border-gray-700"
          placeholder="Password"
        />

        <button
          onClick={() => login("secure_token")}
          className="w-full bg-accent text-black py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
