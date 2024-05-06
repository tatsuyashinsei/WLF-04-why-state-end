// main.tsx
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import PageTitle from './components/PageTitle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <PageTitle title="main" /> */}
    <App />
  </React.StrictMode>
);
