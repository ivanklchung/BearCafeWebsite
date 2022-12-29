// Navigation Bar
const menu = document.querySelector('.menu')
const navigationbar = document.querySelector('.navigationbar')

//add Change to navigation bar when clicked
//when clicked again, all changes will be reverted to original
menu.addEventListener('click',()=>{
    navigationbar.classList.toggle('change')
    menu.classList.toggle('change')
})


// Review Submission
function reviewChecker(){
    // name is not entered
    if(document.getElementById('name').value == "") {
        alert('please enter your name');
        return false;
    }
    // email is not entered
    else if(document.getElementById('email').value == "") {
        alert('please enter an email');
        return false;
    }

    // review is not entered
   if(document.getElementById('text').value == "") {
        alert('please enter a review message');
        return false;
    }

    // all fields are filled
    if(document.getElementById('name').value != "" || document.getElementById('email').value != ""
    || document.getElementById('text').value != "") {
        alert('Submitted!');
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('text').value = "";
        return false;
        
    }

}

// Squeak Audio
var squeak = new Audio('sound/squeak.wav');
function playFunction(player){
    if (player== 'y')
    {
        squeak.play();
    }
}

// Last Modified Date
document.getElementById("update").innerHTML = new Date(document.lastModified);








