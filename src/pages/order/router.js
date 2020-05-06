import asyncComponent from '@/units/AsyncComponent';
export default {
    path: '/order/:trainNumber/:departStation/:arriveStation/:type/:date',
    exact: true,
    component: asyncComponent(() => import('./index'))
};
