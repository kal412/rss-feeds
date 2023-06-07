import { Application } from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import Routes from './routes/index.js'

export default class Server {
    constructor(app: Application) {
        this.config(app);
        new Routes(app);
    }

    public config(app: Application): void {
        app.use(helmet());
        app.use(bodyParser.json({limit: '50mb'}));
        app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    }
}