import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Salary } from './schema/salary.schema';

@Injectable()
export class SalaryService {
  constructor(@InjectModel(Salary.name) private salaryModel: Model<Salary>) {}

  // Tạo lương mới
  async createSalary(salaryData: Salary): Promise<Salary> {
    const newSalary = new this.salaryModel(salaryData);
    return newSalary.save();
  }

  // Lấy danh sách tất cả lương
  async getSalaries(): Promise<Salary[]> {
    return this.salaryModel.find().exec();
  }

  // Cập nhật thông tin lương theo ID
  async updateSalary(id: string, salaryData: Salary): Promise<Salary | null> {
    return this.salaryModel
      .findByIdAndUpdate(id, salaryData, { new: true })
      .exec();
  }

  // Xóa lương theo ID
  // salary.service.ts
  async deleteSalary(id: string): Promise<Salary | null> {
    const deletedSalary = await this.salaryModel.findByIdAndDelete(id).exec();
    return deletedSalary; // Return the deleted salary document
  }

  async update(id: string, salaryData: Salary): Promise<Salary | null> {
    return this.salaryModel
      .findByIdAndUpdate(id, salaryData, { new: true })
      .exec();
  }
  async getSalaryById(id: string): Promise<Salary | null> {
    return this.salaryModel.findById(id).exec();
  }
}
