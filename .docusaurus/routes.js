
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','666'),
  
  routes: [
{
  path: '/docs/technical-docs/index',
  component: ComponentCreator('/docs/technical-docs/index','bab'),
  exact: true,
},
{
  path: '/docs/user-docs/index',
  component: ComponentCreator('/docs/user-docs/index','553'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
