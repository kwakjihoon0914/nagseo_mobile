import { View } from 'react-native';

interface SizedBoxProps {
  height?: number;
  width?: number;
  children?: number;
}

const SizedBox = ({ height, width, children }: SizedBoxProps) => {
  return <View style={{ height, width }}>{children}</View>;
};

export default SizedBox;
