// Sometimes when we're programming, we need to save information for later
// whether we're saving our current location in a game or maybe amount of points.
// Or maybe we're building a image sharing site and we need to store images

// let's start with talking about how we would save a list of information in the first place
// we would probably want to create an array. Does anyone remember what an array is? 
//     A. (list of data that can be added to)

let myArray = ["Vanilla", "Chocolate", "Strawberry"];

// if we want to access a specific element, we write
myArray[0]; // or 1 or 2

// if we want to store that in a variable, how would we do it?
//     A. just write `let someVarName = ` in front of it like so

let superCoolVariable = myArray[0];

// however, any variables we create are wiped when we refresh the page
// because of that, if we have data that we want to save and keep, we have to use some kind of database

// Databases come in many forms
// There are many types of databases, stored in different places depending on how we want to use it.
// For instance, if you're wanting to allow everyone on the internet to have access to the data, you
// would want to have a database stored somewhere on the internet open to the public.

// However, if you just want the data to be available to you, you might want to consider using local storage
// In our case, Google Chrome gives us a certain amount of local storage to work with. We can store
// data by telling Google Chrome to store it for later. 

// For this particular type of storage, we use JSON to store everything. 
// the JSON data type allows us to find something by looking for a name
// Just like an object in the real world, we have to give it a name, and then each property has a name
// we can search within an object by searching for a property, and it will give us its data back

// (at some point let them pick out properties to add)

let myCar = {
    color: "Dark Blue",
    year: 2015,
    thingsInTrunk: ["Tennis Racket", "Gloves"] // to add multiple things, use an array
}

// maybe ask them about another object and get them to create it like an ice cream cone

// then maybe teach for .. in loop

// today we'll be storing your name (or whatever name you enter in the box)
// First, let's create 

let names = [];

let saveName = function() {

    // add to list of names
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;

    // create a div (stands for division) in our webpage to store name
    let nameDiv = document.createElement('div');
    nameDiv.innerText = firstName + " " + lastName;

    // add our newly created div to the names section on our webpage
    document.getElementById('names').appendChild(nameDiv);

    // save it to the database
    names.push({first_name: firstName, last_name: lastName}); // first_name is a label, firstName is the variable

    // localStorage only accepts strings to store, so it's fairly limited
    localStorage.names = JSON.stringify(names);
}

let loadNames = function() {

    // retrieve from database
    let names = JSON.parse(localStorage.getItem('names'));

    // add to list of names using for .. in loop
    for (let name in names) {
        let nameInfo = names[name];
        let nameDiv = document.createElement('div');

        nameDiv.innerText = nameInfo.first_name + " " + nameInfo.last_name; // ask why I had to use the underscore

        // add our newly created div to the names section on our webpage
        document.getElementById('names').appendChild(nameDiv);
    }
}