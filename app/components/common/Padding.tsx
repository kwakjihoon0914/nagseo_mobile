import { EdgeInsetsProps } from './EdgeInsets';
import { View } from 'react-native';
import { ReactNode } from 'react';

interface PaddingProps {
  padding: EdgeInsetsProps;
  children: ReactNode;
}

const Padding = (props: PaddingProps) => {
  return (
    <View
      style={{
        paddingLeft: props?.padding?.left,
        paddingRight: props?.padding?.right,
        paddingTop: props?.padding?.top,
        paddingBottom: props?.padding?.bottom,
      }}
    >
      {props.children}
    </View>
  );
};

export default Padding;
