import { Module } from '@nestjs/common';
import { ProductModule } from './domains/product/product.module';

@Module({
  imports: [
    ProductModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [],
    //   synchronize: true,
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
