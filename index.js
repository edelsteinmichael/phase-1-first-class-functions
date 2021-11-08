// task 1

function activityOne() {
    console.log("play video games")
}
function spy() {
    console.log("walk the dog")
    activityOne()
}
function receivesAFunction(spy) {
    console.log("activities for today")
    spy()
} 
// task 2

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("hope this works")
    }
}

// task 3


function returnsAnAnonymousFunction() {
    return function () {
        console.log("this has to work")
    }
}