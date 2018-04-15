// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  Icon,
  Colors,
  Touchable,
  StyleSheet,
} from 'mobile-quick-payments-shared';
import Translation from 'mobile-quick-payments-translations';

type Props = {|
  iconName: string,
  description: React.Element<typeof Translation>,
|};

const VoidCallback = () => {}; // FIXME

export default function SecondaryButton({ iconName, description }: Props) {
  return (
    <Touchable accessibilityComponentType="button" onPress={VoidCallback}>
      <View style={styleSheet.secondaryButton}>
        <Icon name={iconName} size={40} color={Colors.grey.$800} />
        <Text style={styleSheet.secondaryButtonText}>{description}</Text>
      </View>
    </Touchable>
  );
}

const styleSheet = StyleSheet.create({
  secondaryButton: {
    alignItems: 'center',
    padding: 5,
  },
  secondaryButtonText: {
    fontSize: 10,
    color: Colors.grey.$700,
  },
});
