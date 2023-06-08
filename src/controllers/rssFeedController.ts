import { singleErrorFormat } from "../errors/singleErrorFormat.js";
import { responseFormat } from "../format/responseFormat.js";
import RssFeedService from "../services/rssFeedService.js";
import { Request, Response } from "express";
import { transformRssFeed } from "../transformers/rssFeedTransformer.js";

export default class RssFeedController {
    constructor() {}

    async index( req: Request, res: Response ) {
        const { keyword } = req.params;

        try {
            const data = await RssFeedService.searchSection(keyword);
            
            if(data) {
                return res.status(200).send(responseFormat(transformRssFeed(data)));
            } else {
                return res.status(404).send(JSON.parse(singleErrorFormat({"param": "error", "mssg": "No data found"})));
            }
        } catch (error: any) {
            console.log(error);
            return res.status(422).send(JSON.parse(singleErrorFormat({"param": "error", "mssg": "Something went wrong"})));
        }
    }
}