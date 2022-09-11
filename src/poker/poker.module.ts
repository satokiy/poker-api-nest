import { Module } from '@nestjs/common';
import { PokerController } from './poker.controller';

@Module({
  controllers: [PokerController],
})
export class PokerModule {}
