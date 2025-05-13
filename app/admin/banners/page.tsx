'use client';

export default function BannersPage() {
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
                        onClick={() => alert('Add Banner functionality coming soon!')}
                        className="px-4 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                    >
                        Add New Banner
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 mt-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Existing Banners</h3>
                    <p className="text-gray-700">No banners available.</p>
                </div>
            </main>
        </div>
    );
}
