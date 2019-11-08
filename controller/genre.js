const mongoose = require('mongoose');
const Genre = require('../models/genre');
// const redisClient = require('../Redis');

exports.GET_ALL_GENRES = (req, res, next) => {
  Genre
  .find()
  .then(docs => { 
    // redisClient.SETEX('genres', 3600, docs.toString());
    return res.status(200).json(docs)
  })
  .catch(err => res.status(500).json(err))
}
exports.ADD_GENRE = (req, res, next) => {
  const genre = new Genre({ 
    _id: mongoose.Types.ObjectId(),
    genre: req.body.genre
  })
  
  genre
  .save()
  .then(() => res.status(201).json({ message: "Genre added successfuly to MongoDB" }))
  .catch(error => res.status(500).json({
    message: "Something went wrong when adding to MongoDB",
    error 
  }));
}