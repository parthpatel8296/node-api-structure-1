const express = require('express');
const controller = require('./movies.controller');

const router = express.Router();

// ********POST SECTION*****
router.post('/', controller.addMovie);

// ********GET SECTION******
router.get('/', controller.getAllMovies);
router.get('/:id', controller.getMovieById);


// ********PUT SECTION*******
router.put('/:id', controller.updateMovie);

// ********PATCH SECTION******
router.patch('/:id', controller.patchMovieById);


// ********DELETE SECTION*******
router.delete('/:id', controller.deleteMovieById);

module.exports = router;
