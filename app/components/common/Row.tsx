import { ReactNode } from 'react';
import { View } from 'react-native';
import { AxisAlignment } from './AxisAlignment';

interface RowProps {
  reverse?: boolean;
  spacing?: number;
  mainAxisAlignment?: AxisAlignment;
  crossAxisAlignment?: AxisAlignment;
  children: ReactNode;
}

const Row = (props: RowProps) => {
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
          flexDirection: props.reverse ? 'row-reverse' : 'row',
          justifyContent: props.mainAxisAlignment,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

export default Row;
