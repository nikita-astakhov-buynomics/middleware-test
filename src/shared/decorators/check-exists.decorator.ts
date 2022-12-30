import { SetMetadata } from '@nestjs/common';
import { ICheckExistsOptions } from '../interfaces/check-exists-options';
import { IIdEntity } from '../interfaces/id-entity';

export const CheckExists = <T extends IIdEntity>(
  options: ICheckExistsOptions<T>,
) => {
  return SetMetadata('checkExists', options);
};
