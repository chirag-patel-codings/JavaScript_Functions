console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const printOdds = count => {

    let i = count < 0 ? count : 0;
    let until = count < 0 ? 0 : count;

    for ( ; ; i++) {

        if (i == until + 1) break;
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

// printOdds(-15);
// printOdds(15);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const checkAge = (userName, age) => {       // '{' required for the function body because there are more than one statements in the scope.

    let message = '';
    userName = userName ? userName.trim() : '';
    let isInValidAgeValue = (age == null || isNaN(age)) ? true : false;

    if (userName && userName != '' && age && !isInValidAgeValue) {

        let aboveSixteen = `Congrats ${userName}, you can drive!`;
        let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

        if (age < 16) {
            message = belowSixteen;
        }
        else {
            message = aboveSixteen;
        }

    }
    else {

        if (userName == '') {
            message = `User Name is required!!!\n`;
        }

        if (isInValidAgeValue) {
            message += `Please provide a valid numerical value for Age!!!`;
        }

    }

    console.log(message);

}

//checkAge('test', 16);

const findQuadrant = (x, y) => {
    
    let message = '';
    let xyCoodinates; 
    
    if ( (x || (x == 0)) && (y || (y == 0)) ) {
        xyCoodinates = `${x == 0 ? '0' : x >= 0 ? 'P' : 'N'}${y == 0 ? '0' : y >= 0 ? 'P' : 'N'}`;
    }

    switch (xyCoodinates) {
        case '00':
            message = "Origin!";
            break;
        case 'P0':
        case 'N0':
            message = "X-Axis";
            break;
        case '0P':
        case '0N':
            message = "Y-Axis";
            break;
        case 'PP':
            message = "Quadrant One!";
            break;
        case 'NP':
            message = "Quadrant Two!";
            break;
        case 'NN':
            message = "Quadrant Three!";
            break; 
        case 'PN':
            message = "Quadrant Four!";
            break; 
        default:
            message = "can't be specified!!!";
            break;
    }

    console.log(`(${x}, ${y}) Point${(x && y) ? ' is on' : '' }: ${message}`);

}

// findQuadrant();
// findQuadrant(undefined, 1);
// findQuadrant(1, undefined);
// findQuadrant(null, 1);
// findQuadrant(1, null);
// findQuadrant(0, 0);
// findQuadrant(0, 2); 
// findQuadrant(0, -2)
// findQuadrant(-1, 0);
// findQuadrant(1, 0); 
// findQuadrant(1, 2); 
// findQuadrant(-1, 2);
// findQuadrant(-1, -2); 
// findQuadrant(1, -2); 


const canFormTriangle = (side1, side2, side3) => {

    let message = '';

    if ( side1 && side1 > 0 && side2 && side2 > 0 && side3 && side3 > 0 ) {

        if ( (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1) ) {
            
            // This can form a valid Triangle
            if ( (side1 == side2) && (side2 == side3) ) {
                message = "This will form an EQUILATERAL Triangle!!!";
            }
            else if ( side1 == side2 || side2 == side3 || side1 == side3 ) {
                message = "This will form an ISOSCELES Triangle!!!";
            }
            else{
                message = "This will form a SCALENE Triangle!!!";
            }

        }
        else {
            message = "The supplied three dimensions cannot form a Triangle!!!";
        }

    }
    else {
        message = "There are always three sides (with positive dimensions) required to make any Triangle!!!";
    }
    
    console.log(`Sides dimensions: (${side1}, ${side2}, ${side3}) - ${message}`);
}


// canFormTriangle(-1, 11, 1);
// canFormTriangle(0, 1, 2);
// canFormTriangle(1, 2, 2);
// canFormTriangle(2, 2, 1);
// canFormTriangle(5, 5, 8);
// canFormTriangle(2, 2, 2);
// canFormTriangle(1, 1, 1);
// canFormTriangle(6, 6, 6);
// canFormTriangle(2, 3, 4);
// canFormTriangle(3, 4, 5);
// canFormTriangle(5, 7, 9);
// canFormTriangle(4, 7, 10);
// canFormTriangle(12, 17, 22);


const dataUsageStatistics = (planLimit = 100, day, usage = 0) => {

    day = (!day || day == 0) ? new Date().getDate() : day;
    // const daysInCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    let userMessage = '';
    let remainingDays = 30 - day;
    let averageDailyUsage = usage / day;
    let averageDailyPlanLimit = planLimit / 30.0;
    let remainingAvgDailyUsageLimit = ((planLimit - usage) / remainingDays).toFixed(2);

    userMessage = `${day} day(s) used, ${remainingDays} day(s) remaining.\n`;
    userMessage += `Average daily use: ${averageDailyUsage.toFixed(3)} GB/day\n`;

    if (averageDailyUsage > averageDailyPlanLimit) {

        userMessage += `You are EXCEEDING your average daily use (${averageDailyPlanLimit.toFixed(2)} GB/day),\n`;
        userMessage += `continuing this high usage, you'll exceed your data plan by\n${(Math.abs((averageDailyPlanLimit - averageDailyUsage) * 30.0)).toFixed(1)} GB.\n`;
        userMessage += `To stay below your data plan, use no more than ${remainingAvgDailyUsageLimit} GB/day.`;

    }
    else{

        userMessage += `There are no recommendations for your existing usage.\nYou may not exceed your plan limit as long as you maintain your daily average of ${remainingAvgDailyUsageLimit} GB/day for the remaining days until plan renewal.!!!`;

    }
    
    console.log(userMessage);

}

// dataUsageStatistics(100, 15, 56);
// dataUsageStatistics(100, undefined, 70);
// dataUsageStatistics(100, null, 70);
// dataUsageStatistics(100, 0, 70);