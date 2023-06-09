export const singleErrorFormat = (error: any): string => {
    const o: any = {};
    const meta = {
        copyright: 'Copyright 2023 Kalyan',
        api: {
            version: '1.0'
        }
    };

    const newError = {
        title: error.mssg,
        detail: error.mssg,
        source: "pointer\":\"/data/attributes/"+error.param,
        code: error.param
    };
    o.errors = [newError];
    o.meta = meta;
    return JSON.stringify(o);
};