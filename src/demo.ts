import { add, capitalize, formatNumber, Logger, config, type LogLevel } from './index';

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));
console.log('format(ok):', formatNumber(123.456));

// Демонстрація помилки типів (закоментовано, щоб проходив typecheck):
// const bad = new Logger('verbose'); // Argument of type '"verbose"' is not assignable to parameter of type 'LogLevel'.

const logger = new Logger(config.LOG_LEVEL as LogLevel);
logger.info('Application started');
logger.debug('Extra debug info');