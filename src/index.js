// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Zorg ervoor dat App wordt geïmporteerd

const root = document.getElementById('root');
if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App /> {/* Render de App component */}
        </React.StrictMode>
    );
}