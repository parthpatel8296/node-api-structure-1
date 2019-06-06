/* eslint-disable quotes */
const util = require('util');
const fireStore = require('../../utils/firestore');
const logger = require('../../utils/logger');

// function to add movie data in movie collection
exports.addMovie = async (data) => {
  try {
    const result = await fireStore.collection('movie').add(data);
    return result;
  } catch (err) {
    logger.error(util.format(`Error Occured while adding movies %O`, err));
    throw err;
  }
};

// function to get movie data from movie collection by id
exports.getMovieById = async (data) => {
  try {
    const result = await fireStore.collection('movie').doc(data).get();
    return result;
  } catch (err) {
    logger.error(util.format(`Error Occured while getting movie by id %O`, err));
    throw err;
  }
};

// function to get all movie data from movie collection
exports.getAllMovies = async () => {
  try {
    const result = await fireStore.collection('movie').get();
    return result;
  } catch (err) {
    logger.error(util.format(`Error Occured while getting movies %O`, err));
    throw err;
  }
};


// function to get create or replace movie data from movie collection
exports.updateMovie = async (data, id) => {
  try {
    const result = await fireStore.collection('movie').doc(id).set(data);
    return result;
  } catch (err) {
    logger.error(util.format(`Error Occured while replacing movie object %O`, err));
    throw err;
  }
};

// function to get modify movie data from movie collection
exports.patchMovieById = async (data, id) => {
  try {
    const result = await fireStore.collection('movie').doc(id).update(data);
    return result;
  } catch (err) {
    logger.error(util.format(`Error Occured while updating movies %O`, err));
    throw err;
  }
};

// function to get modify movie data from movie collection
exports.deleteMovieById = async (data, id) => {
  try {
    const result = await fireStore.collection('movie').doc(id).delete(data);
    return result;
  } catch (err) {
    logger.error(util.format(`Error Occured while deleting movies %O`, err));
    throw err;
  }
};
