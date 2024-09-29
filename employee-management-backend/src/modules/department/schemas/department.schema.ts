import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Department extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  code: string; // Mã phòng ban
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
