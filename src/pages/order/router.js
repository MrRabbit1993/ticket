import asyncComponent from '@/units/AsyncComponent';
export default {
    path: '/order',
    exact: true,
    component: asyncComponent(() => import('./index')),
};
