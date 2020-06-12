import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Video extends Document {
  @Prop()
  title: string;

  @Prop()
  artist: string;

  @Prop()
  country: string;

  @Prop()
  youtubeLink: string;

  @Prop()
  youtubeChannel: string;

  @Prop([String])
  tags: string[];

  @Prop()
  description: string;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
