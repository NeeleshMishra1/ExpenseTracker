import { useState } from 'react';
import { Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const Dropdown = () => {
    const [selectedTap, setSelectedTap] = useState(0);
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
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
        <Text></Text>
    </RNPickerSelect>
  );
};