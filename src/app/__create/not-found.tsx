import { useNavigate } from "react-router";


export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
      <h1 className="text-5xl font-black text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-8">Oops! This page does not exist.</p>
      <button onClick={() => navigate("/")} className="bg-orange-500 text-white font-bold px-8 py-3 rounded-full">
        Back to Home
      </button>
    </div>
  );
}
