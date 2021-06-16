import React from 'react';
import styled from 'styled-components';

import Calculator from './components/Calculator';
import './App.css';

const Container = styled.div`
  align-items: center;
  background: #323232;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
