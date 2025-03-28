const { google } = require('googleapis');

// Load API Key from .env
const apiKey = process.env.GOOGLE_API_KEY;

const googleConfig = {
  apiKey,
  client: google
};

module.exports = googleConfig;
