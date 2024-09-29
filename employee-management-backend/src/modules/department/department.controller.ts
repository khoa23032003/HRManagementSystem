import { Controller, Get, Post, Body, Param,Put,Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(@Body() departmentData: any) {
    return this.departmentService.create(departmentData);
  }

  @Get()
  async findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.departmentService.findOne(id);
  }
  @Put(':id') // Phương thức để sửa thông tin phòng ban
  async update(@Param('id') id: string, @Body() departmentData: any) {
    return this.departmentService.update(id, departmentData);
  }

  @Delete(':id') // Phương thức để xóa phòng ban
  async remove(@Param('id') id: string) {
    return this.departmentService.remove(id);
  }
}
