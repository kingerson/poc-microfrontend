const { NextFederationPlugin } = require('@module-federation/nextjs-mf')
/** @type {import('next').NextConfig} */

const remotes = isServer => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        'shell': `shell@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
        'product': `product@http://localhost:3001/_next/static/${location}/remoteEntry.js`
    }
}

const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'person',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './person': './src/pages/person/index.tsx',
                    './person-create': './src/pages/person/create/index.tsx',
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