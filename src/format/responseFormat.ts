export const responseFormat = (response: any) => {
    const o: any = {};
    o.data = response;
    const meta = {
        copyright: 'Copyright 2023 Kalyan',
        api: {
            version: '1.0'
        }
    };
    o.meta = meta;
    return JSON.parse(JSON.stringify(o));
};