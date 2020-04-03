import asyncComponent from '@/units/AsyncComponent';
export default {
    path: '/ticket/:date',
    exact: true,
    component: asyncComponent(() => import('./index')),
};
