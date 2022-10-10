import { Controller, Get, HttpStatus } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('health-check')
@Controller({
  path: 'health-check',
})
export class HealthCheckController {
  @Get()
  @ApiOkResponse({ description: 'health-check is OK' })
  @ApiInternalServerErrorResponse()
  healthCheck() {
    return {
      statusCode: HttpStatus.OK,
      body: 'OK',
    };
  }
}
