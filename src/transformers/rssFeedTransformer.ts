import { removeTags, convertToRssPubDay } from '../helpers/index.js'

export const transformRssFeed = (data: any) => {
    return transform(data);
}

const transform = (data: any) => {
    let items = [];
    let returnData: any = {
        header: {
            status: data.response.status ? data.response.status : null,
            usertier: data.response.userTier ? data.response.userTier : null,
            total: data.response.total ? data.response.total : 0
        }
    }
    for(let i=0; i < data.response.results.length; i++) {
        items.push(rssFormat(data.response.results[i]));
    }
    returnData['item'] = items? items: [];

    return returnData;
}

const rssFormat = (data: any) => { 
    let body = removeTags(data.fields.body);

    let returnData = {
        title: data.fields.headline ? data.fields.headline : null,
        description: body,
        link: data.webUrl ? data.webUrl : null,
        pubDate: data.webPublicationDate ? convertToRssPubDay(data.webPublicationDate) : null
    }

    return returnData;
}