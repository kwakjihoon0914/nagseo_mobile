import { EdgeInsetsProps } from './EdgeInsets';
import { View } from 'react-native';
import { ReactNode } from 'react';

interface MarginProps {
  margin: EdgeInsetsProps;
  children: ReactNode;
}

const Margin = (props: MarginProps) => {
  return (
    <View
      style={{
        marginLeft: props?.margin?.left,
        marginRight: props?.margin?.right,
        marginTop: props?.margin?.top,
        marginBottom: props?.margin?.bottom,
      }}
    >
      {props.children}
    </View>
  );
};

export default Margin;
