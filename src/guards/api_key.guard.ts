import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    // Get X-API Key from request header
    const request = context.switchToHttp().getRequest();
    const x_api_key = request.header('X-API-KEY');

    if(x_api_key === '123456') {
      return true;
    }
    return false;
  }
}
