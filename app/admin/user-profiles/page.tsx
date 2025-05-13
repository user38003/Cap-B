'use client';
import { useState } from 'react';

export default function UserProfilesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleEdit = () => {
        if (!username || !password) {
            alert('Please fill in all fields.');
            return;
        }
        alert(`User "${username}" updated successfully.`);
        setIsModalOpen(false);
        setUsername('');
        setPassword('');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-[#d7153a] text-white py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Manage User Profiles</h1>
                    <a
                        href="/admin"
                        className="text-white hover:text-white/80"
                    >
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
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6">User Profiles Management</h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                        Here you can view, edit, or delete user profiles and manage their permissions.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                    >
                        Edit User
                    </button>
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Edit User</h3>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                placeholder="Enter username"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleEdit}
                                className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
