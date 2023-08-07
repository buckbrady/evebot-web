import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import progress from 'vite-plugin-progress'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    progress(),
    tsconfigPaths(),
    react(),
    webUpdateNotice({
      logVersion: true,
      locale: 'en_US',
      localeData: {
        en_US: {
          title: '📢 System Update',
          description: 'System update, please refresh the page',
          buttonText: 'Refresh',
          dismissButtonText: 'Dismiss'
        }
      }
    })
  ]
})
