import { ReactNode } from 'react';
import { View } from 'react-native';
import { AxisAlignment } from './AxisAlignment';

interface ColumnProps {
  reverse?: boolean;
  spacing?: number;
  mainAxisAlignment?: AxisAlignment;
  crossAxisAlignment?: AxisAlignment;
  children: ReactNode;
}

const Column = (props: ColumnProps) => {
  return (
    <View
      style={{
        justifyContent: props.crossAxisAlignment,
      }}
    >
      <View
        style={{
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: props.reverse ? 'column-reverse' : 'column',
          justifyContent: props.mainAxisAlignment,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

export default Column;
