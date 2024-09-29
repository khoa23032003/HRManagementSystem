import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { SalaryService } from './salary.service';
import { Salary } from './schema/salary.schema';

@Controller('salary')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  // Tạo lương mới
  @Post()
  async createSalary(@Body() salaryData: Salary): Promise<Salary> {
    return this.salaryService.createSalary(salaryData);
  }

  // Lấy danh sách tất cả lương
  @Get()
  async getSalaries(): Promise<Salary[]> {
    return this.salaryService.getSalaries();
  }

  // Cập nhật thông tin lương theo ID
  @Put('edit/:id')
  async updateSalary(
    @Param('id') id: string,
    @Body() salaryData: Salary,
  ): Promise<Salary | null> {
    console.log('Received ID:', id); // In ra id để kiểm tra
    return this.salaryService.updateSalary(id, salaryData);
  }

  // Lấy lương theo ID
  @Get('detail/:id')
  async getSalaryById(@Param('id') id: string): Promise<Salary | null> {
    return this.salaryService.getSalaryById(id);
  }

  // Xóa lương theo ID
  // salary.controller.ts
  @Delete('delete/:id')
  async deleteSalary(@Param('id') id: string): Promise<Salary | null> {
    return this.salaryService.deleteSalary(id);
  }
}
