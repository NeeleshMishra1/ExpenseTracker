import { Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const DropdownTravel = () => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={[
        { label: 'salary', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ]}
      useNativeAndroidPickerStyle
    >
        <Text>Travel</Text>
    </RNPickerSelect>
  );
};