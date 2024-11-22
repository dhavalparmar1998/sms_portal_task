import express from "express"
import  { homePage, homeActionPage } from "../../controllers/home/controller.js";


const homeRoute = express.Router();

homeRoute
.get('/', homePage)
.post("/", homeActionPage)

export default homeRoute;