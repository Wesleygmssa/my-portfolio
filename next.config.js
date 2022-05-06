/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
        ssr: true,
        displayName: true,
        reactRemoveProperties: true,
    },
};

module.exports = nextConfig;
