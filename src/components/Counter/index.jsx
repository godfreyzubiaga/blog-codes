import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	text-align: center;
`;

const Component = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <StyledDiv>
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button type="button" onClick={increment}>
					Increment +
        </button>
        <button type="button" onClick={decrement}>
					Decrement -
        </button>
      </div>
    </StyledDiv>
  );
};

export default Component;
