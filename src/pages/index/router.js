import asyncComponent from '@/units/AsyncComponent';
export default {
    path: '/',
    exact: true,
    component: asyncComponent(() => import('./index'))
};
