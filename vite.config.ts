// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['proyectos.fireploy.online','all']
  }
});
