import { Injectable, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit, OnApplicationBootstrap,OnModuleDestroy, OnApplicationShutdown {
  getHello(): string {
    return 'api is running';
  }

  getUserName(): string {
    return 'John Doe';
  }

  onModuleInit() {
    console.log('Module initialized');
  }
  onApplicationBootstrap() {
    console.log('Application bootstrapped');
  }
  onModuleDestroy() {
    console.log('Module destroyed');
  }
  onApplicationShutdown() {
    console.log('Application shutdown');
  }
}
