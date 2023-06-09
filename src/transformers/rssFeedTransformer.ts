import { removeTags, convertToRssPubDay } from '../helpers/index.js';

export const transformRssFeed = (data: any) => {
    return transform(data);
};

const transform = (data: any) => {
    const items = [];
    const returnData: any = {
        header: {
            status: data.response.status ? data.response.status : null,
            usertier: data.response.userTier ? data.response.userTier : null,
            total: data.response.total ? data.response.total : 0
        }
    };
    for(const element of data.response.results) {
        items.push(rssFormat(element));
    }
    returnData['item'] = items? items: [];

    return returnData;
};

const rssFormat = (data: any) => { 
    const body = removeTags(data.fields.body);

    const returnData = {
        title: data.fields.headline ? data.fields.headline : null,
        description: body,
        link: data.webUrl ? data.webUrl : null,
        pubDate: data.webPublicationDate ? convertToRssPubDay(data.webPublicationDate) : null
    };

    return returnData;
};