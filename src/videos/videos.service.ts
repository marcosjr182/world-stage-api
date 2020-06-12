import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Video } from './schemas/video.schema';
import { CreateVideoDto } from './dto/create-video.dto';

@Injectable()
export class VideosService {
  constructor(@InjectModel(Video.name) private model: Model<Video>) {}

  async create(createCatDto: CreateVideoDto): Promise<Video> {
    const createdCat = new this.model(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Video[]> {
    return this.model.find().exec();
  }
}
