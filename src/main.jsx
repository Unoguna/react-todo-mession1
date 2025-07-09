import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="max-w-xl mx-auto px-4 pt-20">
            <App />
        </div>
    </StrictMode>,
)
