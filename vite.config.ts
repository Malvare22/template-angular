// vite.config.ts
import { defineConfig } from 'vite';
console.log(11111);
export default defineConfig({
  server: {
    host: 0.0.0.0,
    allowedHosts: ['proyectos.fireploy.online','all']
  }
});
