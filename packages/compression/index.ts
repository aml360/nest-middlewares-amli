import { Injectable, NestMiddleware } from '@nestjs/common';
import { CompressionOptions } from 'compression';
import compression = require('compression');

/**
 *
 * Compression middleware, before call consumer.apply() you have to configure the `CompressionMiddleware`
 *
 * Your AppModule should implement NestModule.
 * Here is an example:
 * ```
 * @Module({ ... })
 * export class AppModule implements NestModule {
 * configure(consumer: MiddlewareConsumer) {
 * //You have to call CompressionMiddleware.configure() before apply
 *		CompressionMiddleware.configure({ level: 8 });
 * //Then you can appy for your routes
 *	consumer.apply(FrontendMiddleware, CompressionMiddleware).forRoutes({ path: '**', method: RequestMethod.ALL });
 *	}
 *}
 * ```
 */
@Injectable()
export class CompressionMiddleware implements NestMiddleware {
  /**
   * This function had to be called before .apply()
   * @param opts The options for the middleware
   */
  public static configure(opts: CompressionOptions) {
    this.options = opts;
  }

  private static options: CompressionOptions;

  public use(req: any, res: any, next: any) {
    if (CompressionMiddleware.options) {
      compression(CompressionMiddleware.options)(req, res, next);
    } else {
      compression()(req, res, next);
    }
  }
}
