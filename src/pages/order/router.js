import asyncComponent from '@/units/AsyncComponent';
import { lazy } from 'react';
export default {
    path: '/order',
    exact: true,
    component: asyncComponent(() => import('./index')),
};
