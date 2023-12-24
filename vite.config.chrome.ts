import { defineConfig } from 'vite'
import webExtension from '@samrum/vite-plugin-web-extension'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { chromeManifest } from './manifest.chrome'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react(),
        webExtension({
            manifest: chromeManifest(),
        }),
    ],
    build: {
        minify: !isDev,
        sourcemap: isDev,
        target: 'chrome105',
        rollupOptions: {
            output: {
                dir: 'dist/browser-extension/chromium',
            },
        },
    },
})
