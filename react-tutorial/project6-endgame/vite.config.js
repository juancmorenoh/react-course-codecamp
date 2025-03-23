import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //Absolutly necessary to deply vite
  base: "/react-course-codecamp/react-tutorial/project6-endgame"
})
