import { TypeOrmModuleOptions } from '@nestjs/typeorm'
// import { environment } from '../environment/environment'


export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'mysql',
    host: process.env.DATABASE_IP,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    
}