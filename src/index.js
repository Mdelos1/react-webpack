import React from "react";
import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
import '../public/style.scss'
const image = require('./app/images/logo.svg')
const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App/>);