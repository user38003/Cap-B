'use client';
import { useState, useEffect } from 'react';

export default function PublicationsPage() {
    const [publications, setPublications] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedPub, setSelectedPub] = useState(null);
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pdfFile, setPdfFile] = useState(null);

    useEffect(() => {
        fetchPublications();
    }, []);

    const fetchPublications = async () => {
        const res = await fetch('/api/publications');
        const data = await res.json();
        setPublications(data.publications);
    };

    const handleAdd = () => {
        setIsEdit(false);
        setSelectedPub(null);
        setTitle('');
        setAuthors('');
        setSubTitle('');
        setDescription('');
        setPdfFile(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (pub) => {
        setIsEdit(true);
        setSelectedPub(pub);
        setTitle(pub.title);
        setAuthors(pub.authors);
        setSubTitle(pub.subTitle);
        setDescription(pub.description);
        setPdfFile(null);
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (confirm('Are you sure to delete this publication?')) {
            const res = await fetch(`/api/publications?id=${id}`, { method: 'DELETE' });
            const data = await res.json();
            if (res.ok) {
                alert(data.message);
                fetchPublications();
            } else {
                alert(data.message);
            }
        }
    };

    const handleSubmit = async () => {
        if (!title || !authors || !subTitle || !description || (!isEdit && !pdfFile)) {
            alert('Please fill in all fields. For new publication, pdf is required.');
            return;
        }
        const formData = new FormData();
        if (isEdit) formData.append('id', selectedPub.id);
        formData.append('title', title);
        formData.append('authors', authors);
        formData.append('subTitle', subTitle);
        formData.append('description', description);
        if (pdfFile) formData.append('pdf', pdfFile);

        const method = isEdit ? 'PUT' : 'POST';
        const res = await fetch('/api/publications', {
            method,
            body: formData
        });
        const data = await res.json();
        if (res.ok) {
            alert(data.message);
            setIsModalOpen(false);
            fetchPublications();
        } else {
            alert(data.message);
        }
    };

    const handlePdfChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type !== 'application/pdf') {
                alert('Only PDF files are allowed.');
                return;
            }
            setPdfFile(file);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-[#d7153a] text-white py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Manage Publications</h1>
                    <a href="/admin" className="text-white hover:text-white/80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </a>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Publications Management</h2>
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <button
                        onClick={handleAdd}
                        className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                    >
                        Add New Publication
                    </button>
                </div>
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b">ID</th>
                            <th className="px-6 py-3 border-b">Title</th>
                            <th className="px-6 py-3 border-b">Authors</th>
                            <th className="px-6 py-3 border-b">Sub Title</th>
                            <th className="px-6 py-3 border-b">Description</th>
                            <th className="px-6 py-3 border-b">PDF</th>
                            <th className="px-6 py-3 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publications.map((pub) => (
                            <tr key={pub.id} className="text-center">
                                <td className="px-6 py-4 border-b">{pub.id}</td>
                                <td className="px-6 py-4 border-b">{pub.title}</td>
                                <td className="px-6 py-4 border-b">{pub.authors}</td>
                                <td className="px-6 py-4 border-b">{pub.subTitle}</td>
                                <td className="px-6 py-4 border-b">{pub.description}</td>
                                <td className="px-6 py-4 border-b">
                                    {pub.pdf && <a href={pub.pdf} target="_blank" rel="noreferrer">View PDF</a>}
                                </td>
                                <td className="px-6 py-4 border-b space-x-2">
                                    <button
                                        onClick={() => handleEditClick(pub)}
                                        className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232]"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(pub.id)}
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
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            {isEdit ? 'Edit Publication' : 'Add New Publication'}
                        </h3>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                placeholder="Enter title"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="authors" className="block text-sm font-medium text-gray-700 mb-1">
                                Authors
                            </label>
                            <input
                                type="text"
                                id="authors"
                                value={authors}
                                onChange={(e) => setAuthors(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                placeholder="Enter authors"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subTitle" className="block text-sm font-medium text-gray-700 mb-1">
                                Sub Title
                            </label>
                            <input
                                type="text"
                                id="subTitle"
                                value={subTitle}
                                onChange={(e) => setSubTitle(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                placeholder="Enter sub title"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                placeholder="Enter description"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="pdf" className="block text-sm font-medium text-gray-700 mb-1">
                                PDF {isEdit ? '(leave blank to keep current)' : ''}
                            </label>
                            <input
                                type="file"
                                id="pdf"
                                accept="application/pdf"
                                onChange={handlePdfChange}
                                className="w-full"
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
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232]"
                            >
                                {isEdit ? 'Save' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
