import { Request, Response } from "express";
import UserModel from "../../models/users";

const homeDetail = async (req: Request, resp: Response) => {

    let myData = await UserModel.find();
    let obj = {x: 12,y: 30}

    let data = sumData(obj);
    resp.json({
        message: "Home Page new",
        data:data,
        myData: myData
    })
};

interface params {
    x: number,
    y: number
}

const sumData = (obj: params) => {
    return obj.x + obj.y;
}

export { homeDetail };