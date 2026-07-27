import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import '../theme.css';
import Services from '../components/Services';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Services />
  </StrictMode>,
);
