import { Module } from '@nestjs/common';
import { SetoranService } from './setoran.service';
import { SetoranController } from './setoran.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setoran } from './setoran.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Setoran])],
  providers: [SetoranService],
  controllers: [SetoranController],
})
export class SetoranModule {}
