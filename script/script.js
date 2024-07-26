"use strict";
// select the inputs
let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

// Asynchronous function setinterval is used to continue running my code
setInterval(() => {
  // create varibles called new data this is inbuild function date()

  let currentTime = new Date();
  console.log(currentTime);
  //   using get method to get only the data and stored to my html element

  hrs.innerHTML = currentTime.getHours();
  mins.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();
  date.innerHTML = currentTime.getDate();
  month.innerHTML = currentTime.getUTCMonth();
  year.innerHTML = currentTime.getFullYear();

  //  if else statement are used to correct the 0 s in html format

  if (currentTime.getHours() < 10) {
    hrs.innerHTML = "0" + currentTime.getHours();
  } else {
    hrs.innerHTML = "" + currentTime.getHours();
  }
  if (currentTime.getMinutes() < 10) {
    mins.innerHTML = "0" + currentTime.getMinutes();
  } else {
    mins.innerHTML = "" + currentTime.getMinutes();
  }
  if (currentTime.getSeconds() < 10) {
    sec.innerHTML = "0" + currentTime.getSeconds();
  } else {
    sec.innerHTML = "" + currentTime.getSeconds();
  }
}, 1000);
