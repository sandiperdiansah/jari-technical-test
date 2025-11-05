import { Application } from "express";

class AppRoute
{
    private readonly app: Application;

    constructor(app: Application)
    {
        this.app = app;
        this.init();
    }

    public init(): void
    {
        this.app.get("/", (req, res) =>
        {
            res.send("Welcome to the App!");
        });
    }
}

export default AppRoute;
