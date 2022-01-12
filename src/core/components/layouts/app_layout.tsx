import React from 'react';
import { View, StyleSheet } from 'react-native';
import TipProvider from 'react-native-tip';

interface Props {
  backgroundColor: string,
  children: JSX.Element[] | JSX.Element
}

export const AppLayout = (props: Props) : JSX.Element => {
  const { children, backgroundColor } = props;
  return <View style={[styles.container, { backgroundColor }]}>
    {children}
    <TipProvider />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})