'use client';
import { useState } from 'react';

export default function SignupPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setMessage('Sign up successful!');
                setFormData({ name: '', email: '', password: '' });
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Sign up failed.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
            <a href="/" className="absolute top-4 left-4 text-[#d7153a] hover:text-[#b01232]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </a>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign Up</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                    >
                        Sign Up
                    </button>
                </form>
                {message && <p className="mt-4 text-sm text-center text-gray-600">{message}</p>}
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Already have an account? <a href="/login" className="text-[#d7153a] hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
}
