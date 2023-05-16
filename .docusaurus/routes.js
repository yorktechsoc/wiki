import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '6bd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'ea3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f5b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c15'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '039'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '403'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'cec'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4cf'),
    routes: [
      {
        path: '/docs/category/rams',
        component: ComponentCreator('/docs/category/rams', 'cc5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/RAMS/Central Hall',
        component: ComponentCreator('/docs/RAMS/Central Hall', 'bdb'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2d5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
