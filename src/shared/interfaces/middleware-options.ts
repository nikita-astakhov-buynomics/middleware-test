import { ParamTypes } from '../enums/param-types';

export interface IMiddlewareOptions {
  paramType?: ParamTypes;
  idKey?: string;
  isArray?: boolean;
}
