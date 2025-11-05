import AppRoute from "@/routes/app.route";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";

import express, { Application } from "express";

class App
{
    private readonly app: Application;
    private readonly route: AppRoute;

    constructor()
    {
        this.app = express();
        this.route = new AppRoute(this.app);
        this.init();
    }

    private init(): void
    {
        // Middleware
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(compression({ threshold: 1024 }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());

        // routes
        this.route.init();
    }

    public listen(port: number = Number(process.env.PORT) || 8000): void
    {
        this.app.listen(port, () =>
        {
            console.log(`server running http://localhost:${port}`);
        });
    }
}

export default App;
