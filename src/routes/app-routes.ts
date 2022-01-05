import express from "express";
import shopRoutes from "./shop-routes";

const routes = express.Router();

routes.get("/", function(req, res){
    res.render('home')
});

export default routes;