import { useNavigate } from 'react-router';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
      <div className="bg-orange-500 p-4 rounded-2xl mb-6">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-5xl font-black text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-8">Oops! This page doesn't exist.</p>
      <button
        onClick={() => navigate('/')}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105 active:scale-95"
      >
        Back to Home
      </button>
    </div>
  );
}