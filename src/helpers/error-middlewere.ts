import { HttpException, HttpStatus } from '@nestjs/common';

const Default = 'Ocorreu um erro interno';

export class CustomError extends HttpException {
   constructor(
      status: HttpStatus,
      statusName: string,
      message: string = Default,
   ) {
      super(
         {
            message: message,
            error: statusName,
            statusCode: status,
         },
         status,
      );
   }
}

export class BadRequestError extends CustomError {
   constructor(message: string = Default) {
      super(HttpStatus.BAD_REQUEST, 'Bad Request', message);
   }
}

export class NotFoundError extends CustomError {
   constructor(message: string = Default) {
      super(HttpStatus.NOT_FOUND, 'Not Found', message);
   }
}

export class UnauthorizedError extends CustomError {
   constructor(message: string = Default) {
      super(HttpStatus.UNAUTHORIZED, 'Unauthorized', message);
   }
}

export class ForbiddenError extends CustomError {
   constructor(message: string = Default) {
      super(HttpStatus.FORBIDDEN, 'Forbidden', message);
   }
}

export class ConflictError extends CustomError {
   constructor(message: string = Default) {
      super(HttpStatus.CONFLICT, 'Conflict', message);
   }
}
