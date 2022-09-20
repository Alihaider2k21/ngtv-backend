import express from "express";

// routes
import userRoute from "./user/index.js";
import genreRoute from "./genre/index.js";
import episodeRoute from "./episode/index.js";
import seasonRoute from "./season/index.js";
import seriesRoute from "./series/index.js";
import streamRoute from "./stream/index.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
protectedRouter.use("/genre", genreRoute);
protectedRouter.use("/episode", episodeRoute);
protectedRouter.use("/season", seasonRoute);
protectedRouter.use("/series", seriesRoute);
protectedRouter.use("/stream", streamRoute);

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);

export { protectedRouter, unProtectedRouter };
