import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Employee extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  departmentId: string;

  @Prop({ required: true })
  salaryId: string;

  // @Prop()
  // avatarUrl?: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
