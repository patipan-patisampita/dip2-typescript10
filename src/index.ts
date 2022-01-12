import express, { Request, Response } from "express";
import connects from "./config/db";
import { router } from "./routes/routes";

const app = express();
const PORT = 4001;

app.use('/',router);
app.get('/', (req: Request, resp: Response) => {
    resp.json({ data: "Test Page" })
});

connects();

app.listen(PORT, (): void => {
    console.log(`Server is running on ${PORT}`);
});