import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    sitemap({
      hostname: 'https://mahmoudhamdi.dev',
      dynamicRoutes: ['/', '/about', '/Skills', '/Projects', '/Github', '/Contact'],
    }),
  ],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      "ulmaceous-satisfactionless-takisha.ngrok-free.dev"
    ]
  }
})
