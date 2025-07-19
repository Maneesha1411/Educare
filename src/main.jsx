import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';   // adjust if your App file is named differently
import './index.css';          // optional, if you're using Tailwind or custom styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
