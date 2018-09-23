// @flow

import * as React from 'react';
import Translation from '_translations/Translation';

import Text from './Text';
import StyleSheet from './PlatformStyleSheet';

type Props = {|
  +length: number,
|};

export default function NullBoundary(props: Props) {
  const placeholder = '█'.repeat(props.length);
  return (
    <Text style={styleSheet.text}>
      <Translation passThrough={placeholder} />
    </Text>
  );
}

const styleSheet = StyleSheet.create({
  text: {
    color: '#ffe6e6',
  },
});
