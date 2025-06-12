import type { Core } from '@strapi/strapi';
import contentType from './content-types/'
const register =  ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase
  
  strapi.contentType('plugin::users-permissions.user').attributes = {
    ...strapi.contentType('plugin::users-permissions.user').attributes,
    refreshToken: {
         type:'string',
         configurable:false
    }
  
  }
  
  }
  
 


 
    //await strapi.plugin('content-type-builder').service('builder').buildSchemas()
     





export default register;
