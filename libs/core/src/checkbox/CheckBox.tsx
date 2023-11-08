import React from 'react';

import CheckBox from 'react-native-check-box';

type CheckboxProps = {
  checked: boolean;
  onChange: (isChecked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <CheckBox
      style={{ flex: 1 }}
      onClick={() => onChange(!checked)}
      isChecked={checked}
    />
  );
};
