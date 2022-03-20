import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);

  const Icon = visible ? (
    <IoMdEye onClick={() => setVisibility(!visible)} />
  ) : (
    <IoMdEyeOff onClick={() => setVisibility(!visible)} />
  );
  const InputType = visible ? 'text' : 'password';

  return [InputType, Icon];
};

export default usePasswordToggle;
