import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VStack } from '@chakra-ui/react';
import Tasks from './components/Tasks';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VStack>
          <Tasks />
          <Counter />
        </VStack>
      </header>
    </div>
  );
}

export default App;
