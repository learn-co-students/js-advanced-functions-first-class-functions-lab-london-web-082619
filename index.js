// Code your solution in this file!
const returnFirstTwoDrivers = driverArray => driverArray.slice(0, 2);

const returnLastTwoDrivers = driverArray => driverArray.slice(-2, );

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return fare => fare * int;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(driverArray);
}