// 



function Greetings(fname){
    var fname = document.getElementById("fname").value;
    var surname = document.getElementById("surname").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var state = document.getElementById("state").value; 
    
    alert("Hi My Name is " + fname +" "+ surname + 
    ", My Phone Number is " + number +
    ", and my Email is " + email +
    ". I was born on "+ dob +
     ". I am from "+ state + " State"
      + ". my hobbies are ");
    }