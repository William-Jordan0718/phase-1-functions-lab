function distanceFromHqInBlocks(location) {
    if (location < 0) {
        (location * -1)
    }
    return Math.abs(location - 42) 
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, location) {
    return Math.abs(start - location) * 264
}

function calculatesFarePrice(start, destination) {
   
    const farePrice = distanceTravelledInFeet(start, destination) 
   
   if (farePrice === 400) {
    return 'gives customers a free sample'
   } else if (401 <= farePrice <= 2000) { 
    return 'charges 2 cents per foot when total feet travelled is between 400 and 2000'
   } else if (2001 <= farePrice <= 25000) {
    return 'charges 25 dollars for a distance over 2000 feet'
   } else (farePrice >= 25001) ; 'does not allow rides over 2500 feet'
   };
    
  