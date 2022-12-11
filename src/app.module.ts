import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasketsModule } from './basket/baskets.module';
import { ProductsModule } from './products/products.module';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'market',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([
            ProductsModule,
            BasketsModule
        ]),
        ProductsModule,
        BasketsModule],
    controllers: [],
    providers: [],
})
export class AppModule { }
