// Date
var today = new Date();
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + (today.getFullYear() + 10);       //I added 10 years on purpose
document.getElementById("current_date").value = date;

// Time
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById("current_time").value = time;

// Food
function foodRatio() {
    var food = parseFloat(document.getElementById("food").value);
    if (Number.isNaN(food) === true) {      //Error message when the user doesn't put in a number
        alert("This is not a number.");
        return;
    }
    else {
        var days = food * 0.69;
        document.getElementById("food_left").innerHTML = food + " kg of food will last you around " + days.toFixed(2) + " days.";
    }
}

// Water
function waterRatio() {
    var water = parseFloat(document.getElementById("water").value);
    if (Number.isNaN(water) === true) { //Error message when the user doesn't put in a number
        alert("This is not a number.");
        return;
    }
    else {
        var days = water * 0.5;
        document.getElementById("water_left").innerHTML = water + " L of water will last you around " + days.toFixed(2) + " days.";
    }
}

// Gravity
function gravityMars() {
    document.getElementById("gravity_on_mars").innerHTML = "The gravity on Mars is 0.375 that of Earth.";
}
function gravityEarth() {
    document.getElementById("gravity_on_earth").innerHTML = "The gravity on Earth is 2.66 times that of Mars.";
}

// Kilometers
function convertKm() {
    var earthKilometers = parseFloat(document.getElementById("earth_kilometers").value);
    var marsKilometers = earthKilometers * 0.420;
    if (Number.isNaN(earthKilometers) === true) {
        alert("This is not a number.");
        return;
    }
    else {
        document.getElementById("mars_kilometers").innerHTML = earthKilometers + " earth km equals to " + marsKilometers.toFixed(2) + " mars km.";
    }
}

// Current gravity
function currentGravity() {
    document.getElementById("current_gravity").innerHTML = Math.random() + " m/s2";
}

// Atmosphere
function atmosphere() {
    document.getElementById("oxogyn_ship").innerHTML = "Oxogyn levels: " + Math.floor(Math.random() * 6) + 1 + "%";
    document.getElementById("nitrogen_ship").innerHTML = "Nitrogen levels: " + Math.floor(Math.random() * 9) + 3 + "%";
    document.getElementById("carbondioxide_ship").innerHTML = "Carbon dioxide levels: " + Math.floor(Math.random() * 3) + 1 + "%";
}
