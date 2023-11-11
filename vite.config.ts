import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// NOTE: Declaring '__dirname' to avoid TypeScript errors
declare const __dirname: string;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      config: `${path.resolve(__dirname, './src/config/')}`,
      enums: `${path.resolve(__dirname, './src/config/enums')}`,
      constants: `${path.resolve(__dirname, './src/config/constants/')}`,

      components: `${path.resolve(__dirname, './src/components')}`,
      assets: `${path.resolve(__dirname, './src/assets')}`,
      styles: `${path.resolve(__dirname, './src/assets/styles')}`,

      layouts: `${path.resolve(__dirname, './src/layouts')}`,
      pages: `${path.resolve(__dirname, './src/pages')}`,

      hooks: `${path.resolve(__dirname, './src/hooks')}`,
      features: `${path.resolve(__dirname, './src/features')}`,

      interfaces: `${path.resolve(__dirname, './src/types/interfaces')}`,
      models: `${path.resolve(__dirname, './src/types/models')}`,

      api: `${path.resolve(__dirname, './src/api')}`,

      utils: `${path.resolve(__dirname, './src/utils')}`,
    },
  },
});
