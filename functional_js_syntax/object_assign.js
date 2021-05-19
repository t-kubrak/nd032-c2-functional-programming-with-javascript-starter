// Merge another character into this state. Keep at least one value and change at least one value

let state = {
    name: 'Wash',
    ship: {
        name: 'Serenity',
        class: 'Firefly'
    },
    role: 'Pilot',
    favoriteThing: {
        item: "Toy",
        details: {
            type: 'Toy Tyrannosaurus Rex'
        }
    }
}

const incomingState = {
    name: 'Mal',
    role: 'Captain',
    favoriteThing: {
        item: "Not complicated"
    },
    history: ["Browncoat sergeant"]
}

state = Object.assign(state, incomingState);
// Object.assign(target, source)
console.log(state)
// Resulting object
// state = { 
//     name: "Mal", 
//     ship: { 
//         name: "Serenity", 
//         class: "Firefly" 
//     }, 
//     role: "Captain", 
//     favoriteThing: { 
//         item: "Not complicated" 
//     }, 
//     history: ["Browncoat sergeant"] 
// } 

// Your Code here
const updatedState = {
    name: 'Jack',
    favoriteThing: {
        item: {
            name: "Not complicated"
        }
    }

}
state = Object.assign(state, updatedState)
console.log(state)