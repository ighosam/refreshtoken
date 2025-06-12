import type { Core } from '@strapi/strapi';

const control = ({ strapi }: { strapi: Core.Strapi }) => ({
  hindex(ctx) {
    ctx.body = 'Welcome to strapi Mr. Osam'
      //.plugin('refreshtoken')
      // the name of the service file & the method.
     // .service('service')
     // .getWelcomeMessage();
  },
});

export default control;