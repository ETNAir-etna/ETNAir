import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import './styles/index.css'
import App from './App'
import { ThemeModeProvider } from './themes/ThemeModeProvider';
import '@mui/material/styles';

import './i18n/i18n'
import { Box } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeModeProvider>
          <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
            <Suspense fallback={<div>Loading...</div>}>
              <App />
            </Suspense>
          </Box>
        </ThemeModeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
