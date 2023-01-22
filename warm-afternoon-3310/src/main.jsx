import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";
import { store } from './redux/store';
import ScrollToTop from './components/Fahad_Components/ScrollToTop';
import App from "./App"


ReactDOM.createRoot(document.getElementById('root')).render(
<ChakraProvider>
  <Provider store={store} >
<BrowserRouter>
<ScrollToTop>
    <App />
    </ScrollToTop>
  </BrowserRouter>
  </Provider>
</ChakraProvider>
)
