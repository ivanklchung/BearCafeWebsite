// Countdown Timer to Grand Opening
var grandOpeningDate = new Date("Oct 16, 2024 00:00:00").getTime();
var x = setInterval(function(){
var today = new Date().getTime();
var difference = grandOpeningDate - today;

var days = Math.floor(difference / (1000 * 60 * 60 * 24));
var hr = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
var min = Math.floor((difference % (1000 * 60 * 60)) / (1000* 60));
var sec = Math.floor((difference % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hr").innerHTML = hr;
document.getElementById("min").innerHTML = min;
document.getElementById("sec").innerHTML = sec;

// Store Already Opened 
// Countdown is < zero
if(difference<0){
    clearInterval(x);
    document.getElementById("days").innerHTML = "Store";
    document.getElementById("hr").innerHTML = "Is";
    document.getElementById("min").innerHTML = "Officially";
    document.getElementById("sec").innerHTML = "Opened!";
}
},1000);


// Home Button directory
//document.getElementById("home").onclick = function(){
//    location.href ="index.html";
//}