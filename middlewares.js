import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'W&J Tube';
    res.locals.routes = routes;
    next();
};