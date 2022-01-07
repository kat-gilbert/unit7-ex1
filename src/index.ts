import express from "express";
import path from "path";
import routes from "./routes/app-routes";
import shopRoutes from "./routes/shop-routes";
import shopDetailRoutes from "./routes/shop-detail-routes";
import shopListRoutes from "./routes/shop-list-routes";
import searchShopFormRoutes from "./routes/search-shop-form-routes";

const app = express();

const port = 3000; // spot where one application can run by itself - 3k is standard

app.use(express.json()); // enables express.json use and request object
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);  //for this domain run these routse
app.use("/api/shop", shopRoutes);
app.use("/shop-detail", shopDetailRoutes);
app.use("/shop-list", shopListRoutes);
app.use("/shop-search-form", searchShopFormRoutes);

app.listen(port, function(){
    console.log(`Listening on ${port}`);
});
