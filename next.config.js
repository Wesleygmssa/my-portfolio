/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
        reactRemoveProperties: true,
    },
    experimental: {
        serverComponents: true,
    },
};

module.exports = nextConfig;
