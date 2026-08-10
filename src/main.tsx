import { createRoot } from 'react-dom/client'
import './styles/reveal-reset.css'
import './styles/reveal.css'
import './styles/index.css'
import './styles/slides.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)