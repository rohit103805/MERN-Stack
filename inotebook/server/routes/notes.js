const express = require('express');
const Notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const {body, validationResult} = require('express-validator');

const router = express.Router();

router.get('/fetchallnotes', fetchuser, async(req, res)=>{
    try{
        const notes = await Notes.find({user: req.user.id});
        return res.json(notes);
    }catch(e){
        return res.json(500).send("Server Error !");
    }
})

router.post('/addnotes', fetchuser, [
    body('title', 'Title cannot be Empty !').exists(),
    body('content', 'Content cannot be empty').exists(),
], async(req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errors: error.array()});
    }
    try{
        const notes = await Notes.create({
            user: req.user.id,
            title: req.body.title,
            content: req.body.content
        })
        return res.json(notes);
    }catch(e){
        return res.json(500).send("Server Error !");
    }
})

router.post('/updatenotes', fetchuser, async(req, res)=>{
    try{
        const noteId = req.header('noteId');
        let note = await Notes.findById(noteId);
        if(!note){
            return res.status(400).send("Not Found !");
        }
        if(note.user.toString()!==req.user.id){
            return res.status(400).send("Not Allowed !");
        }
        const data ={
            title: req.body.title,
            content: req.body.content
        }
        await Notes.findByIdAndUpdate(noteId, data);
        note = await Notes.findById(noteId);
        return res.json(note)
    }catch(e){
        return res.status(500).json("Server Error !");
    }
})

router.delete('/deletenotes', fetchuser, async(req, res)=>{
    try{
        const noteId = req.header('noteId');
        let note = await Notes.findById(noteId);
        if(!note){
            return res.status(400).send("Not Found !");
        }
        if(note.user.toString()!==req.user.id){
            return res.status(400).send("Not Allowed !");
        }
        await Notes.findByIdAndDelete(noteId);
        return res.send("Note Deleted Succesfully !");
    }catch(e){
        return res.status(500).json("Server Error !");
    }
})


module.exports = router;