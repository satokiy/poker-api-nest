import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PokerJudgeRequestDto {
  @ApiProperty({
    type: String,
    description: '手札',
    example: '♠1 ♠2 ♠3 ♠4 ♠5',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  hand: string;
}

export class PokerJudgeResponse {
  @ApiProperty({
    type: String,
    description: '手札',
    example: '♠1 ♠2 ♠3 ♠4 ♠5',
  })
  hand: string;

  @ApiProperty({
    type: [String],
    description: 'カードリスト',
    example: ['♠1', '♠2', '♠3', '♠4', '♠5'],
  })
  cardList: string[];

  @ApiProperty({
    enum: [
      'STRAIGHT_FLASH',
      'FLASH',
      'STRAIGHT',
      'ONE_PAIR',
      'TWO_PAIR',
      'THREE_CARD',
      'FOUR_CARD',
      'FULL_HOUSE',
      'NO_ROLE',
    ],
    description: '役',
    example: 'STRAIGHT_FLASH',
  })
  role: string;
}
