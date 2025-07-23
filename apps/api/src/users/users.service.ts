import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from '../auth/dto/register.dto';
import { ProviderType, SocialTokens, User } from '@prisma/client';
import { Profile as GithubProfile } from 'passport-github2';
import { Profile as GoogleProfile } from 'passport-google-oauth20';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {
  }

  create(createUserDto: RegisterDto | CreateUserDto) {
    const { email, name, password } = createUserDto;
    return this.prisma.user.create({
      data:
        {
          email,
          name,
          password,
        },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  findManyByEmail(email: string) {
    return this.prisma.user.findMany({
      where: { email: email },
    });
  }

  async findCredentialsUserByEmail(email: string): Promise<User | null> {
    const users: User[] = await this.findManyByEmail(email);
    if (!users) {
      throw new NotFoundException(`No users with email ${email} found!`);
    }
    for (const user of users) {
      if (user.password) {
        return user;
      }
    }

    return null;
  }

  async findOrCreateUser(profile: GithubProfile | GoogleProfile, provider: ProviderType): Promise<SocialTokens | User> {
    console.log('find or create user');
    console.log(profile);
    console.log('DEBUG:', provider);
    const email = profile.emails?.[0].value;
    if (!email) {
      throw new Error('No email found in the user profile!');
    }
    const socialTokens = await this.findOneByProvider(profile.id, provider);
    console.log(socialTokens);
    if (!socialTokens) {
      switch (provider) {
        case ProviderType.GITHUB:
          return this.createGithubUser(profile as GithubProfile);
        case ProviderType.GOOGLE:
          return this.createGoogleUser(profile as GoogleProfile);
        default:
          throw new Error('Unsupported provider');
      }
    }

    return socialTokens;
  }

  findOneByProvider(providerUserId: string, provider: ProviderType) {
    return this.prisma.socialTokens.findUnique({
      where: {
        providerUserId: providerUserId,
        providerType: provider,
      },
    });
  }

  async createGoogleUser(profile: GoogleProfile) {
    console.log(`create google acc for ${profile.emails![0].value}`);

    return this.prisma.user.create({
      data: {
        email: profile.emails![0].value,
        name: null, // ask for it later
        socialTokens: {
          create: {
            providerUserId: profile.id,
            providerType: ProviderType.GOOGLE,
          },
        },
      },
    });
  }

  createGithubUser(profile: GithubProfile) {
    return this.prisma.user.create({
      data: {
        email: profile.emails![0].value,
        name: null, // ask for it later
        socialTokens: {
          create: {
            providerUserId: profile.id,
            providerType: ProviderType.GITHUB,
          },
        },
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    return this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
