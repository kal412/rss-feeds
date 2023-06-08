export const responseFormat = (response: any) => {
    let o: any = {};
    o.data = response;
    let meta = {
        copyright: 'Copyright 2023 Kalyan',
        api: {
            version: '1.0'
        }
    };
    o.meta = meta;
    return JSON.parse(JSON.stringify(o));
}