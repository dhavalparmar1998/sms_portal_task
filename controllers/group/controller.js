import express from "express";
import mongoose from "mongoose";
import {  emptyValidation } from "../../middlewares/validation.js";
import groupModel from "../../models/group/model.js";
import { render } from "ejs";

const addGroupPage =  function(req, res){
    res.render("group/addGroupPage")
   
    
}



const showGroupPage = async function(req,res){
    var {groupName} = req.body;
    var msg = '';
    if(emptyValidation(groupName)){
        msg = "Group Name Is Required"
    }
    else{
        var result = await groupModel.find({groupName : groupName})
        if(result.length > 0 ){
            msg = 'Group Name is Already Exist'
            return res.render("group/addGroupPage", { message: msg });
        }
        else{
            const groupinstance = new groupModel();
            groupinstance.groupName = groupName;
            var resultAfterInsert =  await groupinstance.save();
            console.log(resultAfterInsert);
            msg = 'Group Name Is Inserted'
            res.redirect('/group/showGrp');
        }
    }
    res.send({message:msg});
}

const showGroupPageWithTable = async function(req,res){
    const groups = await groupModel.find();
    res.render('group/showGroupPage', {groups})


}

export{
    addGroupPage,
    showGroupPage,
    showGroupPageWithTable
}