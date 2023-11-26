
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
            desc: `Cold brew is simply coffee that has been brewed with cold rather than hot water and usually involves a long steeping process—anywhere between 12-24 hours. In terms of flavor, cold brew is generally characterized as smooth, low-acid, and heavier than its hot brewed counterparts`,
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
            desc: `The Pumpkin Spice Latte is a coffee drink made with a mix of traditional fall spice flavors (cinnamon, nutmeg, and clove), steamed milk, espresso, and often sugar, topped with whipped cream and pumpkin pie spice's`,
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
            desc: `Bubble tea is a cold, flavored tea beverage that contains large chewy tapioca balls, making it an interactive drink and a sweet snack`,
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
            desc: `Drip coffee is made by pouring boiling water over ground coffee (the grind of which being much coarser than espresso). A filter that is typically made from paper separates the grounds from the brewed liquid which allows the water to pass through and fall into a pot or jug`,
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
            desc: `This drink is sweetened with caramel syrup. Once the syrup is added, you simply need to add your shots, pour steamed milk and milk foam on top. This helps create a pleasant coffee-caramel taste throughout the drink`,
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
            desc: `A Frappuccino is a blended coffee drink that is typically made with coffee or espresso, milk, and ice. It is blended together in a blender, which gives it a smooth and creamy texture. Additional ingredients such as syrups and whipped cream can also be added to customize the flavor`,
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
            desc: `A cafe mocha is essentially a chocolate flavored variant of a cafe latte, or even a hot chocolate with shots of espresso in it. It is made up of espresso, milk, and chocolate. It can include one or two shots of espresso depending on taste preferences and traditionally is topped with milk foam, just like a latte`,
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
