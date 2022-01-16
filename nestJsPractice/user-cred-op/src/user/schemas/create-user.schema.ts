import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import isEmail from 'validator/lib/isEmail';
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
    trim: true,
    MinLength: [3],
    MaxLength: [14],
  })
  name: string;

  @Prop({
    required: true,
    type: String,
    min: [18, 'age is too short'],
    max: [30, 'age is too large'],
  })
  age: string;

  @Prop({
    required: true,
    type: String,
    lowercase: true,
    unique: true,
    trim: true,
    MinLength: [2],
    MaxLength: [30],
    validate: [isEmail, 'Invalid email address'],
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   'Invalid email addresss',
    // ],
  })
  email: string;

  @Prop({
    type: String,
    trim: true,
    MinLength: [2],
    MaxLength: [20],
  })
  location: string;

  @Prop({
    type: [
      {
        type: String,
        lowercase: true,
        required: true,
        MinLength: [2],
        MaxLength: [15],
      },
    ],
  })
  hobbies: Array<any>;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
