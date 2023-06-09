import { Router } from "express";
import RssFeedController from "../controllers/rssFeedController.js";
import { keywordValidator } from "../validators/keywordValidator.js";

class RssFeedRoutes {
    router = Router();
    rssFeedController = new RssFeedController();

    constructor() {
        this.intializeRoutes(); 
    }

    intializeRoutes(){
        this.router.route('/:keyword').get(keywordValidator,this.rssFeedController.index);
    }
}

export default new RssFeedRoutes().router;