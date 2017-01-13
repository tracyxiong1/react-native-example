import React from 'react';

import Home from './Home';
import Github from './Github';
import Facebook from './Facebook';
import Twitter from './Twitter';
import Tabbar from '../components/Tabbar';

export default function Main() {
  const tabBarData = [
    { name: 'home', view: <Home /> },
    { name: 'facebook-square', view: <Facebook /> },
    { name: 'github', view: <Github /> },
    { name: 'rss', view: <Twitter /> },
  ];
  const defaultSelected = 'home';

  return <Tabbar items={tabBarData} defaultSelected={defaultSelected} />;
}
