export default [
  {
    method: 'GET',
    path: '/',
    // name of the controller file & the method.
    handler: 'controller.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/task',
    // name of the controller file & the method.
    handler: 'control.hindex',
    config: {
      policies: [],
    },
  },
];
