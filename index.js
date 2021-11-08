// task 1

function activityOne() {
    console.log("play video games")
}
function spy() {
    console.log("walk the dog")
    activityOne()
}
function receivesAFunction(spy){
    console.log("activities for today")
    spy()
} 
// task 2
function namedFunction() {
    return 2 + 2
}