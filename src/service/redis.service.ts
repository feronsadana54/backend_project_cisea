import { Injectable } from '@nestjs/common';
import * as redis from 'redis';

@Injectable()
export class RedisService {
  private client;

  constructor() {
    this.client = redis.createClient();
  }

  async addTokenToBlacklist(token: string, ttl: number) {
    return new Promise((resolve, reject) => {
      this.client.set(token, 'blacklisted', 'EX', ttl, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  }

  async isTokenBlacklisted(token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.client.get(token, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result === 'blacklisted');
      });
    });
  }
}
