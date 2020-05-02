/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { __awaiter } from "tslib";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield NestFactory.create(AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.port || 3333;
        yield app.listen(port, () => {
            console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();
//# sourceMappingURL=main.js.map