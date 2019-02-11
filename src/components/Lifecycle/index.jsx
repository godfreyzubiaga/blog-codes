import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	text-align: center;
`;

const Component = () => {
  const [mounted, setMounted] = useState(false);

  // use only one useEffect at a time.
  // comment out the other useEffect.

  // componentDidMount
  useEffect(() => {
    setMounted(true);
    console.log('Mounted');
    return () => {
      console.log('Unmounted');
      setMounted(false);
    };
  }, []); // [] should be passed

  return (
    <StyledDiv>
      <div>
        <h1>Mounted? {mounted && 'Yep'}</h1>
      </div>
    </StyledDiv>
  );
};

export default Component;
