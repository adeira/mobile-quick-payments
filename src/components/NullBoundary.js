// @flow

import * as React from 'react';

import Text from './typography/Text';
import StyleSheet from './stylesheet';

type Props = {|
  +length: number,
|};

export default function NullBoundary(props: Props) {
  const placeholder = '█'.repeat(props.length);
  return <Text style={styleSheet.text}>{placeholder}</Text>;
}

const styleSheet = StyleSheet.create({
  text: {
    color: '#ffe6e6',
  },
});
