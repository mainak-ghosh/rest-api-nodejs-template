// Requires
const express = require("express");

// import routes
const postRoute = require("./routes/posts");

// Initialize
const app = express();

// Middleware
app.use("/lifechoices", postRoute);

// Routes
app.get("/", (request, response) => {
  response.send("Life's going downhill right now");
});

// app.get('/lifechoices', (request, response) => {
//     response.send("Are you sure you wanna face this right now?");
// });

// Start sever
const port = 7000;
app.listen(port, () => {
  console.log(
    `Listening on port ${port}`,
    `\nTry going to : http://localhost:${port}`
  );
});
