import React, { useState } from 'react';
import styled from 'styled-components';
import Lifecycle from './Lifecycle';

const StyledDiv = styled.div`
	text-align: center;
`;

const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  const unMount = () => {
    setShowComponent(false);
  };

  const mount = () => {
    setShowComponent(true);
  };

  return (
    <StyledDiv>
      {showComponent && <Lifecycle />}
      <br />
      <button type="button" onClick={showComponent ? unMount : mount}>
        {showComponent ? 'Close' : 'Show'}
      </button>
    </StyledDiv>
  );
};

export default App;
