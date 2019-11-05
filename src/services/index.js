import { logger } from './logger';
import { request } from './request';

export const loggedRequest = logger(request);
export { logger } from './logger';
export { httpMethods, request } from './request';
