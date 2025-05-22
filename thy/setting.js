// const express = require("express");
// const axios = require("axios");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;


// // Middleware to allow cross-origin requests (CORS)
// const cors = require("cors");
// app.use(cors());

// // Root route for sanity check
// app.get("/", (req, res) => {
//   res.send("Weather Dashboard Server is running!");
// });

// // Weather API route
// app.get("/api/weather", async (req, res) => {
//   const { city, lat, lon } = req.query;

//   let url = "";

//   if (city) {
//     url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
//   } else if (lat && lon) {
//     url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
//   }

//   if (!url) {
//     return res.status(400).json({ error: "City or location is required" });
//   }

//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (err) {
//     console.error("Error fetching weather:", err.message);
//     res.status(500).json({ error: "Failed to fetch weather data" });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

// d1bc67f1630bee48778347e3d4eddce5
// const API_KEY = "YOUR_OPENWEATHER_API_KEY";
const API_KEY = "d1bc67f1630bee48778347e3d4eddce5";
app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather data" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));