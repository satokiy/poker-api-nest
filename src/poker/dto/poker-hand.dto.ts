import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PokerHandDto {
  @ApiProperty({
    description: '手札',
  })
  @IsString()
  @IsNotEmpty()
  hand: string;
}
