import Server from './server.js';
import express, { Application } from 'express';
import { config } from './config/index.js';

export function bootstrap() {
    const app: Application = express();
    const server: Server = new Server(app);
    const port = Number(config.port);

    return app.listen(port, function () {
        console.info(`Express API running at port: ${port}`);
    }).on('error', (err: any) => {
        if (err.code === 'EADDRINUSE') {
            console.log('Server startup error: address already in use');
        } else {
            console.log(err);
        }
    });
}

if(process.env.NODE_ENV !== 'test') {
    bootstrap();
}