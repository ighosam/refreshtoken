import type { Core } from '@strapi/strapi';
import contentType from './content-types/'
import refreshToken from './content-types/refresh-token';
const register =  ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase
  
  strapi.contentType('plugin::users-permissions.user').attributes = {
    ...strapi.contentType('plugin::users-permissions.user').attributes,
   
    //refreshToken: {
     //    type:'string',
     //    configurable:false
    //},
    
    "refresh_token":{
      "type":"relation",
      "relation":"oneToOne",
      "target": "plugin::refreshtoken.refreshtoken",
      "mappedBy":"refresh_token",
      'configurable':false
    },

   // ...refreshToken.schema.attributes
  }
  
  }
  
 


 
    //await strapi.plugin('content-type-builder').service('builder').buildSchemas()
     





export default register;
