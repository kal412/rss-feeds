import { Application, Request, Response } from "express";
import rssFeedRoutes from "./rssFeedRoutes.js";

export default class Routes {
    
    constructor(app: Application) {
        app.get('/', (req: Request, res: Response) => {
            res.json({message: "API working"});
        });

        app.use('/rss', rssFeedRoutes);

        app.use((req: Request, res: Response) => {
            return res.status(404).json({ error: 'Not found' });
        });
    }
}