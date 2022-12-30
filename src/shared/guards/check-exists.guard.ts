import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { DataSource, In } from 'typeorm';
import { ICheckExistsOptions } from '../interfaces/check-exists-options';
import { getMiddlewareIds } from '../helpers/get-middleware-ids';
import { IIdEntity } from '../interfaces/id-entity';

@Injectable()
export class CheckExistsGuard implements CanActivate {
  constructor(private reflector: Reflector, private dataSource: DataSource) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const options: ICheckExistsOptions<any> = this.reflector.get(
      'checkExists',
      context.getHandler(),
    );

    if (!options) {
      return true;
    }

    const repo = this.dataSource.getRepository(options.entity);

    const ids = getMiddlewareIds(context, options.options!);
    console.log(`ids: ${ids}`);

    if (ids.length > 0) {
      const found: IIdEntity[] = await repo.find({
        where: { id: In(ids) },
      });
      const notFound = ids.filter((id) => !found.map((f) => f.id).includes(id));
      if (notFound.length > 0) {
        throw new HttpException(
          `${options.entity.name}s with ids [${notFound.join(
            ', ',
          )}] do not exist`,
          HttpStatus.NOT_FOUND,
        );
      }
    }

    return true;
  }
}
