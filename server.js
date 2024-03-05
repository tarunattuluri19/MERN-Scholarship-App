const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://workingweb19:work19@cluster0.affoh3l.mongodb.net/userData'
  )
  .then(() => {
    console.log('db connected');
  });

// Define a User schema
const users = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
});

const User = mongoose.model('User', users);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email in the MongoDB database
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if the password is correct (in a real-world scenario, you'd hash and compare)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Authentication successful
    res.json({
      message: 'Login successful',
      user: { id: user._id, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/register', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: 'User with this email already exists' });
    }

    // Create a new user
    const newUser = new User({
      email,
      password,
      role,
      firsName,
      lastName,
      classs,
      subject,
      org,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
