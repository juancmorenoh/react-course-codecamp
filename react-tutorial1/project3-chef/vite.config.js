import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { //define was added to allow to use process.env
    "process.env.REACT_APP_HF_ACCESS_TOKEN" : JSON.stringify(process.env.REACT_APP_HF_ACCESS_TOKEN)
  }
})
