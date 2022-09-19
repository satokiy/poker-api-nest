import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health-check')
@Controller('health-check')
export class HealthCheckController {
  @Get()
  @ApiResponse({ status: HttpStatus.OK })
  healthCheck() {
    return {
      statusCode: HttpStatus.OK,
      body: 'OK',
    };
  }
}
