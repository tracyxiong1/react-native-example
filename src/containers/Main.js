import React from 'react';

import Home from './Home';
import Tabbar from '../components/Tabbar';

export default function Main() {
  const tabBarData = [
    { name: 'home', view: <Home /> },
    { name: 'facebook-square', view: <Home /> },
    { name: 'github', view: <Home /> },
    { name: 'rss', view: <Home /> },
  ];
  const defaultSelected = 'home';

  return <Tabbar items={tabBarData} defaultSelected={defaultSelected} />;
}
