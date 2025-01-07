import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { ThemeModeProvider } from './themes/ThemeModeProvider';
import '@mui/material/styles';
import { Box } from './components/muiComponents';
import './i18n/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeModeProvider>
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
        <App />
      </Box>
    </ThemeModeProvider>
  </StrictMode>,
)
