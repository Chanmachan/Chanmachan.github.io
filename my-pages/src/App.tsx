import React from 'react';
import HomePage from './home/HomePage';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    return (
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    );
}

export default App;
