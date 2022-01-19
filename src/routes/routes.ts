import express, { Request, Response } from "express";
import { homeDetail } from "../controlles/users";
const router = express.Router();

router.get('/home',homeDetail);

// router.get('/home', (req:Request,resp:Response) => {
//     resp.json({ message: "Home Page" });
// });

router.get('/home',(req:Request,resp:Response)=>{
    resp.json({
        message:"Home Page",
    })
});

router.get('/about', (req:Request,resp:Response) => {
    resp.json({ messsage: "About Page" });
});

export { router }