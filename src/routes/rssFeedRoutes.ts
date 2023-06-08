import { Router } from "express";
import RssFeedController from "../controllers/rssFeedController.js";

class RssFeedRoutes {
    router = Router();
    rssFeedController = new RssFeedController();

    constructor() {
        this.intializeRoutes(); 
    }

    intializeRoutes(){
        this.router.route('/:keyword').get(this.rssFeedController.index);
    }
}

export default new RssFeedRoutes().router;