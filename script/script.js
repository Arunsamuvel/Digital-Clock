"use strict";
let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML = currentTime.getHours();
  mins.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();

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
