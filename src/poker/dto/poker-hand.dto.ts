import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PokerHandDto {
  @ApiProperty({
    description: '手札',
    example: 'H1 H2 H3 H4 H5',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  hand: string;
}

export class PokerJudgeResponse {
  @ApiProperty({
    description: '手札',
    example: 'H1 H2 H3 H4 H5',
  })
  hand: string;

  @ApiProperty({
    description: 'カードリスト',
    example: ['H1', 'H2', 'H3', 'H4', 'H5'],
  })
  cardList: string[];

  @ApiProperty({
    description: '役',
    example: "STRAIGHT_FLASH",
  })
  role: string;
}
