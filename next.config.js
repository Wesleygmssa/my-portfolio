/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
        reactRemoveProperties: true,
    },
    experimental: {
        runtime: "nodejs",
        serverComponents: true,
    },
};

module.exports = nextConfig;
