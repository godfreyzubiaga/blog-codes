import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

const StyledDiv = styled.div`
	text-align: center;
`;

const App = () => (
  <StyledDiv>
    <Counter />
  </StyledDiv>
);

export default App;
