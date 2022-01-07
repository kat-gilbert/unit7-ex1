import express from "express";

const searchShopFormRoutes = express.Router();

searchShopFormRoutes.get("/", function(req, res){
    res.render('shop-search-forms');
});

 

export default searchShopFormRoutes;