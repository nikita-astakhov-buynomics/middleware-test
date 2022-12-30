import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IIdEntity } from '../../../shared/interfaces/id-entity';

@Entity()
export class Product extends BaseEntity implements IIdEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
