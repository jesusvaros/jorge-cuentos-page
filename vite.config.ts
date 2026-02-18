import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        cuentos: "cuentos.html",
        fanzines: "fanzines.html",
        detail: "detail.html",
        sobreMi: "sobre-mi.html",
        proyectosActivos: "proyectos-activos.html",
        carteles: "carteles.html",
      },
    },
  },
});
