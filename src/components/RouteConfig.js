import React from 'react';
import Anasayfa from './Pages/Anasayfa/Anasayfa';

export const routes = [
  {
    name: 'Anasayfa',
    path: '/',
    exact: true,
    component: Anasayfa,
    sidebar: () => <span>Anasayfa</span>,
    icon: 'flaticon-open-box',
  },
  {
    name: 'Rehber',
    path: '/Rehber',
    component: Anasayfa,
    sidebar: () => <span>Rehber</span>,
    icon: 'flaticon-network',
  },
  /* {
    name: 'Test',
    path: '/test',
    component: Test,
    sidebar: () => <span>Test</span>,
    icon: 'flaticon-layers',
  },
  {
    name: 'Yemek',
    path: '/yemek',
    component: Yemek,
    sidebar: () => <span>Yemek</span>,
    icon: 'flaticon-share',
  },
  {
    name: 'Test-Yeni',
    path: '/testyeni',
    component: TestYeni,
    sidebar: () => <span>Test Yeni</span>,
    icon: 'flaticon-share',
  },*/
];
