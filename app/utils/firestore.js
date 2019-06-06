const admin = require('firebase-admin');
const config = require('../config');

//put path of your credential file from assest folder
const serviceAccount = require('path to assest/credentialfile.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.get('databaseUrl'),
});

const database = admin.firestore();
module.exports = database;
