'use client';
import { useState } from 'react';

export default function PublicationsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [publishDate, setPublishDate] = useState('');
    const [author, setAuthor] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            if (selectedFile.type !== 'application/pdf') {
                alert('Only PDF files are allowed.');
                return;
            }
            setFile(selectedFile);
        }
    };

    const handleSubmit = () => {
        if (!fileName || !file || !publishDate || !author) {
            alert('Please fill in all fields and select a file.');
            return;
        }
        // Handle file upload logic here
        alert(`File "${fileName}" by ${author} published on ${publishDate} uploaded successfully.`);
        setIsModalOpen(false);
        setFileName('');
        setFile(null);
        setPublishDate('');
        setAuthor('');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-[#d7153a] text-white py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Manage Publications</h1>
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
                <h2 className="text-xl font-bold text-gray-900 mb-6">Publications Management</h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                        Here you can add, edit, or delete publications displayed on the website.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                    >
                        Add New Publication
                    </button>
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Add New Publication</h3>
                        <div className="mb-4">
                            <label htmlFor="fileName" className="block text-sm font-medium text-gray-700 mb-1">
                                File Name
                            </label>
                            <input
                                type="text"
                                id="fileName"
                                value={fileName}
                                onChange={(e) => setFileName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                placeholder="Enter file name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-1">
                                Upload File (PDF only)
                            </label>
                            <div
                                className="w-full h-32 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-100 cursor-pointer"
                                onClick={() => document.getElementById('fileUpload')?.click()}
                            >
                                <span className="text-gray-500">Click to upload a File</span>
                            </div>
                            <input
                                type="file"
                                id="fileUpload"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700 mb-1">
                                Publish Date
                            </label>
                            <input
                                type="date"
                                id="publishDate"
                                value={publishDate}
                                onChange={(e) => setPublishDate(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                                Author
                            </label>
                            <input
                                type="text"
                                id="author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                placeholder="Enter author name"
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
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
