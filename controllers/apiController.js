require('dotenv').config();
const { googleConfig } = require('../config/googleConfig');

exports.home = (req, res) => {
  res.send("Welcome to the AI Legal Assistant API!");
};

exports.googleAPI = async (req, res) => {
  try {
    const apiKey = process.env.GOOGLE_API_KEY || googleConfig.apiKey;

    if (!apiKey) {
      throw new Error('Google API key is missing.');
    }

    res.json({ message: "Google API Connected", apiKey });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
