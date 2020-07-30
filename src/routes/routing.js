import Dashboard from '../views/dashboard';

var ThemeRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'ti-loop',
    component: Dashboard,
  },
  {
    path: '/alert',
    name: 'Alerts',
    icon: 'mdi mdi-comment-processing-outline',
    component: Dashboard,
  },
  {
    path: '/badge',
    name: 'Badges',
    icon: 'mdi mdi-arrange-send-backward',
    component: Dashboard,
  },
  {
    path: '/button',
    name: 'Buttons',
    icon: 'mdi mdi-toggle-switch',
    component: Dashboard,
  },
  {
    path: '/card',
    name: 'Cards',
    icon: 'mdi mdi-credit-card-multiple',
    component: Dashboard,
  },
  {
    path: '/grid',
    name: 'Grid',
    icon: 'mdi mdi-apps',
    component: Dashboard,
  },
  {
    path: '/pagination',
    name: 'Pagination',
    icon: 'mdi mdi-priority-high',
    component: Dashboard,
  },
  {
    path: '/popover',
    name: 'Popover',
    icon: 'mdi mdi-pencil-circle',
    component: Dashboard,
  },
  {
    path: '/ui-components/tooltip',
    name: 'Toltips',
    icon: 'mdi mdi-image-filter-vintage',
    component: Dashboard,
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true },
];
export default ThemeRoutes;
