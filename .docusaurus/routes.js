import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ae3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '265'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ec6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '111'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '5bc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a73'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '2ea'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f8f'),
    routes: [
      {
        path: '/docs/category/rams',
        component: ComponentCreator('/docs/category/rams', '4a9'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/RAMS/Central Hall',
        component: ComponentCreator('/docs/RAMS/Central Hall', 'c9c'),
        exact: true,
        sidebar: "docsSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a9a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
