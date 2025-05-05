const express = require('express');
const Model = require('../models/projectModel');

const router = express.Router();

//add router
router.post('/add',(req,res)=>{
    console.log("add project successfull");
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
    
});

//Delete router
router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result)
        console.log("user deleted successfully");
    }).catch((err) => {
        res.status(500).json(err);
    });
});

//getall
router.get('/getall',(req,res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });

});

//getbyid
router.get('/getbyid/:id',(req,res)=>{
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});
//getbydepartment
router.get('/getbydepartment/:department',(req,res)=>{
    Model.find({department : req.params.department})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });

});
// getbytitle
router.get('/getbytitle/:title',(req,res)=>{
    Model.find({title:req.params.title})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// update
router.put('update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});
module.exports = router;