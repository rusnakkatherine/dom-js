// if conditions
// var hour = 24;
var hour = prompt('what time in hours is it');
// if (hour > 18){
    // console.log('class has started');
// }
if (hour >18 && hour < 21) {
    // continue class
    console.log('class hours');
}
    else{
        console.log('non-class hours');
    }

// switch condition
var minute = prompt('how many minutes past the hour');
switch(minute){
    case 0:
    console.log('hour has just begun');
        break;
    case 30:
    console.log('it is almost the next hour');
        break;
    default:
    console.log('waiting for next hour');
        break;

}
//for statement
// var i = hour;
// for (i=0; i<=24; i++){


// }