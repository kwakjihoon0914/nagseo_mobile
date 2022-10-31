import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { EdgeInsetsProps } from './EdgeInsets';
import { ReactNode } from 'react';

interface ContainerProps {
  padding?: EdgeInsetsProps;
  margin?: EdgeInsetsProps;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Container = ({ padding, margin, children, style }: ContainerProps) => {
  return (
    <View
      style={[
        {
          marginLeft: margin?.left,
          marginRight: margin?.right,
          marginTop: margin?.top,
          marginBottom: margin?.bottom,

          paddingLeft: padding?.left,
          paddingRight: padding?.right,
          paddingTop: padding?.top,
          paddingBottom: padding?.bottom,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Container;
