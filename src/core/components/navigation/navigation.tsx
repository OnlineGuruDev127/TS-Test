import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { NavItem } from '../../interfaces';

interface Props {
  navItems: NavItem[];
}

const Stack = createNativeStackNavigator();

export const Navigation = (props: Props) : JSX.Element => {
  const { navItems } = props;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {navItems.map((navItem) => (
          <Stack.Screen  name={navItem.name} component={navItem.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}