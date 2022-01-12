import React from 'react';
import { Navigation } from './core/components';
import { NavItem } from './core/interfaces';
import { BoardScreen } from './modules/board';

const navItems: NavItem[] = [
  {
    name: 'board',
    title: 'Board',
    component: BoardScreen
  }
];

export const App = (): JSX.Element => {
  console.disableYellowBox = true;
  return <Navigation navItems={navItems} />;
};