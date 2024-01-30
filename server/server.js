// index.js

const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'passwordsdb';

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Route to generate a random password
app.get('/generate-password', async (req, res) => {
  const newPassword = generateRandomPassword();
  const purpose = req.query.purpose || 'General';

  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    
    const passwordCollection = db.collection('passwords');
    
    await passwordCollection.insertOne({ password: newPassword, purpose, creationDate: new Date() });
    
    client.close();

    res.json({ password: newPassword, purpose, creationDate: new Date() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate and save password' });
  }
});

// Route to retrieve all passwords
app.get('/get-passwords', async (req, res) => {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    
    const passwordCollection = db.collection('passwords');
    
    const passwords = await passwordCollection.find().toArray();
    
    client.close();

    res.json(passwords);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve passwords' });
  }
});

// Function to generate a random password
function generateRandomPassword(length = 12) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
