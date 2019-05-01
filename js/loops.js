 var fruits =['apple', 'orange', 'strawberry', 'banana', 'pear', 'kiwi']
//  console.log(i);
//  for (var i=0; i < fruits.length; i++){
//      console.log(i);
//     console.log(fruits[i]);
//  }
var index = 0;
// do{
//     console.log(fruits[index]);
//     index ++;
// }
//     while(index<fruits.length);

    // while loop
// while(index<fruits.length){
//     console.log(fruits[index]);
//     index++;
// }
// &&: and
// ||: or
// !: not
// for in
fruits.foo = 'test';
for(var i in fruits){
    console.log(i);
}

// for of
for(var i of fruits){
    console.log(i);
}