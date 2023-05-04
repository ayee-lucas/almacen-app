/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')


const nextConfig = {
  reactStrictMode: true,
}

module.exports = withVideos({
  images: {
    domains: [
      'cdn-icons-png.flaticon.com',
      'images.unsplash.com',
      'firebasestorage.googleapis.com',
    ]
  },
})
