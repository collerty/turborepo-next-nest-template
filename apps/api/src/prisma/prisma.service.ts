import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const databaseUrl = process.env.DATABASE_URL;

    // Type checking for databaseUrl
    if (!databaseUrl) {
      throw new Error(
        'DATABASE_URL environment variable is not set. Please check your .env file.',
      );
    }

    const adapter = new PrismaPg({
      connectionString: databaseUrl,
      // You can add other pg.Pool options here if needed, e.g.:
      // max: 20, // set max number of clients in the pool
      // idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    });

    super({
      adapter: adapter,
      log: ['query', 'info', 'warn', 'error'], // Optional: for logging queries
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}