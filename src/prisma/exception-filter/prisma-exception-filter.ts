import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter extends BaseExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';

        switch (exception.code) {
            case 'P2000':
                status = HttpStatus.BAD_REQUEST;
                message = `Required constraint violation for field '${exception.meta.target}'`;
                break;
            case 'P2001':
                status = HttpStatus.BAD_REQUEST;
                message = `Not null constraint violation for field '${exception.meta.target}'`;
                break;
            case 'P2002':
                status = HttpStatus.CONFLICT;
                message = `Duplicate value for field '${exception.meta.target}'`;
                break;
            case 'P2003':
                status = HttpStatus.BAD_REQUEST;
                message = `Related entity not found for field '${exception.meta.target}'`;
                break;
            case 'P2004':
                status = HttpStatus.BAD_REQUEST;
                message = `Check constraint violation for field '${exception.meta.target}'`;
                break;
            case 'P2005':
                status = HttpStatus.BAD_REQUEST;
                message = `Exclusion constraint violation for field '${exception.meta.target}'`;
                break;
            case 'P2006':
                status = HttpStatus.BAD_REQUEST;
                message = `Numeric value out of range for field '${exception.meta.target}'`;
                break;
            case 'P2007':
                status = HttpStatus.BAD_REQUEST;
                message = `String data, right truncated for field '${exception.meta.target}'`;
                break;
            case 'P2008':
                status = HttpStatus.BAD_REQUEST;
                message = `Datetime field overflow for field '${exception.meta.target}'`;
                break;
            case 'P2009':
                status = HttpStatus.BAD_REQUEST;
                message = `Invalid JSON data for field '${exception.meta.target}'`;
                break;
            case 'P2010':
                status = HttpStatus.BAD_REQUEST;
                message = `Invalid XML data for field '${exception.meta.target}'`;
                break;
            case 'P2011':
                status = HttpStatus.BAD_REQUEST;
                message = `Invalid binary data for field '${exception.meta.target}'`;
                break;
            default:
                break;
        }

        response.status(status).json({
            statusCode: status,
            message,
        });
    }
}
