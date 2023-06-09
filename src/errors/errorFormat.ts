interface ErrorData {
    title: string;
    detail: string;
    source: string;
    code: string;
}

interface Meta {
    copyright: string;
    api: {
        version: string;
    }
}

export const errorFormat = (errors: any[]): string => {
    const o: { meta: Meta; errors: ErrorData[] } = {
        meta : {
            copyright: 'Copyright 2023 Kalyan',
            api: {
                version: '1.0'
            }
        },
        errors: []
    };

    for(const element of errors) {
        const error: any = element;
        
        const newError: ErrorData = {
            title: error.msg,
            detail: error.msg,
            source: "pointer\":\"/data/attributes/"+error.param,
            code: error.param
        };

        o.errors.push(newError);
    }
    return JSON.stringify(o);
};