'use client';
import { useState, useEffect } from 'react';

export default function UserProfilesPage() {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 加载用户数据
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const res = await fetch('/api/users');
        const data = await res.json();
        setUsers(data.users);
    };

    // 打开编辑 modal，并预填数据
    const handleEditClick = (user) => {
        setSelectedUser(user);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setIsModalOpen(true);
    };

    // 保存更新
    const handleSave = async () => {
        if (!name || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }
        const res = await fetch('/api/users', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: selectedUser.id, name, email, password })
        });
        const data = await res.json();
        if (res.ok) {
            alert(data.message);
            setIsModalOpen(false);
            setSelectedUser(null);
            setName('');
            setEmail('');
            setPassword('');
            fetchUsers();
        } else {
            alert(data.message);
        }
    };

    // 删除用户
    const handleDelete = async (id) => {
        if (confirm('Are you sure to delete this user?')) {
            const res = await fetch(`/api/users?id=${id}`, { method: 'DELETE' });
            const data = await res.json();
            if (res.ok) {
                alert(data.message);
                fetchUsers();
            } else {
                alert(data.message);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-[#d7153a] text-white py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Manage User Profiles</h1>
                    <a href="/admin" className="text-white hover:text-white/80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </a>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6">User Profiles Management</h2>
                {/* 用户数据表格 */}
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b">ID</th>
                            <th className="px-6 py-3 border-b">Name</th>
                            <th className="px-6 py-3 border-b">Email</th>
                            <th className="px-6 py-3 border-b">Password</th>
                            <th className="px-6 py-3 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="text-center">
                                <td className="px-6 py-4 border-b">{user.id}</td>
                                <td className="px-6 py-4 border-b">{user.name}</td>
                                <td className="px-6 py-4 border-b">{user.email}</td>
                                <td className="px-6 py-4 border-b">{user.password}</td>
                                <td className="px-6 py-4 border-b space-x-2">
                                    <button
                                        onClick={() => handleEditClick(user)}
                                        className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232]"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>

            {/* 编辑 Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Edit User</h3>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                placeholder="Enter email"
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
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232]"
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
