import express from "express";
import libraryModel from "../../models/library/model.js";
import groupModel from "../../models/group/model.js";
import contactModel from "../../models/contact/model.js";
import msgModel from "../../models/message/model.js";
import homeModel from "../../models/home/model.js";

const homePage = async function(req, res){
    // res.render('homePage')

    try{
        const grp = await groupModel.find()
        const msg = await msgModel.find()
        const cont = await contactModel.find()
        const libraries = await libraryModel.find()
        res.render('homePage', {libraries, grp,msg, cont });
    }
    catch(err){
        console.log(err)
    }

}

const homeActionPage = async function(req,res){
    var{userName, userPhone, userEmail, userMsg} = req.body;
    var msg="";

    const homeinstance = new homeModel();
    homeinstance.userName = userName;
    homeinstance.userPhone = userPhone;
    homeinstance.userEmail = userEmail;
    homeinstance.userMsg = userMsg;
    var resultAfterInsert = await homeinstance.save();
    console.log(resultAfterInsert);
    msg = "Form Inserted"
}

export {
    homePage,
    homeActionPage
}