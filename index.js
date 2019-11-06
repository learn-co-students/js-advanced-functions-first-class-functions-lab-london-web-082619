// Code your solution in this file!

const testArr = ["Tom", "Takeshi", "David", "Mikawa", "Yan"]

const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2)
};

const returnLastTwoDrivers = (arr) =>{
    return arr.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) =>{
    return (fare) => { return fare * num
    }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arr, selectingDrivers) =>{
    return selectingDrivers(arr)

}