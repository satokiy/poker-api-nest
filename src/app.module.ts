import { Module } from '@nestjs/common';
import { PokerModule } from './poker/poker.module';
import { HealthCheckModule } from './health-check/health-check.module';

@Module({
  imports: [PokerModule, HealthCheckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
