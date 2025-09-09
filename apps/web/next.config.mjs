/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ['@workspace/ui'],
  experimental: { externalDir: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' }, // Google profile pics
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' }, // GitHub
      { protocol: 'https', hostname: 'pbs.twimg.com' }, // Twitter/X
    ],
  },
};
export default config;