// Code your solution in this file!
function distanceFromHqInBlocks(blocksAway) {
let location = 42;
if (blocksAway > location) {
    return blocksAway - location
}
else if (blocksAway < location) {
    return location - blocksAway
}
}
function distanceFromHqInFeet(feetAway) {
   return distanceFromHqInBlocks(feetAway) * 264;
   }

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    }
    else if (start < destination) {
        return (destination - start) * 264;
    }
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return 'cannot travel that far'
    }
}
