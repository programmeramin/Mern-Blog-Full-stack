import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({

  server : {
     proxy : {
        "/api" : {
          target : "http://localhost:5050",
          secure : false,
          
        }
     }
  },

  plugins: [react(), tailwindcss(), flowbiteReact()],
});