import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        extensions: ['.vue', '.js']
    },
    base: "../",
    server: {
        open: true,
        port:3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                changeOrigin: true,
                rewrite: (path) =>path.replace(/^\/api/, ''),
            }
        }
    },
    preview: {
        port: 8080,
        open: true
    },
    build: {
        outDir: "blog-vue"
    }
})
