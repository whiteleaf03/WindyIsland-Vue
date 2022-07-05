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
        port:8080,
        proxy: {
            '/api': {
                target: 'http://150.158.95.220:8081',
                changeOrigin: true,
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
