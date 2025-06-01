'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      throw new Error('Not implemented'); // Simulate an error for demonstration purposes
      // Replace with your actual API endpoint
      // const res = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      // if (!res.ok) {
      //   throw new Error('Login failed');
      // }
      // Handle success (redirect, show message, etc.)
    } catch (err: any) {
      console.error('Login error:', err);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-2/3 bg-[url(/assets/images/background.jpg)] bg-cover bg-center">
        {/* Content for the 65% width div */}
        <h1>
          Hello World!
        </h1>
      </div>
      <div className="w-1/3 flex items-center justify-center bg-blue-950 relative overflow-hidden">
        {/* Blurred background image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-[url('/assets/images/background.jpg')] bg-cover bg-center filter blur-lg opacity-40"
          />
        </div>
        {/* Login form content */}
        <div className="w-full max-w-sm z-10">
          <form className="border-b-1 border-gray-600 pb-8" onSubmit={handleLogin}>
            <h1 className="text-6xl font-bold mb-4 text-white pb-6">SIGN IN</h1>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2 text-sm">
                Sign in with email address
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Image src="/assets/images/mail.png" alt="Mail" width={20} height={20} />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-3
                    pl-10  // <-- More left padding for the icon
                    pr-3
                    text-gray-300
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                  "
                  placeholder="Yourname@gmail.com"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="
                py-3
                w-full
                text-white
                text-lg
                font-medium
                rounded-2xl
                bg-gradient-to-r
                from-yellow-800
                to-blue-600
                hover:from-yellow-700
                hover:to-blue-800
                transition
                duration-200
                shadow-none
                focus:outline-none
              "
            >
              {loading ? 'Signing in...' : 'Sign up'}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
          <section className="pt-6">
            <p className="text-gray-400 font-semibold text-sm">Or continue with</p>
            <div className="flex items-center justify-between mt-4 gap-4">
              <button
                type="button"
                className="flex items-center w-1/2 justify-center gap-2 py-2 bg-[#314dca] rounded-2xl text-white font-semibold text-base transition duration-200 hover:bg-blue-900 focus:outline-none"
              >
                <Image src="/assets/images/google.png" alt="Google" height={24} width={24} />
                Google
              </button>
              <button
                type="button"
                className="flex items-center w-1/2 justify-center gap-2 py-2 bg-[#314dca] rounded-2xl text-white font-semibold text-base transition duration-200 hover:bg-blue-900 focus:outline-none"
              >
                <Image src="/assets/images/facebook.png" alt="Facebook" height={26} width={26} />
                Facebook
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
