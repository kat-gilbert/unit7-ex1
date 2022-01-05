import express from "express";

const searchShopFormRoutes = express.Router();

searchShopFormRoutes.get("/", function(req, res){
    res.render('search-shop-forms');
});

export default searchShopFormRoutes;