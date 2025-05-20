import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    async rewrites() {
        return [
            {
                source: '/files/:path*',
                destination: '/api/files/:path*'
            }
        ];
    },
};
export default nextConfig;
