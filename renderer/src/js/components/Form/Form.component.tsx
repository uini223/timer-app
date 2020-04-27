import React, { Component, useState } from 'react';

export const Form = () => {
  const [value, setValue] = useState('');

  const onChange = (event: any) => {
    const { value } = event.target;
    setValue(value);
  };

  return (
    <form>
      <input type="text" value={value} onChange={onChange} />
    </form>
  );
};
