import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema({
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  minimize: false,
})
export class Users {
  @Prop({
    required: true,
    type: String,
    // uppercase: true,
    trim: true,
    MinLength: [3],
    MaxLength: [14],
  })
  name: String;

  @Prop({
    required: true,
    type: Number,
    min: [18, 'age is too short'],
    max: [30, 'age is too large'],
  })
  age: Number;

  @Prop()
  email: String;

  @Prop()
  location: String;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
