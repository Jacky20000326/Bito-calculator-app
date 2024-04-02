/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cloudflare-ipfs.com"],
        minimumCacheTTL: 60,
    }
};

export default nextConfig;
