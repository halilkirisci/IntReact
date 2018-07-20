import React from 'react';
import Anasayfa from './Pages/Anasayfa/Anasayfa';
import Rehber from './Pages/Rehber/Rehber';
import KurumsalDokuman from './Pages/Kurumsal/Kurumsal-Dokuman';
import KurumsalKimlik from './Pages/Kurumsal/Kurumsal-Kimlik';
import Yemek from './Pages/Yemek/Haftalik-Yemek';

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
    component: Rehber,
    sidebar: () => <span>Rehber</span>,
    icon: 'flaticon-network',
  },
  {
    name: 'Kurumsal Döküman',
    path: '/kdokuman',
    component: KurumsalDokuman,
    sidebar: () => <span>Kurumsal Döküman</span>,
    icon: 'flaticon-layers',
  },
  {
    name: 'Kurumsal Kimlik',
    path: '/kkimlik',
    component: KurumsalKimlik,
    sidebar: () => <span>Kurumsal Kimlik</span>,
    icon: 'flaticon-layers',
  },
  {
    name: 'Yemek Listesi',
    path: '/yemek',
    component: Yemek,
    sidebar: () => <span>Haftalık Yemek Listesi</span>,
    icon: 'flaticon-share',
  },
  /*{
    name: 'Test-Yeni',
    path: '/testyeni',
    component: TestYeni,
    sidebar: () => <span>Test Yeni</span>,
    icon: 'flaticon-share',
  },*/
];
