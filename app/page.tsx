'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('about');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="w5nqoy-">
            {/* Header with University branding */}
            <header className="bg-[#d7153a] text-white" data-oid="8b8s0ln">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="5287p8.">
                    <div className="flex justify-between items-center py-4" data-oid=".8g9iy7">
                        <div className="flex items-center" data-oid="rj8ig7m">
                            <h1 className="text-2xl font-bold" data-oid="d6ca.h5">
                                University of Sydney
                            </h1>
                            <span className="mx-2 text-white/70" data-oid="8ujyp5j">
                                |
                            </span>
                            <h2 className="text-xl" data-oid="mb-dxjq">
                                Nanometrology Research Team
                            </h2>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden" data-oid="yvlvf0b">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white focus:outline-none"
                                data-oid="922m9fy"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="jbje0m:"
                                >
                                    {isMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="44_fm87"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="lhffdp3"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Desktop navigation */}
                        <nav className="hidden md:flex space-x-8" data-oid="u:.tpmx">
                            <button
                                onClick={() => setActiveTab('about')}
                                className={`text-white hover:text-white/80 px-3 py-2 ${activeTab === 'about' ? 'border-b-2 border-white' : ''}`}
                                data-oid="_r2rsvw"
                            >
                                About Us
                            </button>
                            <button
                                onClick={() => setActiveTab('research')}
                                className={`text-white hover:text-white/80 px-3 py-2 ${activeTab === 'research' ? 'border-b-2 border-white' : ''}`}
                                data-oid="k:74war"
                            >
                                Research
                            </button>
                            <button
                                onClick={() => setActiveTab('team')}
                                className={`text-white hover:text-white/80 px-3 py-2 ${activeTab === 'team' ? 'border-b-2 border-white' : ''}`}
                                data-oid="9p-2syu"
                            >
                                Our Team
                            </button>
                            <button
                                onClick={() => setActiveTab('publications')}
                                className={`text-white hover:text-white/80 px-3 py-2 ${activeTab === 'publications' ? 'border-b-2 border-white' : ''}`}
                                data-oid="0ihb7.b"
                            >
                                Publications
                            </button>
                            <button
                                onClick={() => setActiveTab('contact')}
                                className={`text-white hover:text-white/80 px-3 py-2 ${activeTab === 'contact' ? 'border-b-2 border-white' : ''}`}
                                data-oid="k6thm7i"
                            >
                                Contact
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Mobile navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-[#b01232] py-2" data-oid="zb9tnwx">
                        <div className="px-4 space-y-1" data-oid="j5fms.9">
                            <button
                                onClick={() => {
                                    setActiveTab('about');
                                    setIsMenuOpen(false);
                                }}
                                className="block text-white hover:bg-[#a01030] px-3 py-2 rounded-md w-full text-left"
                                data-oid="2a46l0b"
                            >
                                About Us
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('research');
                                    setIsMenuOpen(false);
                                }}
                                className="block text-white hover:bg-[#a01030] px-3 py-2 rounded-md w-full text-left"
                                data-oid="8c5u5jn"
                            >
                                Research
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('team');
                                    setIsMenuOpen(false);
                                }}
                                className="block text-white hover:bg-[#a01030] px-3 py-2 rounded-md w-full text-left"
                                data-oid="k:cv05l"
                            >
                                Our Team
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('publications');
                                    setIsMenuOpen(false);
                                }}
                                className="block text-white hover:bg-[#a01030] px-3 py-2 rounded-md w-full text-left"
                                data-oid="6g6-nmc"
                            >
                                Publications
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('contact');
                                    setIsMenuOpen(false);
                                }}
                                className="block text-white hover:bg-[#a01030] px-3 py-2 rounded-md w-full text-left"
                                data-oid="xq7k:-0"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero section */}
            {activeTab === 'about' && (
                <div className="relative" data-oid="o-oog20">
                    <div className="bg-gray-900 h-[500px] flex items-center" data-oid="kx4xn_.">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"
                            data-oid="a8xtq_d"
                        ></div>
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')",
                            }}
                            data-oid="dabsxgl"
                        ></div>
                        <div
                            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
                            data-oid="mn51fct"
                        >
                            <div className="max-w-3xl" data-oid="9xffnx-">
                                <h1
                                    className="text-4xl font-bold text-white sm:text-5xl md:text-6xl"
                                    data-oid="gaeaz44"
                                >
                                    Precision at the Nanoscale
                                </h1>
                                <p className="mt-6 text-xl text-white/90" data-oid="p50o7wh">
                                    The University of Sydney's Nanometrology Team is pioneering
                                    advanced measurement techniques at the nanoscale, enabling
                                    breakthroughs in science and technology through unprecedented
                                    precision.
                                </p>
                                <div
                                    className="mt-8 flex flex-col sm:flex-row gap-4"
                                    data-oid="ynlcv74"
                                >
                                    <button
                                        onClick={() => setActiveTab('research')}
                                        className="px-8 py-3 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                                        data-oid="o05252m"
                                    >
                                        Our Research
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('team')}
                                        className="px-8 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors"
                                        data-oid="yv--mh7"
                                    >
                                        Meet the Team
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="004bcqy">
                {/* About section */}
                {activeTab === 'about' && (
                    <div data-oid="8xdb.s3">
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
                            data-oid="n8usqhm"
                        >
                            <div data-oid="0:1ibri">
                                <h2
                                    className="text-3xl font-bold text-gray-900 mb-6"
                                    data-oid="2jebzgx"
                                >
                                    About Our Nanometrology Team
                                </h2>
                                <p className="text-lg text-gray-700 mb-4" data-oid="nlzzj2s">
                                    Established in 2012, the University of Sydney's Nanometrology
                                    Research Team unites experts in metrology, physics,
                                    instrumentation, and computational science to develop
                                    cutting-edge measurement techniques at the nanoscale.
                                </p>
                                <p className="text-lg text-gray-700 mb-4" data-oid="pnuvobg">
                                    Our precision measurement technologies enable advancements in
                                    semiconductor fabrication, quantum computing, biological
                                    imaging, materials characterization, and standards development.
                                </p>
                                <p className="text-lg text-gray-700" data-oid="7h7zcw:">
                                    With our ultra-high precision instruments and multidisciplinary
                                    expertise, we're establishing new measurement standards and
                                    techniques that drive innovation across scientific disciplines
                                    and industries.
                                </p>
                            </div>
                            <div className="bg-gray-100 p-8 rounded-lg" data-oid="j3m56mu">
                                <h3
                                    className="text-2xl font-bold text-gray-900 mb-4"
                                    data-oid="53z_5ol"
                                >
                                    Research Focus Areas
                                </h3>
                                <ul className="space-y-3" data-oid="qmz:crb">
                                    <li className="flex items-start" data-oid=".bu-q13">
                                        <svg
                                            className="h-6 w-6 text-[#d7153a] mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="dx7vhgf"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="f_ucslx"
                                            />
                                        </svg>
                                        <span className="text-gray-700" data-oid="kdip:31">
                                            Atomic force microscopy techniques
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="2w2f8h2">
                                        <svg
                                            className="h-6 w-6 text-[#d7153a] mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ljadxx2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="dg3.r.v"
                                            />
                                        </svg>
                                        <span className="text-gray-700" data-oid="bd45dut">
                                            Quantum metrology standards
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="_lf1x:p">
                                        <svg
                                            className="h-6 w-6 text-[#d7153a] mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="dqenihs"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="i4w52lb"
                                            />
                                        </svg>
                                        <span className="text-gray-700" data-oid="nlh00dp">
                                            Super-resolution optical microscopy
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="fk0c:u2">
                                        <svg
                                            className="h-6 w-6 text-[#d7153a] mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="tv8sl33"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="bd6m8i:"
                                            />
                                        </svg>
                                        <span className="text-gray-700" data-oid="smhtua_">
                                            Electron microscopy calibration
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="8-l:qml">
                                        <svg
                                            className="h-6 w-6 text-[#d7153a] mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="gx3.ol8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="rtctp_z"
                                            />
                                        </svg>
                                        <span className="text-gray-700" data-oid="0q9vsnw">
                                            Computational nanometrology
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-16" data-oid="3poozka">
                            <h2
                                className="text-3xl font-bold text-gray-900 mb-8 text-center"
                                data-oid="8eov3w8"
                            >
                                Latest News
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                                data-oid=".27708y"
                            >
                                <div
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                    data-oid="gegzcrf"
                                >
                                    <div className="h-48 bg-gray-200" data-oid="by6pvoy"></div>
                                    <div className="p-6" data-oid="hzj0f.x">
                                        <p
                                            className="text-sm text-[#d7153a] font-semibold mb-2"
                                            data-oid="nt80szm"
                                        >
                                            June 15, 2023
                                        </p>
                                        <h3
                                            className="text-xl font-bold text-gray-900 mb-2"
                                            data-oid="npu0co1"
                                        >
                                            New Grant Awarded for Quantum Metrology Research
                                        </h3>
                                        <p className="text-gray-700" data-oid="v_rmwzj">
                                            Our team has received $3.2M in funding to develop
                                            quantum-enhanced measurement techniques with
                                            unprecedented precision for next-generation
                                            semiconductor manufacturing.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                    data-oid="p-7_x5p"
                                >
                                    <div className="h-48 bg-gray-200" data-oid="wzkzx.s"></div>
                                    <div className="p-6" data-oid="8ny-fxt">
                                        <p
                                            className="text-sm text-[#d7153a] font-semibold mb-2"
                                            data-oid="0mxm3qe"
                                        >
                                            May 3, 2023
                                        </p>
                                        <h3
                                            className="text-xl font-bold text-gray-900 mb-2"
                                            data-oid="8h4kue8"
                                        >
                                            Breakthrough in Atomic Force Microscopy Calibration
                                        </h3>
                                        <p className="text-gray-700" data-oid="dcdsura">
                                            Our researchers have developed a new calibration
                                            standard that improves measurement accuracy by 10x for
                                            atomic force microscopy.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                    data-oid="79m9h7h"
                                >
                                    <div className="h-48 bg-gray-200" data-oid="f6kj_nx"></div>
                                    <div className="p-6" data-oid="5eej6hh">
                                        <p
                                            className="text-sm text-[#d7153a] font-semibold mb-2"
                                            data-oid="q4fn-x2"
                                        >
                                            April 22, 2023
                                        </p>
                                        <h3
                                            className="text-xl font-bold text-gray-900 mb-2"
                                            data-oid="sbv2b0l"
                                        >
                                            International Collaboration with NIST Announced
                                        </h3>
                                        <p className="text-gray-700" data-oid="f-8urtp">
                                            Our team will be partnering with the National Institute
                                            of Standards and Technology on developing new nanoscale
                                            reference materials.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Research section */}
                {activeTab === 'research' && (
                    <div data-oid="fkhixxn">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8" data-oid="r9j74w1">
                            Our Research
                        </h2>

                        <div className="space-y-16" data-oid="sggkyzs">
                            {/* Project 1 */}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                                data-oid="0.x86ey"
                            >
                                <div
                                    className="bg-gray-100 h-80 rounded-lg"
                                    data-oid="fo0atq7"
                                ></div>
                                <div data-oid="z-upnc:">
                                    <h3
                                        className="text-2xl font-bold text-gray-900 mb-4"
                                        data-oid="-43hk--"
                                    >
                                        Advanced Scanning Probe Microscopy
                                    </h3>
                                    <p className="text-gray-700 mb-4" data-oid="n2.dzyu">
                                        Our team is developing next-generation scanning probe
                                        microscopy techniques with unprecedented spatial resolution
                                        and measurement precision. These tools enable atomic-scale
                                        characterization of materials and devices critical for
                                        semiconductor and quantum computing applications.
                                    </p>
                                    <p className="text-gray-700 mb-6" data-oid="2uw67a5">
                                        Recent breakthroughs include a novel force-sensing
                                        cantilever with femtonewton sensitivity and a
                                        multi-parameter measurement system that simultaneously
                                        captures topography, electrical, and mechanical properties.
                                    </p>
                                    <button
                                        className="px-6 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                                        data-oid="qw69-8t"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                                data-oid="wu3shc9"
                            >
                                <div
                                    className="order-1 md:order-2 bg-gray-100 h-80 rounded-lg"
                                    data-oid="34trlmy"
                                ></div>
                                <div className="order-2 md:order-1" data-oid="wtbm_r1">
                                    <h3
                                        className="text-2xl font-bold text-gray-900 mb-4"
                                        data-oid="v.wetue"
                                    >
                                        Quantum Metrology Standards
                                    </h3>
                                    <p className="text-gray-700 mb-4" data-oid="slpnk-w">
                                        We're developing quantum-based measurement standards that
                                        leverage fundamental physical constants to create absolute
                                        references for length, time, and electrical measurements at
                                        the nanoscale, ensuring traceability and reproducibility in
                                        nanoscience research.
                                    </p>
                                    <p className="text-gray-700 mb-6" data-oid="8qadmc6">
                                        Our current focus includes single-electron transistor
                                        standards, quantum Hall resistance references, and optical
                                        frequency combs for ultra-precise dimensional metrology.
                                    </p>
                                    <button
                                        className="px-6 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                                        data-oid="bcd9ij4"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                                data-oid="97tnbcq"
                            >
                                <div
                                    className="bg-gray-100 h-80 rounded-lg"
                                    data-oid="1iirzw7"
                                ></div>
                                <div data-oid="x6p22j-">
                                    <h3
                                        className="text-2xl font-bold text-gray-900 mb-4"
                                        data-oid="3h09e3b"
                                    >
                                        Super-Resolution Optical Microscopy
                                    </h3>
                                    <p className="text-gray-700 mb-4" data-oid="sl-z:5:">
                                        Our research is advancing super-resolution optical
                                        microscopy techniques that break the diffraction limit,
                                        enabling optical imaging with nanometer-scale resolution for
                                        biological and materials science applications.
                                    </p>
                                    <p className="text-gray-700 mb-6" data-oid="d2r9o3t">
                                        We're developing novel fluorophores, adaptive optics
                                        systems, and computational algorithms that together push the
                                        boundaries of what can be visualized in living cells and
                                        complex materials.
                                    </p>
                                    <button
                                        className="px-6 py-2 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                                        data-oid="n2y_tor"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Team section */}
                {activeTab === 'team' && (
                    <div data-oid="l7qknv.">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8" data-oid="32m:tb3">
                            Our Team
                        </h2>

                        <div className="mb-16" data-oid="and3u33">
                            <h3
                                className="text-2xl font-bold text-gray-900 mb-6"
                                data-oid="6pve6is"
                            >
                                Leadership
                            </h3>
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                                data-oid="b-4hf05"
                            >
                                <div
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                    data-oid="zjrh5-_"
                                >
                                    <div className="h-64 bg-gray-200" data-oid="vt4r6j6"></div>
                                    <div className="p-6" data-oid="47h:zwq">
                                        <h4
                                            className="text-xl font-bold text-gray-900 mb-1"
                                            data-oid="v1e7o:w"
                                        >
                                            Prof. Sarah Chen
                                        </h4>
                                        <p
                                            className="text-[#d7153a] font-medium mb-3"
                                            data-oid="8q69.wp"
                                        >
                                            Director, Nanometrology Research Team
                                        </p>
                                        <p className="text-gray-700 mb-4" data-oid="169jqkw">
                                            Ph.D. in Applied Physics, MIT
                                        </p>
                                        <p className="text-gray-700" data-oid=".adheu6">
                                            Specializes in scanning probe microscopy and quantum
                                            metrology standards.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                    data-oid="vq10s85"
                                >
                                    <div className="h-64 bg-gray-200" data-oid="8m3xpyt"></div>
                                    <div className="p-6" data-oid="jv8--ne">
                                        <h4
                                            className="text-xl font-bold text-gray-900 mb-1"
                                            data-oid="i.jy2yv"
                                        >
                                            Prof. Michael Okonjo
                                        </h4>
                                        <p
                                            className="text-[#d7153a] font-medium mb-3"
                                            data-oid="ulcbsk4"
                                        >
                                            Deputy Director, Nanometrology Research Team
                                        </p>
                                        <p className="text-gray-700 mb-4" data-oid="yhrctb7">
                                            Ph.D. in Precision Engineering, Stanford University
                                        </p>
                                        <p className="text-gray-700" data-oid="-bmqar7">
                                            Expert in dimensional metrology and calibration
                                            standards.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                    data-oid="-ugzz_f"
                                >
                                    <div className="h-64 bg-gray-200" data-oid="e_2o6bl"></div>
                                    <div className="p-6" data-oid=":goihwy">
                                        <h4
                                            className="text-xl font-bold text-gray-900 mb-1"
                                            data-oid=".lbv-r_"
                                        >
                                            Dr. Emma Patel
                                        </h4>
                                        <p
                                            className="text-[#d7153a] font-medium mb-3"
                                            data-oid="2bzfz_i"
                                        >
                                            Research Program Manager
                                        </p>
                                        <p className="text-gray-700 mb-4" data-oid="jh2imud">
                                            Ph.D. in Optical Physics, University of Cambridge
                                        </p>
                                        <p className="text-gray-700" data-oid="ug:b41h">
                                            Specializes in super-resolution microscopy and optical
                                            metrology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-16" data-oid="_7a.dz9">
                            <h3
                                className="text-2xl font-bold text-gray-900 mb-6"
                                data-oid="b57ubh-"
                            >
                                Senior Researchers
                            </h3>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                                data-oid="_7y9rtu"
                            >
                                <div
                                    className="bg-white shadow-sm rounded-lg overflow-hidden"
                                    data-oid="n5wqmmt"
                                >
                                    <div className="h-48 bg-gray-200" data-oid="rwzt3z:"></div>
                                    <div className="p-4" data-oid="g68y0h5">
                                        <h4
                                            className="text-lg font-bold text-gray-900 mb-1"
                                            data-oid="wpe6ad7"
                                        >
                                            Dr. James Wilson
                                        </h4>
                                        <p
                                            className="text-[#d7153a] font-medium mb-2"
                                            data-oid="wfy6ol2"
                                        >
                                            Senior Research Fellow
                                        </p>
                                        <p className="text-sm text-gray-700" data-oid="7ja7i--">
                                            Electron microscopy metrology
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white shadow-sm rounded-lg overflow-hidden"
                                    data-oid="_opjxkg"
                                >
                                    <div className="h-48 bg-gray-200" data-oid="z.3csw6"></div>
                                    <div className="p-4" data-oid="7fzef54">
                                        <h4
                                            className="text-lg font-bold text-gray-900 mb-1"
                                            data-oid="q504_-c"
                                        >
                                            Dr. Aisha Rahman
                                        </h4>
                                        <p
                                            className="text-[#d7153a] font-medium mb-2"
                                            data-oid="41wxssy"
                                        >
                                            Senior Research Fellow
                                        </p>
                                        <p className="text-sm text-gray-700" data-oid="h2j1l6-">
                                            Nanoscale dimensional standards
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white shadow-sm rounded-lg overflow-hidden"
                                    data-oid="mcsfgyh"
                                >
                                    <div className="h-48 bg-gray-200" data-oid="00ee.70"></div>
                                    <div className="p-4" data-oid="w::wsj7">
                                        <h4
                                            className="text-lg font-bold text-gray-900 mb-1"
                                            data-oid="w0xj_lt"
                                        >
                                            Dr. David Kim
                                        </h4>
                                        <p
                                            className="text-[#d7153a] font-medium mb-2"
                                            data-oid="2s:ngow"
                                        >
                                            Senior Research Fellow
                                        </p>
                                        <p className="text-sm text-gray-700" data-oid="paes58c">
                                            Quantum sensing and metrology
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white shadow-sm rounded-lg overflow-hidden"
                                    data-oid="jhl2k1p"
                                >
                                    <div className="h-48 bg-gray-200" data-oid="cph72d:"></div>
                                    <div className="p-4" data-oid="jtcc8nz">
                                        <h4
                                            className="text-lg font-bold text-gray-900 mb-1"
                                            data-oid="zu9ao7-"
                                        >
                                            Dr. Maria Rodriguez
                                        </h4>
                                        <p
                                            className="text-[#d7153a] font-medium mb-2"
                                            data-oid="3_m_7v4"
                                        >
                                            Senior Research Fellow
                                        </p>
                                        <p className="text-sm text-gray-700" data-oid="otd:0:8">
                                            Computational nanometrology
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-oid="rjs6r5n">
                            <h3
                                className="text-2xl font-bold text-gray-900 mb-6"
                                data-oid="a4x7v7s"
                            >
                                PhD Students & Postdoctoral Researchers
                            </h3>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                                data-oid="-9qtq1r"
                            >
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="bg-white shadow-sm rounded-lg overflow-hidden"
                                        data-oid="aj7kxe_"
                                    >
                                        <div className="h-48 bg-gray-200" data-oid="ki6eyr6"></div>
                                        <div className="p-4" data-oid="rrj.a0q">
                                            <h4
                                                className="text-lg font-bold text-gray-900 mb-1"
                                                data-oid="..7krpx"
                                            >
                                                Researcher Name
                                            </h4>
                                            <p
                                                className="text-[#d7153a] font-medium mb-2"
                                                data-oid="3u6thod"
                                            >
                                                PhD Candidate / Postdoc
                                            </p>
                                            <p className="text-sm text-gray-700" data-oid="0_:c17i">
                                                Research focus area
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Publications section */}
                {activeTab === 'publications' && (
                    <div data-oid="aza1jio">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8" data-oid="yt8h:wh">
                            Publications
                        </h2>

                        <div className="mb-12" data-oid="ip5544a">
                            <h3
                                className="text-2xl font-bold text-gray-900 mb-6"
                                data-oid="tov5h66"
                            >
                                Featured Publications
                            </h3>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                data-oid="ciy05sx"
                            >
                                <div
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                    data-oid="nco1in5"
                                >
                                    <div className="p-6" data-oid="xkat8-4">
                                        <h4
                                            className="text-xl font-bold text-gray-900 mb-3"
                                            data-oid="vfmtt0w"
                                        >
                                            Traceable Atomic Force Microscopy for Dimensional
                                            Nanometrology in Advanced Semiconductor Manufacturing
                                        </h4>
                                        <p className="text-gray-700 mb-4" data-oid="oa:lt4w">
                                            Chen S., Wilson J., Patel E., et al.
                                        </p>
                                        <p
                                            className="text-[#d7153a] font-medium mb-4"
                                            data-oid="4uaaaa7"
                                        >
                                            Metrologia, 2023
                                        </p>
                                        <p className="text-gray-700 mb-4" data-oid="9sn5l8r">
                                            This paper describes a novel calibration framework for
                                            atomic force microscopy that achieves sub-nanometer
                                            measurement uncertainty, critical for next-generation
                                            semiconductor process control.
                                        </p>
                                        <button
                                            className="px-4 py-2 border border-[#d7153a] text-[#d7153a] rounded-md hover:bg-[#d7153a] hover:text-white transition-colors"
                                            data-oid="s4dpql0"
                                        >
                                            Read Paper
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                    data-oid="ydbnyfs"
                                >
                                    <div className="p-6" data-oid="gz68u0b">
                                        <h4
                                            className="text-xl font-bold text-gray-900 mb-3"
                                            data-oid="9lqwnlf"
                                        >
                                            Quantum-Enhanced Super-Resolution Microscopy: Breaking
                                            the 10nm Optical Resolution Barrier
                                        </h4>
                                        <p className="text-gray-700 mb-4" data-oid="wgiczft">
                                            Okonjo M., Rodriguez M., Rahman A., et al.
                                        </p>
                                        <p
                                            className="text-[#d7153a] font-medium mb-4"
                                            data-oid="-tfoqbw"
                                        >
                                            Nature Methods, 2022
                                        </p>
                                        <p className="text-gray-700 mb-4" data-oid="4c5gv4o">
                                            This research presents a breakthrough in optical
                                            microscopy using quantum-correlated photon pairs to
                                            achieve unprecedented spatial resolution while
                                            maintaining high measurement precision and
                                            reproducibility.
                                        </p>
                                        <button
                                            className="px-4 py-2 border border-[#d7153a] text-[#d7153a] rounded-md hover:bg-[#d7153a] hover:text-white transition-colors"
                                            data-oid="j9gl8n_"
                                        >
                                            Read Paper
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-oid="kjoa:at">
                            <h3
                                className="text-2xl font-bold text-gray-900 mb-6"
                                data-oid="16m-cpb"
                            >
                                Recent Publications
                            </h3>
                            <div className="space-y-6" data-oid="axi:d13">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="bg-white shadow-sm rounded-lg p-6"
                                        data-oid="nplzw6v"
                                    >
                                        <h4
                                            className="text-lg font-bold text-gray-900 mb-2"
                                            data-oid="0rygyg7"
                                        >
                                            Publication Title Goes Here
                                        </h4>
                                        <p className="text-gray-700 mb-2" data-oid="tw46xb-">
                                            Authors: [List of authors]
                                        </p>
                                        <p className="text-[#d7153a] mb-2" data-oid="m12iu0r">
                                            Journal Name, Year
                                        </p>
                                        <p className="text-gray-700 mb-4" data-oid="rvx_jam">
                                            Brief description of the publication and its
                                            significance in the field of nanoengineering.
                                        </p>
                                        <div className="flex space-x-4" data-oid="gxi2.e5">
                                            <button
                                                className="text-[#d7153a] hover:underline"
                                                data-oid="ssj06aa"
                                            >
                                                Read Abstract
                                            </button>
                                            <button
                                                className="text-[#d7153a] hover:underline"
                                                data-oid=".7pgnet"
                                            >
                                                Download PDF
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 text-center" data-oid="o3hblc8">
                                <button
                                    className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
                                    data-oid="zgynpua"
                                >
                                    View All Publications
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Contact section */}
                {activeTab === 'contact' && (
                    <div data-oid="7jbu.zl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8" data-oid="6em72-c">
                            Contact Us
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-oid="6-zcji9">
                            <div data-oid="l91-qo0">
                                <h3
                                    className="text-2xl font-bold text-gray-900 mb-6"
                                    data-oid="wh-ki9p"
                                >
                                    Get in Touch
                                </h3>
                                <p className="text-gray-700 mb-8" data-oid="i2a8xd2">
                                    We welcome inquiries from potential collaborators, students
                                    interested in joining our team, and industry partners looking to
                                    leverage our expertise in nanoengineering.
                                </p>

                                <div className="space-y-6" data-oid="3nf0:w5">
                                    <div className="flex items-start" data-oid="9zay4p4">
                                        <svg
                                            className="h-6 w-6 text-[#d7153a] mr-3 mt-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=":to:doi"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                data-oid="3upqifl"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                data-oid="oxziimi"
                                            />
                                        </svg>
                                        <div data-oid="cjbg6i5">
                                            <h4
                                                className="text-lg font-bold text-gray-900 mb-1"
                                                data-oid="e_3k9wi"
                                            >
                                                Address
                                            </h4>
                                            <p className="text-gray-700" data-oid=":qk.v2-">
                                                Nanometrology Research Team
                                                <br data-oid="34j36-f" />
                                                School of Physics and Metrology
                                                <br data-oid="z5i2-uj" />
                                                The University of Sydney
                                                <br data-oid="80uv7hh" />
                                                Sydney, NSW 2006, Australia
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start" data-oid="-f7t6cj">
                                        <svg
                                            className="h-6 w-6 text-[#d7153a] mr-3 mt-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="lwpwbcf"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="u8wijdn"
                                            />
                                        </svg>
                                        <div data-oid="ldm5qlb">
                                            <h4
                                                className="text-lg font-bold text-gray-900 mb-1"
                                                data-oid="yq08qb5"
                                            >
                                                Email
                                            </h4>
                                            <p className="text-gray-700" data-oid="gqw5zyf">
                                                nanometrology@sydney.edu.au
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start" data-oid="pzbydti">
                                        <svg
                                            className="h-6 w-6 text-[#d7153a] mr-3 mt-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="bhv3sns"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="pg9o5my"
                                            />
                                        </svg>
                                        <div data-oid="er111sp">
                                            <h4
                                                className="text-lg font-bold text-gray-900 mb-1"
                                                data-oid=".rkg.hg"
                                            >
                                                Phone
                                            </h4>
                                            <p className="text-gray-700" data-oid="94ng0kc">
                                                +61 2 9351 XXXX
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-oid="c0bhhfj">
                                <h3
                                    className="text-2xl font-bold text-gray-900 mb-6"
                                    data-oid="172h2f3"
                                >
                                    Send a Message
                                </h3>
                                <form className="space-y-6" data-oid="yvs4t:6">
                                    <div data-oid="wwqag:8">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="5wj361e"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                            data-oid="9pyk752"
                                        />
                                    </div>
                                    <div data-oid="56aespl">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="l0.ghsj"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                            data-oid="fg7gv62"
                                        />
                                    </div>
                                    <div data-oid=":6pv8vv">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="5bcdb_1"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                            data-oid="3konbug"
                                        />
                                    </div>
                                    <div data-oid="umodd9u">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="iu_7kp7"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#d7153a] focus:border-[#d7153a]"
                                            data-oid="_3ycgn8"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-[#d7153a] text-white rounded-md hover:bg-[#b01232] transition-colors"
                                        data-oid="t-ikpoj"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white" data-oid="fl2tjsi">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="cuv1h47">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="xzeimk-">
                        <div className="col-span-1 md:col-span-2" data-oid="cld6kq7">
                            <h2 className="text-xl font-bold mb-4" data-oid="u3fcxyc">
                                University of Sydney
                            </h2>
                            <h3 className="text-lg mb-4" data-oid="d00rhe7">
                                Nanometrology Research Team
                            </h3>
                            <p className="text-gray-400 mb-6" data-oid="1gt2nds">
                                Advancing precision measurement at the nanoscale.
                            </p>
                            <div className="flex space-x-4" data-oid="zpjf_2j">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="c-gs:vp"
                                >
                                    <span className="sr-only" data-oid="pxwk73k">
                                        Twitter
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="l3uib1k"
                                    >
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            data-oid="r-wnqpq"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="xvyrtlf"
                                >
                                    <span className="sr-only" data-oid="xwfl3qa">
                                        LinkedIn
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="f37_akm"
                                    >
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            data-oid="oqjumxa"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="s3m4iu4"
                                >
                                    <span className="sr-only" data-oid="0y7v847">
                                        YouTube
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="umr2txs"
                                    >
                                        <path
                                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                            data-oid="i.i4uu_"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div data-oid="mtk970a">
                            <h3 className="text-lg font-bold mb-4" data-oid="6qm:el-">
                                Quick Links
                            </h3>
                            <ul className="space-y-2" data-oid="_g1u2fc">
                                <li data-oid="-cznf_q">
                                    <button
                                        onClick={() => setActiveTab('about')}
                                        className="text-gray-400 hover:text-white"
                                        data-oid="6b8.ewo"
                                    >
                                        About Us
                                    </button>
                                </li>
                                <li data-oid="ahuzgqr">
                                    <button
                                        onClick={() => setActiveTab('research')}
                                        className="text-gray-400 hover:text-white"
                                        data-oid="0h_avl8"
                                    >
                                        Research
                                    </button>
                                </li>
                                <li data-oid="dntc-.s">
                                    <button
                                        onClick={() => setActiveTab('team')}
                                        className="text-gray-400 hover:text-white"
                                        data-oid="2izihh8"
                                    >
                                        Our Team
                                    </button>
                                </li>
                                <li data-oid="l:ld9ng">
                                    <button
                                        onClick={() => setActiveTab('publications')}
                                        className="text-gray-400 hover:text-white"
                                        data-oid="mc-4os6"
                                    >
                                        Publications
                                    </button>
                                </li>
                                <li data-oid="tvx0e9s">
                                    <button
                                        onClick={() => setActiveTab('contact')}
                                        className="text-gray-400 hover:text-white"
                                        data-oid="wh268eo"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="i6bmtyn">
                            <h3 className="text-lg font-bold mb-4" data-oid="g.0hsp9">
                                Resources
                            </h3>
                            <ul className="space-y-2" data-oid="8r6dy-d">
                                <li data-oid="rf2d800">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="1:dm2od"
                                    >
                                        University of Sydney
                                    </a>
                                </li>
                                <li data-oid="nzk4bbz">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="-n4v5ic"
                                    >
                                        Faculty of Engineering
                                    </a>
                                </li>
                                <li data-oid="kmyg91m">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid=":cepwvd"
                                    >
                                        Research Opportunities
                                    </a>
                                </li>
                                <li data-oid="ir-.h1c">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="2962:ei"
                                    >
                                        Student Resources
                                    </a>
                                </li>
                                <li data-oid="7tkpjfh">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="2w79fau"
                                    >
                                        News & Events
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                        data-oid="uethp9g"
                    >
                        <p data-oid="_7eozp2">
                            © {new Date().getFullYear()} University of Sydney Nanoengineering
                            Research Team. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
