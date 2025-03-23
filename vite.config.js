import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src', // Корневая папка проекта
  base: '/Nisa/',
  build: {
    outDir: '../dist', // Папка для собранного проекта
    emptyOutDir: true, // Очищать папку перед сборкой
    assetsDir: 'assets', // Папка для статических файлов (изображений, шрифтов и т.д.)
    minify: 'terser', // Минификация кода
    sourcemap: true, // Генерация sourcemaps для отладки
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'), // Точка входа
      },
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]', // Формат имен файлов
      },
    },
  },
});
