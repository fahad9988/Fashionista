import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";


ReactDOM.createRoot(document.getElementById('root')).render(
<ChakraProvider>
<BrowserRouter>
    <App />
  </BrowserRouter>
</ChakraProvider>
 
)
