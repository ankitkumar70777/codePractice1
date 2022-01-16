import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'ankitkumar',
  password: '#Aankit007',
  database: 'test',
  entities: [__dirname + '/project1/src/**/*.entity.ts'],
  synchronize: true,
};
