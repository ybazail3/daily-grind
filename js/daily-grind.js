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
};


let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";
// console.log(myDay);

// Switch statement
switch (myDay) {
    case 0:
        today = "Sunday";
        break;
    case 1:
        today = "Monday";
        break;
    case 2:
        today = "Tuesday";
        coffee = {
            pic: "images/bubble-tea.jpg",
            alt: "A picture of bubble tea",
            desc: `I like me some bubble tea`,
            day: `Tuesday`,
            color: `beige`,
            name: `Bubble Tea`
        };
        break;
    // case 3:
    //     today = "Wednesday";
    //     break;
    // case 4:
    //     today = "Thursday";
    //     break;
    // case 5:
    //     today = "Friday";
    //     break;
    // case 6:
    //     today = "Saturday";
    //     break;
    default:
        today = "Something went wrong!"
};

// inject coffee data into page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

// let coffeeData = coffeeTemplate(coffee);

// alert(coffeeData);

console.log(coffee);