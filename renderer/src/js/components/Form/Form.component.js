import React, { Component, useState } from 'react';

export const Form = (props) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  return (
    <form>
      <input type="text" value={value} onChange={onChange} />
    </form>
  );
};
