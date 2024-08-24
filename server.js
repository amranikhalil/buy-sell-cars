const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoURI = "mongodb+srv://salasmerzouk54:bazouzox@cluster0.zt9u591.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Mongoose model for subscription data 
const subscriptionSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  userType: String,
});

const SubscriptionModel = mongoose.model('Subscription', subscriptionSchema);

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("Subscription", userSchema);



// API endpoint to handle form submissions
app.post('/api/subscribe', async (req, res) => {
  try {
    const newSubscription = new SubscriptionModel(req.body);
    await newSubscription.save();
    res.json({ success: true, data: newSubscription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      // You can use a library like jsonwebtoken to generate a token for authentication
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
