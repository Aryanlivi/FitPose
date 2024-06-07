// src/Landing.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Landing = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Hello, {user?.name}</p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
