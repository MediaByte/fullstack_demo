import express from 'express';
import Request from 'request';

const completeRequest = (res: express.Response, payload : object) : express.Response => res.send(payload);

const getUsers = (req : express.Request, res : express.Response) : void => {
    const { page } = req.body;
    if (page) {
        Request(`https://reqres.in/api/users?page=${page}`, function (error: any, response: any, body: any) : any {
            if (error) {
                completeRequest(res, error)
            }

            if (response) {
                completeRequest(res, body)
            }
        });
    };
};


export default getUsers;
