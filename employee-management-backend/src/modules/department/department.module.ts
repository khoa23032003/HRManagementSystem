import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule nếu sử dụng MongoDB
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentSchema } from './schemas/department.schema'; // Import schema của bạn

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Department', schema: DepartmentSchema },
    ]), // Đăng ký model tại đây
  ],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
