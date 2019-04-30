var btn = document.getElementsByClassName('button');
// console.log(btn[0]);
var btnUsingSelector = document.querySelector('.button');
btn[0].getElementsByClassName.padding = '10px';
btn[0].getElementsByClassName.fontSize = '22px';

// add event listener

btnUsingSelector.addEventListener('click', function (){
    console.log('successful click from JS');
});

btnUsingSelector.addEventListener('mouseover', function (e){
    
    var btnText = event.target.innerHTML;
    console.log(event.target);
    alert('mouseover on the' +  ' ' + btnText + ' '   + 'button.');
    console.log(event);
});
// var btn = document.getElementsByClassName('cancel-button');
var cancelBtn = document.querySelector('.cancel-button');
cancelBtn.addEventListener('click', function(event) {
    var btnText = event.target.innerHTML;
    console.log(event.target);
    var response = confirm('confirm cancel');
    console.log(response);

    // if user confirms invoke action
    var cancelBtn = ('confirm cancel');
    if(response == null || response == true){
      alert ('cancelled');   }
        else{
            alert('user cancelled the cancel');
        }
});
document.addEventListener('keypress', function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.keyCode);
})
document.addEventListener('keydown', function (event) {
    console.log(event);
    console.log(event.key);
    console.log(event.keyCode);
})
document.addEventListener('keyup', function (event) {
    console.log(event);
    console.log(event.key);
    console.log(event.keyCode);
})
document.addEventListener('scroll', function (event) {
    console.log(event);
})