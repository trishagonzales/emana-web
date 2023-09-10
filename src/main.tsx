import '@fontsource-variable/inter';
import '@theme/globalStyles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from '@providers/index';
import RootRoutes from './RootRoutes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RootRoutes />
    </Providers>
  </React.StrictMode>
);
