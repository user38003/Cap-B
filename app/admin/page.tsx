'use client';

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-[#d7153a] text-white py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    <a
                        href="/"
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Manage Publications</h2>
                        <p className="text-gray-700 mb-4">
                            Add, edit, or delete publications displayed on the website.
                        </p>
                        <button
                            onClick={() => (window.location.href = '/admin/publications')}
                            className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                        >
                            Go to Publications
                        </button>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Manage User Profiles</h2>
                        <p className="text-gray-700 mb-4">
                            View and manage user profiles and permissions.
                        </p>
                        <button className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors">
                            Go to User Profiles
                        </button>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Manage Banners</h2>
                        <p className="text-gray-700 mb-4">
                            Update homepage banners and promotional content.
                        </p>
                        <button className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors">
                            Go to Banners
                        </button>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Manage Posts</h2>
                        <p className="text-gray-700 mb-4">
                            Create, edit, or delete posts for the website.
                        </p>
                        <button className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors">
                            Go to Posts
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
