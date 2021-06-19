
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
  component: ComponentCreator('/docs','f74'),
  
  routes: [
{
  path: '/docs/technical-docs/index',
  component: ComponentCreator('/docs/technical-docs/index','bab'),
  exact: true,
},
{
  path: '/docs/user-docs/guides/google-guide',
  component: ComponentCreator('/docs/user-docs/guides/google-guide','414'),
  exact: true,
},
{
  path: '/docs/user-docs/guides/gravatar-guide',
  component: ComponentCreator('/docs/user-docs/guides/gravatar-guide','273'),
  exact: true,
},
{
  path: '/docs/user-docs/guides/index',
  component: ComponentCreator('/docs/user-docs/guides/index','4d6'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
