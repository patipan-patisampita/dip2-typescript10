import { Request, Response } from "express";
import UserModel from "../models/users";
import { createUser, findAndUpdate, findUser } from "../services/users.service";

const homeDetail = async (req: Request, resp: Response) => {
    //1.let myData = await UserModel.find();
    //2.Add Data=Cread
    //const user = await createUser({ name: "Tomus Kameron", dept: "it", mobile: "0958462541", age: "25",});
    //3.Update
    //const user = await findAndUpdate({ name: "Mark Sakaberg" }, { dept: "aws" }, { new: true });
    //const user = await findAndUpdate({ name: "Jeff Bezzo" }, { dept: "SE1" }, { new: true });
    //4.Find
    const user = await findUser({_id:'61e7975b7526aee4c75b72a3'});

    resp.json({
        message: "Home Page new",
        student: user
    })
};

export { homeDetail };