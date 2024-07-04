import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { environment } from '../environment/environment'


export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'mysql',
    host: environment.DATABASE_IP,
    port: environment.DATABASE_PORT,
    username: environment.DATABASE_USERNAME,
    password: environment.DATABASE_PASSWORD,
    database: environment.DATABASE_DB_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: environment.SYNCHRONIZE,
    
}