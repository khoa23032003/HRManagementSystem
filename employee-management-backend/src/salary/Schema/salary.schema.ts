import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Salary extends Document {
  @Prop({ required: true })
  baseSalary: number;

  @Prop()
  allowance: number;

  @Prop({ default: Date.now })
  paymentDate: Date;
}

export const SalarySchema = SchemaFactory.createForClass(Salary);
