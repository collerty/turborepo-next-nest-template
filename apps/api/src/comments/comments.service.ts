import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {
  }

  create(createCommentDto: CreateCommentDto, authorId: number) {
    return this.prisma.comment.create({
      data: {
        ...createCommentDto,
        authorId: authorId,
      },
    });
  }

  findAll() {
    return this.prisma.comment.findMany();
  }

  findOne(id: number) {
    return this.prisma.comment.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comment.update({
      where: { id },
      data: { ...updateCommentDto },
    });
  }

  remove(id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }
}
