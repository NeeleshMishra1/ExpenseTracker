import { useState } from 'react';
import { Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const Dropdown = () => {
    const [selectedTap, setSelectedTap] = useState("Salary");
  return (
    <RNPickerSelect
      onValueChange={(value) => setSelectedTap(value)}
      items={[
        { label: 'salary', value: 'salary' },
        { label: 'Investment', value: 'Investment' },
        { label: 'Bonus', value: 'hockey' },
        { label: 'salary', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ]}
      useNativeAndroidPickerStyle
    >
        <Text>{selectedTap}</Text>
    </RNPickerSelect>
  );
};