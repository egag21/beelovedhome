import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import '../theme.css';
import WorkInProgress from '../components/WorkInProgress';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkInProgress />
  </StrictMode>,
);
