# Nest Middlewares - Compression

This is the Nest Middleware wrapper around [compression](http://www.npmjs.com/package/compression).

## Installation

`@aml360/nestjs-compression` is available from NPM. You can install it with this command:

```sh
npm install @aml360/nestjs-compression
# OR
yarn add @aml360/nestjs-compression
```

## Usage

```ts
import { CompressionMiddleware } from '@aml360/nestjs-compression';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        CompressionMiddleware.configure({/* options as per helmet docs */ });
        consumer.apply(CompressionMiddleware).forRoutes( /* your routes as objects*/ );
    }
}
```
