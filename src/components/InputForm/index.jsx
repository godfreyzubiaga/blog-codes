import React from 'react';
import styled from 'styled-components';
import useFormInput from './customHooks/useFormInput';

const StyledDiv = styled.div`
	text-align: center;
`;

const InputForm = () => {
  const name = useFormInput('');
  const age = useFormInput(0);

  return (
    <StyledDiv>
      <div>
        <div>
          <p>Name</p>
          <input autoComplete="off" type="text" name="name" id="name" {...name} />
        </div>
        <div>
          <p>Age</p>
          <input autoComplete="off" type="number" name="age" id="age" {...age} />
        </div>
      </div>
      <br />
      <h3>Name: {name.value}</h3>
      <h3>Age: {age.value}</h3>
    </StyledDiv>
  );
};

export default InputForm;
