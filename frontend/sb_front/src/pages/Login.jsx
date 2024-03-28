import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticación aquí (puedes realizar una llamada a una API, por ejemplo)

    // Si la autenticación es exitosa, redirige a la página de Dashboard
    navigate.push('/inicio');
  };

  return (
    <div className="flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[400px] mx-auto space-y-8">
        <div className="text-center">
          <FlagIcon className="mx-auto h-12 w-12" />
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="m@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <Link className="text-sm underline" to="#">
                Forgot your password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-indigo-600 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login with Google
          </button>
        </div>
        <div className="text-center text-sm">
          Don't have an account?
          <Link className="underline" to="#">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}
