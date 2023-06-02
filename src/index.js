import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// react 17
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// react 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);