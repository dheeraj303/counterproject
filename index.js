var number = 0;

document.getElementById('number').innerHTML = number;
const plusbutton = document.getElementById('plus_button');

const minusbutton = document.getElementById('minus_button');


// Event Listener syntax 

// (onwhich you are attaching event).addEventListener('the event',callback function);

plusbutton.addEventListener('click',incrementValue);


function incrementValue(){
    console.log("plus button clicked");
    console.log(number);
    document.getElementById('number').innerHTML = ++number; 
}

minusbutton.addEventListener('click',function(){
    console.log("minus button clicked");

    console.log(number);
    if(number > 0){
        document.getElementById('number').innerHTML = --number; 
    }else{
        alert('Your number is zero');
    }
})




