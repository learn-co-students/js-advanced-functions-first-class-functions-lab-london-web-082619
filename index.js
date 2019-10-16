// Code your solution in this file!


function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(drivers.length-2, drivers.length)
}

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
]

function createFareMultiplier(integer){

    return function fareMultiplier(fare){
        return fare * integer;
    }
}

const fareDoublerFunction = createFareMultiplier(2);

function fareDoubler(fare){
    return fareDoublerFunction(fare);
}


const fareTriplerFunction = createFareMultiplier(3);

function fareTripler(fare){
    return fareTriplerFunction(fare);
}

function selectDifferentDrivers(drivers, driverFunction){
    return driverFunction(drivers);
}