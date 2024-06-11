// 'React' is not needed since this file does not use any React APIs directly

import ReactDOM from 'react-dom/client'
import App from "./App";
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
