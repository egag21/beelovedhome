import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import '../theme.css';
import '../styles/site-tokens.css';
import '../styles/utilities.css';
import '../ResumeSite.css';
import ComponentCatalog from './ComponentCatalog';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponentCatalog />
  </StrictMode>,
);
