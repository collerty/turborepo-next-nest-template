import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {
  }

  create(createCommentDto: CreateCommentDto, authorId: number) {
    const { content } = createCommentDto;
    return this.prisma.comment.create({
      data: {
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
    return this.prisma.comment.findMany(
      {
        include: {
          author: {
            select: {
              id: true,
              name: true,
              picture: true,
            }

          },
        },
      },
    );
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
