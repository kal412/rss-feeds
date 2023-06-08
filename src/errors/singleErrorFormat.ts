export const singleErrorFormat = (error: any): string => {
    let o: any = {};
    let meta = {
        copyright: 'Copyright 2023 Kalyan',
        api: {
            version: '1.0'
        }
    };

    let newError = {
        title: error.mssg,
        detail: error.mssg,
        source: "pointer\":\"/data/attributes/"+error.param,
        code: error.param
    }
    o.errors = [newError];
    o.meta = meta;
    return JSON.stringify(o);
}