const express = require("express");
const bodyParser = require("body-parser");
const highlighter = require(__dirname + "/server_funcs/highlighter.js");
const validator = require("validator");
const binaryConverter = require(__dirname + "/server_funcs/converttobinary.js");


const server = express();
server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static("public"));

var binaryNumber = "";
var integerNumber = "";

server.get("/", function(req, res){
    if (validator.isEmpty(binaryNumber) == true){
        var tempBinaryNumber = "00000000";
        res.render("binaryconverter", {binaryNumber: tempBinaryNumber, userIntNumber: tempBinaryNumber});
    } else {
        console.log("Second condition ");
        binaryNumber = "";
        integerNumber = "";
        res.render("binaryconverter", {binaryNumber: binaryNumber, userIntNumber: integerNumber});
    }
});

server.post("/", function(req, res){
    integerNumber = req.body.integerNumber;
    if (validator.isNumeric(integerNumber) == true && validator.isInt(integerNumber) == true){
        var binaryArr = binaryConverter.convert(integerNumber);
        console.log(highlighter.success_prompt(binaryArr));
        for (var counter = 0; counter < binaryArr.length; ++counter){
            binaryNumber += binaryArr[counter];
        }
        console.log(highlighter.warning_prompt("Integer Number: " + integerNumber));
        res.render("binaryconverter", {binaryNumber: binaryNumber, userIntNumber: integerNumber});
        binaryNumber = "";
        integerNumber = "";
    } else {
        res.render("400-error");
    }
});

server.get("*", function(req, res){
    res.render("404-error");
});

server.post("/pagenotfound-404", function(req, res){
    res.redirect("/");
});

server.post("/badrequest-400", function(req, res){
    res.redirect("/");
});

server.listen(process.env.PORT || 3000, function(req, res){
    console.log(highlighter.success_prompt("SERVER IS RUNNING AT PORT 3000"));
    console.log(highlighter.success_prompt("PRESS Ctrl-C TO KILL THE SERVER"));
});