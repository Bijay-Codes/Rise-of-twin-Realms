import { createRoot } from 'react-dom/client'
import { ProvideContext } from './context/app-context.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ProvideContext>
    <App />
  </ProvideContext>
)
