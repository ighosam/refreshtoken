/**
 * Application methods
 */
import bootstrap from './bootstrap';
import destroy from './destroy';
import register from './register';

/**
 * Plugin server methods
 */
import config from './config';
import contentTypes from './content-types';
import controllers from './controllers';
import middlewares from './middlewares';
import policies from './policies';
import routes from './routes';
import services from './services';
import control from './controllers/control'

export default {
  register,
  bootstrap,
  destroy,
  config,
  controllers,
  //control,
  routes,
  services,
  contentTypes,
  policies,
  middlewares,
};
