import express from "express"
import { showLibraryPage, addLibraryPage, showLibraryPageWithTable } from "../../controllers/library/controller.js";

const libraryRoute = express.Router()

libraryRoute
.get('/addLib', addLibraryPage)
.post('/showLib', showLibraryPage)
.get('/showLib', showLibraryPageWithTable)

export default libraryRoute;