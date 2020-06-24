// Random Sentance Generator

// Variables

var pronounsA = "I";
var positive = ["like","enjoy","appreciate"]
var negative = ["dislike","hate","despise"]
var things = ["books","television","movies","cars","the internet"]
var space = " ";

// Statements

var posAlert = "Positive Statement:"
var negAlert = "Negative Statement:"
var a = pronounsA[Math.floor(Math.random()*pronounsA.length)];
var b = positive[Math.floor(Math.random()*positive.length)];
var c = negative[Math.floor(Math.random()*negative.length)];
var d = things[Math.floor(Math.random()*things.length)];

// Console Messages

console.log(posAlert+space+a+space+b+space+d)
console.log(negAlert+space+a+space+c+space+d)
