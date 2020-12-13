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

dayOfWeek = 1

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

    if(mon === 4 || mon === 6 || mon === 9 || mon === 11){
      
        if(dayNum === 30){
            mon++;
            dayNum = 1
        }
        else 
        dayNum++;
    }
    else if(mon === 2 && (y % 4) === 0 && (y % 100) !== 0  ){
        if (dayNum === 29){

            mon++
            dayNum = 1
        }
        else 
        dayNum++;
    }
    else if(mon === 2 && (y % 400) === 0){
        if (dayNum === 29){

            mon++
            dayNum = 1
        }
        else 
        dayNum++;
    }
    else if(mon === 2){
        if (dayNum === 28){
            mon++
            dayNum = 1
        }
        else 
        dayNum++;
    }
    else if (mon === 12){
        if (dayNum === 31){
            mon = 1;
            dayNum = 1
            y++;
        }
        else 
        dayNum++;
    }
    else{
        if (dayNum === 31){
            mon++;
            dayNum = 1
        }
        else{
            dayNum++;
        }
    }

    date = {
        month: mon, 
        day: dayNum,
        year: y
    }

    return date;


    
}

while(date.year <= 2000){

    dayOfWeek = switchDay(dayOfWeek);
    date = switchDayMonth(date.month,date.year,date.day)
  

    if(date.day === 1 && dayOfWeek === 7 && date.year>1900){
        numberofSundays++;
        console.log(date);
    }

}

console.log(numberofSundays);