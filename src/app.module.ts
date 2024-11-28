import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [BookModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
