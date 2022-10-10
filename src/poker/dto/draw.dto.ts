import { ApiProperty } from '@nestjs/swagger';

interface handObject {
  value: string;
  suit: string;
  rank: number;
  label: string;
}
export class DrawCardRequestDto {
  @ApiProperty({
    type: [Object],
    description: '手札',
    example: [
      {
        value: '♣3',
        suit: '♣',
        rank: 3,
        label: '3',
      },
      {
        value: '♣7',
        suit: '♣',
        rank: 7,
        label: '7',
      },
      {
        value: '♣8',
        suit: '♣',
        rank: 8,
        label: '8',
      },
      {
        value: '♠K',
        suit: '♠',
        rank: 13,
        label: 'K',
      },
      {
        value: '♥6',
        suit: '♥',
        rank: 6,
        label: '6',
      },
    ],
  })
  hand: handObject[];
}
