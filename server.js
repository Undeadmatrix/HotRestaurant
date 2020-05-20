
//create a basic server

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//array vars to hold data
// create a set of variables for holding the reservation
var reservation = [
    {
        routeName: "johnDoe",
        name:"John Doe",
        phone: "123-555-5555",
        email: "e@host.com",
        specialRequest: "no cheese"

    }
]

// create a set of variables for holding wait list
var waitList = [
    {
        routeName: "janeDoe",
        name:"Jan Doe",
        phone: "123-555-4444",
        email: "a@host.com",
        specialRequest: " "

    }
]
//routes for getting and posting
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//routes for displaying html
app.get("/api/tables", function(req, res) {
    var reserv = req.params.reservation;
  
    console.log(reserv);
  
    for (var i = 0; i < reservation.length; i++) {
      if (reserv === reservation[i].routeName) {
        return res.json(reservation[i]);
      }
    }
  
    return res.json(false);
  });
  app.get("/api/waitList", function(req, res) {
    var wait = req.params.waitList;
  
    console.log(wait);
  
    for (var i = 0; i < waitList.length; i++) {
      if (wait === waitList[i].routeName) {
        return res.json(waitList[i]);
      }
    }
  
    return res.json(false);
  });
  
//Server begin listening
app.listen(PORT, function () {
  console.log("Listening on PORT " + PORT);
});
