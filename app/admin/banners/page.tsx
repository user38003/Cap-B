'use client';
import { useState } from 'react';

export default function BannersPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        link: '', // 新增链接字段
    });
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
                setFormData({ ...formData, imageUrl: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        console.log('New Banner Data:', formData);
        setIsModalOpen(false);
        setFormData({ title: '', description: '', imageUrl: '', link: '' });
        setImagePreview(null);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-[#d7153a] text-white py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Manage Banners</h1>
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
                <h2 className="text-xl font-bold text-gray-900 mb-6">Banners Management</h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                        Here you can add, edit, or delete banners displayed on the website.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                    >
                        Add New Banner
                    </button>
                </div>
            </main>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h3 className="text-lg font-bold mb-4">Add New Banner</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Upload Image
                            </label>
                            <div className="relative w-full h-32 border border-gray-300 rounded-md flex items-center justify-center bg-gray-100">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                                <img
                                    src="/placeholder-image.png"
                                    alt="Upload Placeholder"
                                    className="w-16 h-16 object-cover opacity-50"
                                />
                            </div>
                        </div>
                        {imagePreview && (
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Image Preview
                                </label>
                                <img
                                    src={imagePreview}
                                    alt="Banner Preview"
                                    className="w-full h-auto rounded-md shadow-md"
                                />
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Link
                            </label>
                            <input
                                type="text"
                                name="link"
                                value={formData.link}
                                onChange={handleInputChange}
                                placeholder="Enter link for the banner"
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                            />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setImagePreview(null);
                                }}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
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
