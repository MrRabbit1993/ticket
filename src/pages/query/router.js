import asyncComponent from '@/units/AsyncComponent';
export default {
    path: '/query',
    exact: true,
    component: asyncComponent(() => import('./index')),
};
