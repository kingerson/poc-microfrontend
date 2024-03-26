const { NextFederationPlugin } = require('@module-federation/nextjs-mf')
/** @type {import('next').NextConfig} */

const remotes = isServer => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        'shell': `shell@http://localhost:3000/_next/static/${location}/remoteEntry.js`
    }
}

const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'product',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './product': './src/pages/product/index.tsx',
                    './product-create': './src/pages/product/create/index.tsx',
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