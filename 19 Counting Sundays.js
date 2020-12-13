// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

// year = 1900
dayOfWeek = 1
// dayOfMonth = 1
// month = 1;
date = {
    month: 1, 
    day: 1,
    year: 1900
}

numberofSundays = 0;

const switchDay =(day) => {
    if(day<7) day++
    else day = 1;

    return day
}
const switchDayMonth = (mon, y, dayNum) => {

    // console.log(mon);
    if(mon === 4 || mon === 6 || mon === 9 || mon === 11){
        // console.log("here");
        // console.log(mon);

        if(dayNum === 30){
            // console.log("here");
            mon++;
            dayNum = 1
        }
        else 
        dayNum++;
    }
    else if(mon === 2 && (y % 4) === 0 && (y % 100) !== 0  ){
        // console.log("here");
        if (dayNum === 29){
            // console.log("here");

            mon++
            dayNum = 1
        }
        else 
        dayNum++;
    }
    else if(mon === 2 && (y % 400) === 0){
        // console.log("here");
        if (dayNum === 29){
            // console.log("here");

            mon++
            dayNum = 1
        }
        else 
        dayNum++;
    }
    else if(mon === 2){
        // console.log("here");
        if (dayNum === 28){
            // console.log("here");
            // console.log(mon);

            mon++
            dayNum = 1
        }
        else 
        dayNum++;
    }
    else if (mon === 12){
        // console.log("here is 12");
        if (dayNum === 31){
            // console.log("here");
            mon = 1;
            dayNum = 1
            y++;
        }
        else 
        dayNum++;
    }
    else{
        // console.log("here");
        if (dayNum === 31){
            // console.log("here");
            mon++;
            dayNum = 1
        }
        else{
            // console.log("here");
            dayNum++;
        }
    }

// console.log(mon);
    date = {
        month: mon, 
        day: dayNum,
        year: y
    }
    // console.log(date);

    return date;


    
}

while(date.year <= 2000){

    dayOfWeek = switchDay(dayOfWeek);
    date = switchDayMonth(date.month,date.year,date.day)
    // console.log(dayOfWeek);
    // console.log(date);

    if(date.day === 1 && dayOfWeek === 7 && date.year>1900){
        numberofSundays++;
        console.log(date);
    }

}

console.log(numberofSundays);