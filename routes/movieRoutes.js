const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie")

router.get("/getAll",async(req,res)=>{
    try{
        const allMovies = await Movie.find();
        if(allMovies.length === 0){
            return res.json({
                success : true,
                msg :"No user found",
                allMovies : []
            })
        }
        res.json({
            success : true,
            msg : "All movies retrieved",
            allMovies : allMovies
        })
    }
    catch(err){
        res.json({
            success : false,
            msg : err.message
        })
    }
})

router.get("/getAll/:inputValue",async(req,res)=>{
    const {inputValue}  = req.params;
    try{
        const allMovies = await Movie.find({
            $or: [
                { title: { $regex: inputValue, $options: "i" } },
                { plot: { $regex: inputValue, $options: "i" } },
                { fullPlot: { $regex: inputValue, $options: "i" } },
                { cast: { $elemMatch: { $regex: inputValue, $options: "i" } } },
                { directors: { $elemMatch: { $regex: inputValue, $options: "i" } } },
                { writers: { $elemMatch: { $regex: inputValue, $options: "i" } } },
                { genres: { $elemMatch: { $regex: inputValue, $options: "i" } } },
                { countries: { $elemMatch: { $regex: inputValue, $options: "i" } } },
                { languages: { $elemMatch: { $regex: inputValue, $options: "i" } } }
              ]
            
        })

        res.json({
            success : true,
            allMovies
        })
    }
    catch(err){
        res.json({
            success : false,
            msg : err.message
        })
    }
})
router.get("/:id",async(req,res)=>{
    const {id} = req.params;
    if(!id) return;
    try{
        const movie = await Movie.findById(id);
        if(!movie){
            return res.json({
                success : false ,
                msg : "NO movie found",
            })
        }
        res.json({
            success : true,
            msg : "Movie found",
            movie
        })
    }
    catch(err){
        res.json({
            success : false,
            msg : err.message
        })
    }
})

module.exports = router;