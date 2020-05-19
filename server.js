const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//array vars to hold data

//routes for getting and posting

//routes for displaying html

//ajax call to express server

