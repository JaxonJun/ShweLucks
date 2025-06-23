import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        news: resolve(__dirname, 'news.html'),
        events: resolve(__dirname, 'events.html'),
        apply: resolve(__dirname, 'apply.html')
      }
    }
  }
});
