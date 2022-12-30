import { BaseEntity } from 'typeorm'

export interface IIdEntity extends BaseEntity {
  id: string
}
