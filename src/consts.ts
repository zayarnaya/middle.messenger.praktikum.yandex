export enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
};

export type Options = {
headers: any;
method: METHODS;
data?: any;
timeout: number;
};
