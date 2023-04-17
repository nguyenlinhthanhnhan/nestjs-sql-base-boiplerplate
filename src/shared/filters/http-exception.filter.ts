import { Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: any, host: any) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception.getStatus();
    const message = exception.message || null;

    const body = {
      statusCode,
      innerException: undefined,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,

    };

    if (exception.response !== message) {
      body.innerException = exception.response;
    }

    if (statusCode == HttpStatus.INTERNAL_SERVER_ERROR) {
      let traceData: string;
      if (Object.keys(request.params).length > 0) traceData = request.params;
      else if (Object.keys(request.query).length > 0) traceData = request.query;
      else if (Object.keys(request.body).length > 0) traceData = request.body;

      this.logger.error(`Internal Server Error: ${JSON.stringify(traceData)}`);
    }

    response.status(statusCode).json(body);
  }
}