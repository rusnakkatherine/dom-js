// // 2 variables with assigned values
// var age = prompt('please enter your age');
// var accompaniedByAdult = prompt('are you accompanied by an adult');
// var yes = true;
// var no = false;
// if (age >= 18 && age < 21)
// {
//     alert('allowed!');
// }  
// else if (accompaniedByAdult !='yes')
//     {
//         alert('denied');
//     }
//         if( age>21)
//         {
//             alert('you are free');
//         }
//             else if (age<18)
//             {
//                 alert('try again next year');
//             }
// var age = 19;
//     accompaniedByAdult = false;
var age = prompt('enter your age');

if (age >= 18 && age < 21)
{
   var accompaniedByAdult = confirm('are you accompanied by an adult');
    // if(accompaniedByAdult){
    //     alert('allowed');
    // }
    //     else if (accompaniedByAdult == false)
    //     {
    //         alert('denied');
    //     }
    //ternary operation
    accompaniedByAdult ? alert('allowed') : alert('denied');
}
else if(age>=21){
    alert('you are free');
}

    else
    {
        alert('try again next year');
    }
    // ternary operation for whole check
    // (age>=18 && age<21) ? (accompaniedByAdult ? alert ('allowed') : alert ('denied')) :(age>=21) ? alert('you are free') : alert('try again next year');