
const express = require("express");

const app = express();
app.use(express.static(__dirname));
app.get("/", function (req, res) {
  
  res.sendFile(__dirname+"/step20-classes.html");
});

app.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is up and running on PORT 3000.");
  }
});
