import express, { Request, Response } from "express";
import { homeDetail } from "../controlles/users";

const router = express.Router();

router.get('/home',homeDetail);

// router.get('/home', (Request, resp: Response) => {
//     resp.json({ message: "Home Page" });
// });

router.get('/about', (Request, Response) => {
    Response.json({ messsage: "About Page" });
});

export { router }