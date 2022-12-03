import { useState } from 'react';

export const useTextInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const reset = (): void => {
    setValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    reset,
    onChange,
  };
};
