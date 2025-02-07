// import express from "express"
import { emptyValidation } from "../../middlewares/validation.js";
import libraryModel from "../../models/library/model.js";

const addLibraryPage = function(req, res){
    res.render('library/addLibraryPage');
}

const showLibraryPage = async function(req, res){
    console.log(req.body)
    var {libraryName } = req.body;
    var msg = ''
    if(emptyValidation(libraryName)){
        msg = 'LibraryName is required';
        return res.render('library/addLibraryPage', { message: msg });
    }
    else{
        var resultFromId = await libraryModel.find({libraryName : libraryName});
        if(resultFromId.length > 0){
            msg = 'This Library Is Already Exist'
            return res.render('library/addLibraryPage', {message:msg})
        }
        else{
            const libraryInstance = new libraryModel();
            libraryInstance.libraryName = libraryName;
            var resultAfterInsert = await libraryInstance.save()
            console.log(resultAfterInsert);
            msg = 'Library Inserted' 

        }
    }
    return res.render('library/showLibraryPage');
}


const showLibraryPageWithTable =async function(req, res){
    const libraries = await libraryModel.find();
    res.render('library/showLibraryPage', {libraries})
}


export{
    addLibraryPage,
    showLibraryPage,
    showLibraryPageWithTable
}