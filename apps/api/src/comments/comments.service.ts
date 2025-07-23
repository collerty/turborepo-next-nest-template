import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {
  }

  create(createCommentDto: CreateCommentDto, authorId: number) {
    const { title, content } = createCommentDto;
    return this.prisma.comment.create({
      data: {
        title,
        content,
        author: {
          connect: {
            id: authorId,
          },
        },
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
