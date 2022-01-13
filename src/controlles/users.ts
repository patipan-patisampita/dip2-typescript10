import { Request, Response } from "express";
import UserModel from "../models/users";
import { createUser, findAndUpdate } from "../services/users.service";

const homeDetail = async (req: Request, resp: Response) => {
    //1.let myData = await UserModel.find();
    //2.Add Data=Cread
    //const user = await createUser({ name: "Jame Kameron", dept: "it", mobile: 958462541 });
    //3.Update
    const user = await findAndUpdate({ name: "Jame Kameron" }, { dept: "SE" }, { mobile: 95784521 }, { new: true });

    resp.json({
        message: "Home Page new",
        student: user
    })
};

export { homeDetail };