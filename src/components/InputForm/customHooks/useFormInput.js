import { useState } from 'react';

export default (inititalValue) => {
  const [value, setValue] = useState(inititalValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};
