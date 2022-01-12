import { Request, Response } from "express";
const homeDetail = (req: Request, resp: Response) => {
    // let obj = {
    //     x: 12,
    //     y: 30
    // }

    //let data = sumData(obj);
    resp.json({
        message: "Home Page new",
        //data: data
    })
};

// interface params {
//     x: number,
//     y: number
// }

// const sumData = (obj: params) => {
//     return obj.x + obj.y;
// }

export { homeDetail };