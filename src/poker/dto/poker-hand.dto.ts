import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class PokerHandDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  hand: string;
}
