const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multValue) => {
    return function (value){
        return multValue * value;
    }
}

const fareDoubler = (fare) => {
    return fare * 2;
}

const fareTripler = (fare) => {
    return fare * 3;
}

const selectDifferentDrivers = (arrayOfDrivers, drivers) => {
    return drivers(arrayOfDrivers);
}