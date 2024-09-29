import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './modules/employee/employee.module';
import { DepartmentModule } from './modules/department/department.module';
import { SalaryModule } from './salary/salary.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:123456@localhost:27017/employeeDB?authSource=admin',
    ),
    EmployeeModule,
    DepartmentModule,
    SalaryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
