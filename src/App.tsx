import React from 'react';
import styled from 'styled-components';

import Calculator from './components/Calculator';
import './App.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #323232;
  height: 100vh;
`

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
