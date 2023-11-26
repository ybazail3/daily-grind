
function coffeeTemplate(coffee) {
    return `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}.
    </p>`;
}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";
let feature = "";
// console.log(myDay);

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("day")) {//from querystring
    myDay = urlParams.get("day");
};

// Converted string to an integer
myDay = parseInt(myDay);

// Switch statement
switch (myDay) {
    case 0:
        today = "Sunday";
        coffee = {
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold brew coffee",
            desc: `I like me some cold brew`,
            day: `Sunday`,
            color: `#3D2B1F`,
            feature: `#3D2B1F`,
            name: `Cold Brew`,
        };
        break;
    case 1:
        today = "Monday";
        coffee = {
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin spice latte",
            desc: `It's pumpkin spice season, come grab yours`,
            day: `Monday`,
            color: `#CC8833`,
            feature: `##CC8833`,
            name: `Pumpkin Spice Latte`,
        };
        break;
    case 2:
        today = "Tuesday";
        coffee = {
            pic: "images/bubble-tea.jpg",
            alt: "A picture of bubble tea",
            desc: `I like me some bubble tea`,
            day: `Tuesday`,
            color: `#EFDECD`,
            feature: `#EFDECD`,
            name: `Bubble Tea`,
        };
        break;
    case 3:
        today = "Wednesday";
        coffee = {
            pic: "images/drip.jpg",
            alt: "A picture of drip coffee",
            desc: `Our drip coffee is the best in town`,
            day: `Wednesday`,
            color: `#4B3621`,
            feature: `#4B3621`,
            name: `Drip`,
        };
        break;
    case 4:
        today = "Thursday";
        coffee = {
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            desc: `Not too sweet, but sweet enough`,
            day: `Thursday`,
            color: `#C5A582`,
            feature: `#C5A582`,
            name: `Caramel Latte`,
        };
        break;
    case 5:
        today = "Friday";
        coffee = {
            pic: "images/frappaccino.jpg",
            alt: "A picture of frappiccino",
            desc: `Pretty good frappiccino`,
            day: `Friday`,
            color: `#F6D7B0`,
            feature: `#F6D7B0`,
            name: `Frappaccino`,
        };
        break;
    case 6:
        today = "Saturday";
        coffee = {
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha coffee",
            desc: `Mocha is choclate and coffee`,
            day: `Saturday`,
            color: `#9E5B40`,
            feature: `#9E5B40`,
            name: `Mocha`,
        };
        break;
    default:
        today = "Something went wrong!";
}

// inject coffee data into page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

/*
Original code: document.getElementsByClassName("feature").style.color = coffee.feature;
This didnt work because because getElementsByClassName doesn't return a single element. We 
will have to loop through each element.
*/
document.querySelectorAll(".feature").forEach(element => {
    element.style.color = coffee.feature;
});


// let coffeeData = coffeeTemplate(coffee);

// alert(coffeeData);

console.log(coffee);
