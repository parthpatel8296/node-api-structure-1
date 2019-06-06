const admin = require('firebase-admin');
const config = require('../config');
const serviceAccount = require('../assest/fir-demo-4aca4-firebase-adminsdk-s2pip-6b6367b727.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.get('databaseUrl'),
});

const database = admin.firestore();
module.exports = database;
