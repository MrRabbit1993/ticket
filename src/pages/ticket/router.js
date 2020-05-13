import asyncComponent from '@/units/AsyncComponent';
export default {
    path: '/ticket/:date/:aStation/:dStation/:trainNumber',
    exact: true,
    component: asyncComponent(() => import('./index'))
};
