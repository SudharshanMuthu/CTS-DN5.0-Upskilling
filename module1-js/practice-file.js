// ======================================
// EX 1 - JavaScript Basics & Setup
// ======================================

console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Community Portal Loaded Successfully");
};

// ======================================
// EX 2 - Variables, Data Types, Operators
// ======================================

const eventName = "Music Festival";
const eventDate = "2026-06-20";

let availableSeats = 50;

console.log(`Event Name : ${eventName}`);
console.log(`Event Date : ${eventDate}`);
console.log(`Available Seats : ${availableSeats}`);

// Registration Example

availableSeats--;

console.log(`After Registration Seats : ${availableSeats}`);

availableSeats++;

console.log(`Seat Added Back : ${availableSeats}`);


// ======================================
// EX 3 - Conditionals, Loops, Try Catch
// ======================================

const events = [
    {
        name: "Music Festival",
        seats: 20,
        valid: true
    },
    {
        name: "Sports Meet",
        seats: 0,
        valid: true
    },
    {
        name: "Old Event",
        seats: 10,
        valid: false
    }
];

// forEach Loop

events.forEach(function(event){

    if(event.valid && event.seats > 0){

        console.log(
            event.name + " Available For Registration"
        );

    }
    else{

        console.log(
            event.name + " Not Available"
        );

    }

});

// try catch

function registerUser(eventName){

    try{

        if(eventName === ""){

            throw "Event Name Cannot Be Empty";

        }

        console.log(
            "Registration Success : " + eventName
        );

    }
    catch(error){

        console.log(
            "Error : " + error
        );

    }

}

// Function Calls

registerUser("Music Festival");

registerUser("");

// ======================================
// EX 4 - Functions, Scope, Closures
// ======================================

function addEvent(name){

    console.log(
        "Event Added : " + name
    );

}

function registerUser(name){

    console.log(
        "User Registered : " + name
    );

}

function filterEventsByCategory(category){

    console.log(
        "Filtering : " + category
    );

}

// Closure Example

function totalRegistrations(){

    let count = 0;

    return function(){

        count++;

        console.log(
            "Total Registrations : " + count
        );

    };

}

const registerCounter =
    totalRegistrations();

registerCounter();
registerCounter();
registerCounter();


// ======================================
// EX 5 - Objects and Prototypes
// ======================================

class Event{

    constructor(name,seats){

        this.name = name;
        this.seats = seats;

    }

    checkAvailability(){

        if(this.seats > 0){

            console.log(
                this.name + " Available"
            );

        }
        else{

            console.log(
                this.name + " Full"
            );

        }

    }

}

const e1 =
    new Event(
        "Music Festival",
        20
    );

e1.checkAvailability();

console.log(
    Object.entries(e1)
);



// ======================================
// EX 6 - Arrays
// ======================================

const events = [];

events.push("Music Festival");
events.push("Sports Meet");
events.push("Music Night");

console.log(events);

const musicEvents =
    events.filter(
        event =>
        event.includes("Music")
    );

console.log(musicEvents);

const formattedEvents =
    events.map(
        event =>
        "Workshop On " + event
    );

console.log(formattedEvents);


// ======================================
// EX 7 - DOM
// ======================================

const heading =
    document.querySelector("h1");

console.log(heading);

const card =
    document.createElement("div");

card.innerText =
    "New Event Card";

document.body.appendChild(card);


// ======================================
// EX 8 - Event Handling
// ======================================

function register(){

    alert("Registered");

}

function categoryChanged(){

    console.log(
        "Category Changed"
    );

}

function searchEvent(){

    console.log(
        "Searching..."
    );

}


// ======================================
// EX 9 - Async Await
// ======================================

fetch(
"https://jsonplaceholder.typicode.com/posts"
)
.then(response =>
response.json())
.then(data =>
console.log(data))
.catch(error =>
console.log(error));

async function loadData(){

    try{

        const response =
        await fetch(
        "https://jsonplaceholder.typicode.com/posts"
        );

        const data =
        await response.json();

        console.log(data);

    }
    catch(error){

        console.log(error);

    }

}


// ======================================
// EX 10 - Modern JS
// ======================================

const eventName =
    "Music Festival";

const eventSeats =
    20;

const eventDetails = {

    name : eventName,
    seats : eventSeats

};

const {
    name,
    seats
} = eventDetails;

console.log(name);
console.log(seats);

const events =
[
    "Music",
    "Sports"
];

const copiedEvents =
[
    ...events
];

console.log(copiedEvents);

// ======================================
// EX 11 - Working With Forms
// ======================================

function submitForm(event){

    event.preventDefault();

    const form =
        document.getElementById("registrationForm");

    const name =
        form.elements["name"].value;

    const email =
        form.elements["email"].value;

    const selectedEvent =
        form.elements["event"].value;

    if(
        name === "" ||
        email === "" ||
        selectedEvent === ""
    ){

        console.log(
            "Please Fill All Fields"
        );

        return;
    }

    console.log(
        "Name : " + name
    );

    console.log(
        "Email : " + email
    );

    console.log(
        "Event : " + selectedEvent
    );

}
// ======================================
// EX 12 - AJAX & Fetch API
// ======================================

function submitRegistration(){

    const userData = {

        name : "Sudharshan",
        event : "Music Festival"

    };

    fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method : "POST",

            headers : {
                "Content-Type":
                "application/json"
            },

            body :
            JSON.stringify(userData)

        }
    )
    .then(response =>
        response.json()
    )
    .then(data => {

        console.log(
            "Registration Success"
        );

        console.log(data);

    })
    .catch(error => {

        console.log(
            "Registration Failed"
        );

        console.log(error);

    });

}

// ======================================
// EX 13 - Debugging
// ======================================

function debugRegistration(){

    console.log(
        "Registration Started"
    );

    let name =
        "Sudharshan";

    let email =
        "sudharshan@gmail.com";

    console.log(name);

    console.log(email);

    console.log(
        "Registration Completed"
    );

}
// ======================================
// EX 14 - jQuery
// ======================================

// jQuery Required

$("#registerBtn").click(function(){

    alert(
        "Registration Successful"
    );

});

$("#eventCard").fadeIn();

$("#eventCard").fadeOut();

