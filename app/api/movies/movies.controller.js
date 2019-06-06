const service = require('./movies.service');

// function to add movie
exports.addMovie = async (req, res) => {
  try {
    const data = req.body;
    const response = await service.addMovie(data);
    if (response) {
      return res.status(200).send({ message: 'Movie added succesfully' });
    }
    return res.status(200).send({ message: 'Movie not added succesfully' });
  } catch (err) {
    return res.status(500).send(err);
  }
};

// function to get movie by id
exports.getMovieById = async (req, res) => {
  try {
    const data = req.params.id;
    const response = await service.getMovieById(data);
    if (response.exists) {
      return res.status(200).send(response.data());
    }
    return res.status(200).send('No Data found');
  } catch (err) {
    return res.status(500).send(err);
  }
};

// function to get all movies
exports.getAllMovies = async (req, res) => {
  try {
    const response = await service.getAllMovies();
    const movies = [];
    if (response) {
      response.forEach((doc) => {
        const obj = {};
        obj.id = doc.id;
        obj.value = doc.data();
        movies.push(obj);
      });
    }
    return res.status(200).send(movies);
  } catch (err) {
    return res.status(500).send(err);
  }
};

// function to update movie
exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = await service.updateMovie(data, id);
    if (response) {
      return res.status(200).send({ message: 'Movie updated succesfully' });
    }
    return res.status(200).send({ message: 'Movie not updated succesfully' });
  } catch (err) {
    return res.status(500).send(err);
  }
};


// function to modify movie
exports.patchMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = await service.patchMovieById(data, id);
    if (response) {
      return res.status(200).send({ message: 'Movie updated succesfully' });
    }
    return res.status(200).send({ message: 'Movie not updated succesfully' });
  } catch (err) {
    return res.status(500).send(err);
  }
};

// function to delete movie
exports.deleteMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = await service.deleteMovieById(data, id);
    if (response) {
      return res.status(200).send({ message: 'Movie deleted succesfully' });
    }
    return res.status(200).send({ message: 'Movie not deleted succesfully' });
  } catch (err) {
    return res.status(500).send(err);
  }
};
