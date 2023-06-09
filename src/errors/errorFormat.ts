export const errorFormat = (errors: any[]): string => {
    let o: any = {};
    let newErrorData: any[] = [];

    for(let i=0; i < errors.length; i++) {
        const error: any = errors[i];
        
        let newError = {
            title: error.msg,
            detail: error.msg,
            source: "pointer\":\"/data/attributes/"+error.param,
            code: error.param
        };

        newErrorData.push(newError);
    }

    let meta = {
        copyright: 'Copyright 2023 Kalyan',
        api: {
            version: '1.0'
        }
    };

    o.errors = newErrorData;
    o.meta = meta;
    return JSON.stringify(o);
}