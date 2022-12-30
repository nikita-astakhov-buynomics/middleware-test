import { IMiddlewareOptions } from './middleware-options';
import { IIdEntity } from './id-entity';

export interface ICheckExistsOptions<T extends IIdEntity> {
  entity: new () => T;
  options?: IMiddlewareOptions;
}
