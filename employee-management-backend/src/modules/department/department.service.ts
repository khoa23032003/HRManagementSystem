import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department } from 'src/modules/department/schemas/department.schema';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name) private departmentModel: Model<Department>,
  ) {}

  async create(departmentData: any): Promise<Department> {
    const newDepartment = new this.departmentModel(departmentData);
    return newDepartment.save();
  }

  async findAll(): Promise<Department[]> {
    return this.departmentModel.find().exec();
  }

  async findOne(id: string): Promise<Department> {
    return this.departmentModel.findById(id).exec();
  }
  //sửa
  async update(id: string, departmentData: any): Promise<Department> {
    const updatedDepartment = await this.departmentModel
      .findByIdAndUpdate(id, departmentData, { new: true })
      .exec();
    if (!updatedDepartment) {
      throw new NotFoundException(`Department with id ${id} not found`);
    }
    return updatedDepartment;
  }
  //xoá
  async remove(id: string): Promise<void> {
    const result = await this.departmentModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Department with id ${id} not found`);
    }
  }
}
