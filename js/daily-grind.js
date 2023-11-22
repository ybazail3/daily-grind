// alert("Can you see this?");

/*TODO:
Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page 
that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  
The content must include:

- One unique image, with appropriate and matching content in the alt tag.  
- A paragraph or two of content that describes the daily item (paragraph must include the 
    name of the highlighted weekday)
-  unique color that supports the image and paragraph of content

pic - image src
alt - an alt tag for the image
desc - description of item
day - The highlighted day of the week
color - color to match pic
name - name of coffee
*/

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
            color: `brown`,
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
            color: `orange`,
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
            color: `beige`,
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
            color: `brown`,
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
            color: `caramel`,
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
            color: `dark brown`,
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
            color: `beige`,
            name: `Mocha`,
        };
        break;
    default:
        today = "Something went wrong!";
}

// inject coffee data into page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

// let coffeeData = coffeeTemplate(coffee);

// alert(coffeeData);

console.log(coffee);
