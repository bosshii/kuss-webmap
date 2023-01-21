// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

const pwaOptions = {
  strategies: 'generateSW',
  registerType: 'prompt',
  manifest: {
    name: 'KUSSウェブマップ',
    short_name: 'KUSSマップ',
    description: 'KUSSの校内地図をウェブアプリ化しました',
    icons: [
      {
          src: "app-icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
      },
      {
          src: "app-icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png"
      },
      {
          src: "app-icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: 'any maskable'
      },
      {
          src: "app-icons/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
          purpose: 'any maskable'
      }
    ],
    start_url: '/',
    display: 'standalone',
    background_color: '#BBDEFB',
    theme_color: '#40C4FF',
    lang: 'ja',
  },
  includeAssets: [],
  devOptions: {
    enabled: true,
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ 
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    VitePWA(pwaOptions),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
