import { ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { ParamTypes } from '../enums/param-types';
import { Request } from 'express';

export interface IMiddlewareOptions {
  paramType?: ParamTypes;
  idKey?: string;
  isArray?: boolean;
}

export const getMiddlewareIds = (
  context: ExecutionContext,
  { paramType, idKey, isArray }: IMiddlewareOptions,
): string[] => {
  if (!paramType) {
    paramType = ParamTypes.URL;
  }
  if (!idKey) {
    idKey = 'id';
  }

  const request: Request = context.switchToHttp().getRequest();

  let ids: string[] = [];
  if (isArray && paramType !== ParamTypes.URL) {
    ids = ids.concat(
      paramType === ParamTypes.BODY
        ? Array.isArray(request.body)
          ? (request.body as any).map((entity: any) => entity[idKey as string])
          : (request.body as any)[idKey as string]
        : request.query[idKey as string] !== undefined
        ? (request.query[idKey as string]! as string).split(',')
        : [],
    );
  } else if (!isArray) {
    ids = ids.concat(
      paramType === ParamTypes.BODY
        ? [request.body[idKey as string]]
        : [request.params[idKey as any]],
    );
  } else {
    throw new HttpException(
      `Middleware configuration error`,
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
  return ids.filter((id) => id !== undefined && id !== null);
};
