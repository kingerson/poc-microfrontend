const { NextFederationPlugin } = require('@module-federation/nextjs-mf')
/** @type {import('next').NextConfig} */

const remotes = isServer => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        'product': `product@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
        'person': `person@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    }
}

const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'shell',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './nav': './src/components/Navbar/index.tsx',
                    './home': './src/pages/index.tsx',
                    './pages-map': './pages-map.js',
                },
                remotes: remotes(options.isServer),
                shared: {},
                extraOptions: {
                    exposePages: true
                }
            })
        )

        return config;
    },
}

module.exports = nextConfig